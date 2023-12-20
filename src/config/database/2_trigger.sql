USE DATABASE_SE104;

DELETE FROM usernoti;
DELETE FROM notification;
DELETE FROM rating;
DELETE FROM bookingdetail;
DELETE FROM booking;
DELETE FROM reasoncancel;
DELETE FROM payingmethod;
DELETE FROM roomtypeimg;
DELETE FROM roomexte;
DELETE FROM extension;
DELETE FROM roomtype;
DELETE FROM accoimg;
DELETE FROM accofea;
DELETE FROM feature;
DELETE FROM accommodation;
DELETE FROM city;
DELETE FROM province;
DELETE FROM bankcard;
DELETE FROM debitcard;
DELETE FROM authuser;
DELETE FROM admin;


-- TRIGGER
-- room_sum_rating trong RoomType được thay đổi khi Rating được thay đổi.
DELIMITER //

DROP TRIGGER IF EXISTS trg_RoomCountRating_Insert;

CREATE TRIGGER trg_RoomCountRating_Insert
AFTER INSERT ON Rating
FOR EACH ROW
BEGIN
    DECLARE room_id_int INT;
    DECLARE count_ratings INT;

    SELECT NEW.room_id, COUNT(*)
    INTO room_id_int, count_ratings
    FROM Rating
    WHERE room_id = NEW.room_id
    GROUP BY room_id;
    
    UPDATE RoomType
    SET room_count_rating = count_ratings
    WHERE room_id = room_id_int;
END;

DELIMITER ;


-- avg_rating trong RoomType được thay đổi khi Rating được thêm.
DROP TRIGGER IF EXISTS trg_RoomAvgRating_Insert;

DELIMITER //
CREATE TRIGGER trg_RoomAvgRating_Insert
AFTER INSERT ON Rating
FOR EACH ROW
BEGIN
    DECLARE total_points FLOAT;
    DECLARE total_ratings INT;

    -- Calculate total rating points and quantity for the specific room_id
    SELECT SUM(rating_point), COUNT(*) 
    INTO total_points, total_ratings
    FROM Rating
    WHERE room_id = NEW.room_id;

    -- Update avg_rating in RoomType table
    UPDATE RoomType
    SET room_avg_rating = IF(total_ratings > 0, total_points / total_ratings, 0)
    WHERE room_id = NEW.room_id;
END;

DELIMITER ;


-- -- bank_default_id nếu tồn tại trong AuthUser thì phải được sở hữu của AuthUser.
-- DELIMITER //

-- DROP TRIGGER IF EXISTS trg_CheckBankOwnership_Insert;

-- CREATE TRIGGER trg_CheckBankOwnership_Insert
-- AFTER INSERT ON AuthUser
-- FOR EACH ROW
-- BEGIN
--     -- Check if bank_default_id exists in BankCard and belongs to AuthUser
--     IF NEW.bank_default_id IS NOT NULL THEN
--         IF NOT EXISTS (
--             SELECT 1
--             FROM BankCard AS b
--             WHERE NEW.bank_default_id = b.bank_id
--                 AND NEW.au_user_id = b.au_user_id
--         ) THEN
--             SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'bank_default_id must exist in BankCard and belong to AuthUser';
--         END IF;
--     END IF;
-- END;

-- DROP TRIGGER IF EXISTS trg_CheckBankOwnership_Update;

-- CREATE TRIGGER trg_CheckBankOwnership_Update
-- AFTER UPDATE ON AuthUser
-- FOR EACH ROW
-- BEGIN
--     -- Check if bank_default_id exists in BankCard and belongs to AuthUser
--     IF NEW.bank_default_id IS NOT NULL THEN
--         IF NOT EXISTS (
--             SELECT 1
--             FROM BankCard AS b
--             WHERE NEW.bank_default_id = b.bank_id
--                 AND NEW.au_user_id = b.au_user_id
--         ) THEN
--             SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'bank_default_id must exist in BankCard and belong to AuthUser';
--         END IF;
--     END IF;
-- END;

-- DELIMITER ;

-- -- debit_default_id nếu tồn tại trong AuthUser thì phải được sở hữu của AuthUser.
-- DELIMITER //

-- DROP TRIGGER IF EXISTS trg_CheckDebitOwnership_Insert;

-- CREATE TRIGGER trg_CheckDebitOwnership_Insert
-- AFTER INSERT
-- ON AuthUser
-- FOR EACH ROW
-- BEGIN
--     -- Kiểm tra xem debit_default_id tồn tại trong AuthUser và thuộc sở hữu của AuthUser
--     IF NEW.bank_default_id IS NOT NULL THEN
--         IF EXISTS (
--             SELECT 1
--             FROM BankCard AS b
--             WHERE NEW.bank_default_id = b.bank_id
--                 AND NEW.au_user_id <> b.au_user_id
--         ) THEN
--             SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'debit_default_id must exist in DebitCard and belong to AuthUser.';
--         END IF;
--     END IF;
-- END;

-- DROP TRIGGER IF EXISTS trg_CheckDebitOwnership_Update;

-- CREATE TRIGGER trg_CheckDebitOwnership_Update
-- AFTER UPDATE
-- ON AuthUser
-- FOR EACH ROW
-- BEGIN
--     -- Kiểm tra xem debit_default_id tồn tại trong AuthUser và thuộc sở hữu của AuthUser
--     IF NEW.bank_default_id IS NOT NULL THEN
--         IF EXISTS (
--             SELECT 1
--             FROM BankCard AS b
--             WHERE NEW.bank_default_id = b.bank_id
--                 AND NEW.au_user_id <> b.au_user_id
--         ) THEN
--             SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'debit_default_id must exist in DebitCard and belong to AuthUser.';
--         END IF;
--     END IF;
-- END;
-- DELIMITER ;

