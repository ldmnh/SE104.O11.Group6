USE DATABASE_IE104
GO

--TRIGGER
--room_sum_rating trong RoomType được thay đổi khi Rating được thay đổi.
DELIMITER //

DROP TRIGGER IF EXISTS trg_RoomSumRating_Insert
//

CREATE TRIGGER trg_RoomSumRating_Insert
AFTER INSERT ON Rating
FOR EACH ROW
BEGIN
    DECLARE room_id_char CHAR(12);
    DECLARE count_ratings INT;

    SELECT NEW.room_id, COUNT(*) INTO room_id_char, count_ratings
    FROM Rating
    WHERE room_id = NEW.room_id
    GROUP BY room_id;
    
    UPDATE RoomType
    SET room_sum_rating = room_sum_rating + count_ratings
    WHERE room_id = room_id_char;
END //

DELIMITER ;

--bank_default_id nếu tồn tại trong AuthUser thì phải được sở hữu của AuthUser.
DELIMITER //

DROP TRIGGER IF EXISTS trg_CheckBankOwnership_Insert

CREATE TRIGGER trg_CheckBankOwnership_Insert
AFTER INSERT ON AuthUser
FOR EACH ROW
BEGIN
    -- Check if bank_default_id exists in BankCard and belongs to AuthUser
    IF NEW.bank_default_id IS NOT NULL THEN
        IF NOT EXISTS (
            SELECT 1
            FROM BankCard AS b
            WHERE NEW.bank_default_id = b.bank_id
                AND NEW.au_user_id = b.au_user_id
        ) THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'bank_default_id must exist in BankCard and belong to AuthUser';
        END IF;

    END IF;
END;DROP TRIGGER IF EXISTS trg_CheckBankOwnership_Insert


CREATE TRIGGER trg_CheckBankOwnership_Update
AFTER UPDATE ON AuthUser
FOR EACH ROW
BEGIN
    -- Check if bank_default_id exists in BankCard and belongs to AuthUser
    IF NEW.bank_default_id IS NOT NULL THEN
        IF NOT EXISTS (
            SELECT 1
            FROM BankCard AS b
            WHERE NEW.bank_default_id = b.bank_id
                AND NEW.au_user_id = b.au_user_id
        ) THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'bank_default_id must exist in BankCard and belong to AuthUser';
        END IF;
    END IF;
END;

DELIMITER //

--debit_default_id nếu tồn tại trong AuthUser thì phải được sở hữu của AuthUser.
DELIMITER //

DROP TRIGGER IF EXISTS trg_CheckDebitOwnership_Insert

CREATE TRIGGER trg_CheckDebitOwnership_Insert
AFTER INSERT
ON AuthUser
FOR EACH ROW
BEGIN
    -- Kiểm tra xem debit_default_id tồn tại trong AuthUser và thuộc sở hữu của AuthUser
    IF NEW.bank_default_id IS NOT NULL THEN
        IF EXISTS (
            SELECT 1
            FROM BankCard AS b
            WHERE NEW.bank_default_id = b.bank_id
                AND NEW.au_user_id <> b.au_user_id
        ) THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'debit_default_id must exist in DebitCard and belong to AuthUser.';
        END IF;
    END IF;
END;

DROP TRIGGER IF EXISTS trg_CheckDebitOwnership_Update

CREATE TRIGGER trg_CheckDebitOwnership_Update
AFTER UPDATE
ON AuthUser
FOR EACH ROW
BEGIN
    -- Kiểm tra xem debit_default_id tồn tại trong AuthUser và thuộc sở hữu của AuthUser
    IF NEW.bank_default_id IS NOT NULL THEN
        IF EXISTS (
            SELECT 1
            FROM BankCard AS b
            WHERE NEW.bank_default_id = b.bank_id
                AND NEW.au_user_id <> b.au_user_id
        ) THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'debit_default_id must exist in DebitCard and belong to AuthUser.';
        END IF;
    END IF;
END;
DELIMITER //

--pay_id của Booking là của thanh toán tiền mặt thì is_payed là chưa được thanh toán.
DROP TRIGGER IF EXISTS trg_CheckCashPayment_Insert

CREATE TRIGGER trg_CheckCashPayment_Insert
AFTER INSERT ON Booking
FOR EACH ROW
BEGIN
    -- Check if pay_id corresponds to cash payment (matching pay_id for cash payment)
    -- and is_payed is not yet paid (is_payed = 0)
    IF EXISTS (
        SELECT 1
        FROM NEW
        INNER JOIN PayingMethod AS p
            ON NEW.pay_id = p.pay_id
        WHERE p.pay_name = 'cash' AND NEW.book_is_payed = 0
    ) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Thanh toán tiền mặt thì book_is_payed chưa được thanh toán.';
    END IF;
END //

DELIMITER ; -- checking ...

--status của là cancel thì rea_id không được trống.
CREATE TRIGGER trg_CheckCancellationReason
ON Booking
AFTER UPDATE
AS
BEGIN
    -- Kiểm tra nếu status là "cancel" và rea_id là NULL hoặc trống
    IF EXISTS (
        SELECT 1
        FROM inserted AS i
        WHERE i.book_status = 'cancel' AND (i.rea_id IS NULL OR i.rea_id = '')
    )
    BEGIN
        RAISERROR('Khi status là "cancel", rea_id không được trống.', 16, 1);
        ROLLBACK;
        RETURN;
    END
END;
GO

--book_total_cost là tổng của các book_final_cost * book_num_room trong BookingDetails.
CREATE TRIGGER trg_UpdateBookingTotalCost
ON BookingDetail
AFTER INSERT, UPDATE
AS
BEGIN
    -- Tính toán tổng giá trị từ BookingDetails
    DECLARE @TotalCost float;
    SELECT @TotalCost = SUM(book_final_cost * book_num_room)
    FROM inserted;

    -- Cập nhật cột book_total_cost trong bảng Booking
    UPDATE Booking
    SET book_total_cost = @TotalCost
    WHERE Booking.book_id IN (SELECT book_id FROM inserted);
END;
GO

--city_id nếu tồn tại trong Accommodation thì prov_id của bảng City với khóa city_id bằng prov_id của Accommodation.
CREATE TRIGGER trg_CheckCityProvince
ON Accommodation
AFTER INSERT, UPDATE
AS
BEGIN
    -- Kiểm tra xem city_id tồn tại trong City và prov_id khớp
    IF EXISTS (
        SELECT 1
        FROM inserted AS i
        LEFT JOIN City AS c ON i.city_id = c.city_id
        WHERE i.prov_id <> c.prov_id OR c.prov_id IS NULL
    )
    BEGIN
        RAISERROR('city_id must exist in City, and prov_id must match in Accommodation and City.', 16, 1);
        ROLLBACK;
        RETURN;
    END
END;
GO