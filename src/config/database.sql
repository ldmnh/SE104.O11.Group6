use master
GO

DROP DATABASE IF EXISTS DATABASE_IE104 
GO

CREATE DATABASE DATABASE_IE104
GO

USE DATABASE_IE104
GO

CREATE TABLE Admin
(
    admin_id			char(12)		NOT NULL	UNIQUE,
    admin_nickname		varchar(50)		NOT NULL,
    admin_pass			varchar(50)		NOT NULL,
    PRIMARY KEY (admin_id)
);

CREATE TABLE AuthUser
(
    au_user_id          char(12)		NOT NULL	UNIQUE,
    au_user_full_name   nvarchar(50)	NOT NULL,
    au_user_email       varchar(50)		NOT NULL	UNIQUE,
    au_user_pass        varchar(50)		NOT NULL,
    au_user_avt_url     varchar(50),
    au_user_sex         bit,
    au_user_birthday    date,
    bank_default_id     char(12),
    debit_default_id    char(12),
    PRIMARY KEY (au_user_id)
);

CREATE TABLE BankCard
(
    bank_id				char(12)		NOT NULL	UNIQUE,
    bank_name			nvarchar(50)	NOT NULL,
    bank_brach			nvarchar(50)	NOT NULL	UNIQUE,
    bank_num			varchar(16)		NOT NULL,
    bank_name_pers		nvarchar(50)	NOT NULL,
    au_user_id			char(12)		NOT NULL,
    PRIMARY KEY (bank_id),
    FOREIGN KEY (au_user_id) REFERENCES AuthUser(au_user_id)
);

CREATE TABLE DebitCard
(
    debit_id			char(12)		NOT NULL	UNIQUE,
    debit_num			varchar(16)		NOT NULL,
    debit_end_date		datetime		NOT NULL,
    debit_CCV			varchar(10)		NOT NULL,
    debit_name			nvarchar(50)	NOT NULL,
    debit_address		nvarchar(50)	NOT NULL,
    debit_postal		varchar(10)		NOT NULL,
    au_user_id			char(12)		NOT NULL,
    PRIMARY KEY (debit_id),
    FOREIGN KEY (au_user_id) REFERENCES AuthUser(au_user_id)
);

ALTER TABLE AuthUser
ADD CONSTRAINT FK_bank_id
FOREIGN KEY (bank_default_id)
REFERENCES BankCard(bank_id);

ALTER TABLE AuthUser
ADD CONSTRAINT FK_debit_id
FOREIGN KEY (debit_default_id)
REFERENCES DebitCard(debit_id);

CREATE TABLE Province
(
    prov_id				char(12)		NOT NULL	UNIQUE,
    prov_name			nvarchar(100)	NOT NULL,
	  prov_url			varchar(50),
    PRIMARY KEY (prov_id)
);

CREATE TABLE City
(
    city_id				char(12)		NOT NULL	UNIQUE,
    city_name			nvarchar(50)	NOT NULL,
    city_url			varchar(50),
    prov_id				char(12)		NOT NULL,
    PRIMARY KEY (city_id),
    FOREIGN KEY (prov_id) REFERENCES Province(prov_id)
);

CREATE TABLE Accommodation
(
    acco_id             char(12)		NOT NULL	UNIQUE,
    acco_type           nvarchar(50)	NOT NULL	UNIQUE,
    acco_star           int				NOT NULL,
    acco_tiny_img_url   varchar(50),
    acco_name           nvarchar(100)	NOT NULL,
    acco_logan          nvarchar(50),
    acco_detail         text,
    acco_exac_location  nvarchar(50),
    city_id             char(12),
    prov_id             char(12)		NOT NULL,
    PRIMARY KEY (acco_id),
    FOREIGN KEY (city_id) REFERENCES City(city_id),
    FOREIGN KEY (prov_id) REFERENCES Province(prov_id)
);

CREATE TABLE RoomType
(
    room_id             char(12)     NOT NULL	UNIQUE,
    room_class          varchar(50)  NOT NULL,
    room_type           varchar(10)  NOT NULL,
    room_max_adult      int          NOT NULL,
    room_max_child      int          NOT NULL,
    room_single_bed     int          NOT NULL,
    room_double_bed     int          NOT NULL,
    room_total          int          NOT NULL,
    room_details_img_url	varchar(50),
    room_area           float,
    room_cost           float        NOT NULL,
    room_discount       float,
    room_date_end_discount	date,
    room_sum_rating     int          DEFAULT 0,
    acco_id             char(12)     NOT NULL	UNIQUE,
    PRIMARY KEY (room_id),
    FOREIGN KEY (acco_id) REFERENCES Accommodation(acco_id)
);

CREATE TABLE Extension
(
    exte_id				char(12)     NOT NULL	UNIQUE,
    exte_name			nvarchar(50) NOT NULL,
    PRIMARY KEY (exte_id)
);