-- -- pay_id của Booking là của thanh toán tiền mặt thì is_payed là chưa được thanh toán.
-- DROP TRIGGER IF EXISTS trg_CheckCashPayment_Insert;

-- CREATE TRIGGER trg_CheckCashPayment_Insert
-- AFTER INSERT ON Booking
-- FOR EACH ROW
-- BEGIN
--     -- Check if pay_id corresponds to cash payment (matching pay_id for cash payment)
--     -- and is_payed is not yet paid (is_payed = 0)
--     IF EXISTS (
--         SELECT 1
--         FROM booking AS b
--         INNER JOIN PayingMethod AS p
--             ON b.pay_id = p.pay_id
--         WHERE p.pay_name <> 'cash' AND b.book_is_paid = 0
--     ) THEN
--         SIGNAL SQLSTATE '45000'
--         SET MESSAGE_TEXT = 'Thanh toán khác tiền mặt thì book_is_payed phải được thanh toán.';
--     END IF;
-- END;

-- DELIMITER;


-- -- status của là cancel thì rea_id không được trống.
-- DELIMITER //

-- DROP TRIGGER IF EXISTS trg_CheckCancellationReason;

-- CREATE TRIGGER trg_CheckCancellationReason
-- AFTER UPDATE ON Booking
-- FOR EACH ROW
-- BEGIN
--     -- Kiểm tra nếu status là "cancel" và rea_id là NULL hoặc trống
--     IF booking.book_status = -1 AND booking.rea_id IS NULL THEN
--         SIGNAL SQLSTATE '45000'
--         SET MESSAGE_TEXT = 'Khi status là "cancel", rea_id không được trống.';
--     END IF;
-- END;

-- DELIMITER ;


-- book_total_cost là tổng của các book_final_cost * book_num_room trong BookingDetails.
DROP TRIGGER IF EXISTS trg_UpdateBookingTotalCost_Insert;

DELIMITER //

CREATE TRIGGER trg_UpdateBookingTotalCost_Insert
AFTER INSERT ON BookingDetail
FOR EACH ROW
BEGIN
    -- Calculate the total cost from BookingDetails
    SET @book_id_int = NEW.book_id;

    -- Declare and set the variable @book_days
    SET @book_days := (
        SELECT DATEDIFF(book_end_datetime, book_start_datetime)
        FROM Booking
        WHERE book_id = @book_id_int
    );    

    -- Calculate the total cost and update the book_total_cost column in the Booking table
    UPDATE Booking
    SET book_cost_after = (
        SELECT SUM(bd.book_room_cost_after * bd.book_num_room)
        FROM BookingDetail bd
        WHERE bd.book_id = @book_id_int
    ) * @book_days,  book_cost_before = (
        SELECT SUM(bd.book_room_cost_before * bd.book_num_room)
        FROM BookingDetail bd
        WHERE bd.book_id = @book_id_int
    ) * @book_days
    WHERE book_id = @book_id_int;
END;

DELIMITER ;


DROP TRIGGER IF EXISTS trg_UpdateBookingTotalCost_Update;

DELIMITER //

CREATE TRIGGER trg_UpdateBookingTotalCost_Update
AFTER UPDATE ON BookingDetail
FOR EACH ROW
BEGIN
    -- Calculate the total cost from BookingDetails
    SET @book_id_int = NEW.book_id;
    
    -- Calculate the total cost and update the book_total_cost column in the Booking table
    UPDATE Booking
    SET book_cost_after = (
        SELECT SUM(bd.book_room_cost_after * bd.book_num_room)
        FROM BookingDetail bd
        WHERE bd.book_id = @book_id_int
    ),  book_cost_before = (
        SELECT SUM(bd.book_room_cost_before * bd.book_num_room)
        FROM BookingDetail bd
        WHERE bd.book_id = @book_id_int
    )
    WHERE book_id = @book_id_int;
END;

DELIMITER ;



-- -- city_id nếu tồn tại trong Accommodation thì prov_id của bảng City với khóa city_id bằng prov_id của Accommodation.
-- DELIMITER //

-- DROP TRIGGER IF EXISTS trg_CheckCityProvince_Insert;

-- CREATE TRIGGER trg_CheckCityProvince_Insert
-- AFTER INSERT ON Accommodation
-- FOR EACH ROW
-- BEGIN
--     -- Kiểm tra xem city_id tồn tại trong City và prov_id khớp
--     IF EXISTS (
--         SELECT 1
--         FROM City AS c
--         WHERE NEW.city_id = c.city_id AND (NEW.prov_id <> c.prov_id OR c.prov_id IS NULL)
--     ) THEN
--         SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'city_id must exist in City, and prov_id must match in Accommodation and City.';
--     END IF;
-- END;

-- DELIMITER //

-- DROP TRIGGER IF EXISTS trg_CheckCityProvince_Update;

-- CREATE TRIGGER trg_CheckCityProvince_Update
-- AFTER UPDATE ON Accommodation
-- FOR EACH ROW
-- BEGIN
--     -- Kiểm tra xem city_id tồn tại trong City và prov_id khớp
--     IF EXISTS (
--         SELECT 1
--         FROM City AS c
--         WHERE NEW.city_id = c.city_id AND (NEW.prov_id <> c.prov_id OR c.prov_id IS NULL)
--     ) THEN
--         SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'city_id must exist in City, and prov_id must match in Accommodation and City.';
--     END IF;
-- END;

-- DELIMITER;