CREATE TABLE RoomExte
(
    room_id				char(12)	NOT NULL	UNIQUE,
    exte_id				char(12)	NOT NULL	UNIQUE,
    PRIMARY KEY (room_id, exte_id),
    FOREIGN KEY (room_id) REFERENCES RoomType(room_id),
    FOREIGN KEY (exte_id) REFERENCES Extension(exte_id)
);

CREATE TABLE RoomTypeImg
(
    room_id				char(12)	NOT NULL	UNIQUE,
    room_type_image_url varchar(50) NOT NULL	UNIQUE,
    PRIMARY KEY (room_id, room_type_image_url),
    FOREIGN KEY (room_id) REFERENCES RoomType(room_id)
);

CREATE TABLE PayingMethod
(
    pay_id				char(12)    NOT NULL	UNIQUE,
    pay_name			nvarchar(50)	NOT NULL,
    PRIMARY KEY (pay_id)
);

CREATE TABLE ReasonCancel
(
    rea_id				char(12)    NOT NULL	UNIQUE,
    rea_description		nvarchar(50)	NOT NULL,
    PRIMARY KEY (rea_id)
);

CREATE TABLE Booking
(
    book_id             char(12)    NOT NULL	UNIQUE,
    book_datetime       datetime    NOT NULL,
    book_start_datetime datetime    NOT NULL,
    book_end_datetime   datetime    NOT NULL,
    pay_id              char(12)    NOT NULL,
    book_total_cost     float       NOT NULL,
    rea_id              char(12),
    book_first_name     char(50)    NOT NULL,
    book_last_name      char(50)    NOT NULL,
    book_email          varchar(50) NOT NULL,
    au_user_id          char(12)    NOT NULL,
    book_phone          char(10)    NOT NULL,
    book_note           text,
    cancel_cost         float,
    book_status         varchar(50) NOT NULL,
    book_is_payed       int         NOT NULL,
    PRIMARY KEY (book_id),
    FOREIGN KEY (pay_id) REFERENCES PayingMethod(pay_id),
    FOREIGN KEY (rea_id) REFERENCES ReasonCancel(rea_id),
    FOREIGN KEY (au_user_id) REFERENCES AuthUser(au_user_id)
);

CREATE TABLE BookingDetail
(
    book_id				char(12)	NOT NULL	UNIQUE,
    room_id				char(12)	NOT NULL	UNIQUE,
    book_final_cost		float		NOT NULL,
    book_num_room		int			NOT NULL,
    book_num_adult		int			NOT NULL,
    book_num_child		int			NOT NULL,
    PRIMARY KEY (book_id, room_id),
    FOREIGN KEY (book_id) REFERENCES Booking(book_id),
    FOREIGN KEY (room_id) REFERENCES RoomType(room_id)
);


CREATE TABLE Feature
(
    fea_id				char(12)	NOT NULL	UNIQUE,
    fea_name			nvarchar(50)	NOT NULL,
    PRIMARY KEY (fea_id)
);

CREATE TABLE AccoFea
(
    fea_id				char(12)	NOT NULL	UNIQUE,
    acco_id				char(12)	NOT NULL	UNIQUE,
    PRIMARY KEY (fea_id, acco_id),
	FOREIGN KEY (fea_id) REFERENCES Feature(fea_id),
    FOREIGN KEY (acco_id) REFERENCES Accommodation(acco_id)
);

CREATE TABLE AccoImg
(
    acco_id				char(12)	NOT NULL	UNIQUE,
    acco_img_url		varchar(50)	NOT NULL,
    PRIMARY KEY (acco_id, acco_img_url),
	FOREIGN KEY (acco_id) REFERENCES Accommodation(acco_id)
);


CREATE TABLE Rating
(
    au_user_id			char(12)    NOT NULL,
    room_id				char(12)    NOT NULL,
    rating_datetime		datetime    NOT NULL,
    rating_context		text,
    rating_point		float       NOT NULL,
    PRIMARY KEY (au_user_id, room_id, rating_datetime),
    FOREIGN KEY (au_user_id) REFERENCES AuthUser(au_user_id),
    FOREIGN KEY (room_id) REFERENCES RoomType(room_id)
);

CREATE TABLE Notification
(
    noti_id				char(12)    NOT NULL	UNIQUE,
    noti_type			nvarchar(50)	NOT NULL,
    noti_title			nvarchar(50)	NOT NULL,
    noti_subtitle		text,
    noti_datetime		datetime,
    noti_content		text		NOT NULL,
    noti_dest_url		varchar(50),
    PRIMARY KEY (noti_id)
);

CREATE TABLE UserNoti
(
    au_user_id			char(12)	NOT NULL,
    noti_id				char(12)	NOT NULL,
    usernoti_is_read	bit			NOT NULL,
    PRIMARY KEY (au_user_id, noti_id),
    FOREIGN KEY (au_user_id) REFERENCES AuthUser(au_user_id),
    FOREIGN KEY (noti_id) REFERENCES Notification(noti_id)
);
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

USE DATABASE_IE104

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
END;

DROP TRIGGER IF EXISTS trg_CheckBankOwnership_Insert

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

DELIMITER ;

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