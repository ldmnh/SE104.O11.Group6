-- USE DATABASE_SE104;

-- -- Các procedure được hỗ trợ:
-- -- sp_insert_autoID_admin(`nickname`, `pass`)
-- -- sp_insert_autoID_authuser(`first_name`, `last_name`, `email`, `pass`, @NEWID)
-- -- sp_insert_autoID_bankcard(`bank_name`, `bank_branch`, `bank_num`, `bank_name_pers`, `au_user_email`, @NEWID)
-- -- sp_insert_autoID_debitcard(`debit_num`, `debit_end_date`, `debit_CCV`, `debit_name`, `debit_address`, `debit_postal`, `au_user_id`, @NEWID)
-- -- sp_insert_autoID_province(`prov_name`, `prov_url`, @NEWID)
-- -- sp_insert_autoID_city(`city_name`, `city_url`, `prov_id`, @NEWID)
-- -- sp_insert_autoID_accommodation(`acco_type`, `acco_star`, `acco_tiny_img_url`, `acco_name`, `acco_logan`, `acco_detail`, `acco_exac_location`, `city_id`, `prov_id`, @NEWID)
-- -- sp_insert_autoID_roomtype(`room_class`, `room_type`, `room_max_adult`, `room_max_child`, `room_single_bed`, `room_double_bed`, `room_total`, `room_details_img_url`, `room_area`, `room_cost`, `room_discount`, `room_date_end_discount`, `room_sum_rating`, `acco_id`, @NEWID)
-- -- sp_insert_autoID_booking(`book_datetime`, `book_start_datetime`, `book_end_datetime`, `pay_id`, `book_total_cost`, `book_first_name`, `book_last_name`, `book_email`, `au_user_id`, `book_phone`, `book_note`, `cancel_cost`, `book_status`, `book_is_payed`, @NEWID)
-- -- sp_insert_autoID_notification(`noti_type`, `noti_title`, `noti_subtitle`, `noti_datetime`, `noti_content`, `noti_dest_url`, @NEWID)





-- -- PROCEDURE TẠO ID TỰ ĐỘNG
-- -- Admin

-- DROP PROCEDURE IF EXISTS sp_insert_autoID_admin;

-- DELIMITER //

-- CREATE PROCEDURE sp_insert_autoID_admin(
--     IN admin_nickname VARCHAR(50),
--     IN admin_pass VARCHAR(50)
-- )
-- BEGIN
--     DECLARE MaxID VARCHAR(10);
--     DECLARE Prefix CHAR(3);
--     DECLARE NewID CHAR(12);
--     SET Prefix = 'adm';

--     SELECT MAX(SUBSTRING(admin_id, 4, 9))
--     INTO MaxID
--     FROM Admin
--     WHERE admin_id LIKE CONCAT(Prefix, '_________');

--     IF MaxID IS NULL THEN
--         SET MaxID = 0;
--     END IF;

--     SET NewID = CONCAT(Prefix, LPAD(MaxID + 1, 9, '0'));

--     INSERT INTO Admin (admin_id, admin_nickname, admin_pass)
--     VALUES (NewID, admin_nickname, admin_pass);
-- END;

-- DELIMITER;

-- -- TESTING

-- DELIMITER;

-- SELECT * FROM ADMIN;

-- CALL sp_insert_autoID_admin('Hieu', 'admin');

-- DELETE FROM admin WHERE admin_nickname LIKE 'Hieu%';

-- DELIMITER;




-- -- AuthUser

-- DROP PROCEDURE IF EXISTS sp_insert_autoID_authuser;

-- DELIMITER //

-- CREATE PROCEDURE sp_insert_autoID_authuser(
--     IN au_user_first_name NVARCHAR(50),
--     IN au_user_last_name NVARCHAR(50),
--     IN au_user_email VARCHAR(50),
--     IN au_user_pass VARCHAR(50),
--     OUT NewID VARCHAR(12)
-- )
-- BEGIN
--     DECLARE MaxID VARCHAR(10);
--     DECLARE Prefix CHAR(3);
--     SET Prefix = 'usr';

--     SELECT MAX(SUBSTRING(au_user_id, 4, 9))
--     INTO MaxID
--     FROM AuthUser
--     WHERE au_user_id LIKE CONCAT(Prefix, '_________');

--     IF MaxID IS NULL THEN
--         SET MaxID = 0;
--     END IF;

--     SET NewID = CONCAT(Prefix, LPAD(MaxID + 1, 9, '0'));

--     INSERT INTO AuthUser (au_user_id, au_user_first_name, au_user_last_name, au_user_email, au_user_pass)
--     VALUES (NewID, au_user_first_name, au_user_last_name, au_user_email, au_user_pass);
-- END;

-- DELIMITER ;

-- -- TESTING
-- DELIMITER;

-- SELECT * FROM AUTHUSER;

-- CALL sp_insert_autoID_authuser('Hieu', 'Le', 'abc@gmail.com', '1234', @NEWID);
-- SELECT @NEWID;

-- DELETE FROM authuser
-- WHERE au_user_first_name LIKE 'Hieu%';

-- SELECT * FROM AUTHUSER;

-- DELIMITER ;






-- -- BankCard

-- DROP PROCEDURE IF EXISTS sp_insert_autoID_bankcard;

-- DELIMITER //

-- CREATE PROCEDURE sp_insert_autoID_bankcard(
--     IN bank_name NVARCHAR(50),
--     IN bank_branch NVARCHAR(50),
--     IN bank_num VARCHAR(16),
--     IN bank_name_pers VARCHAR(50),
--     IN au_user_email CHAR(12),
--     OUT NewID CHAR(12)
-- )
-- BEGIN
--     DECLARE MaxID VARCHAR(10);
--     DECLARE Prefix CHAR(3);
--     SET Prefix = 'bnk';

--     SELECT MAX(SUBSTRING(bank_id, 4, 9))
--     INTO MaxID
--     FROM bankcard
--     WHERE bank_id LIKE CONCAT(Prefix, '_________');

--     IF MaxID IS NULL THEN
--         SET MaxID = 0;
--     END IF;

--     SET NewID = CONCAT(Prefix, LPAD(MaxID + 1, 9, '0'));

--     DECLARE au_user_id CHAR(12);
--     IF au_user_email IS NULL THEN
--         SET au_user_id = NULL;
--     ELSE
--         SELECT au_user_id INTO au_user_id
--         FROM authuser
--         WHERE au_user_email = au_user_email;

--     INSERT INTO bankcard (bank_id, bank_name, bank_branch, bank_num, bank_name_pers, au_user_id)
--     VALUES (NewID, bank_name, bank_branch, bank_num, bank_name_pers, au_user_id);

-- END;

-- DELIMITER ;

-- -- TESTING

-- SELECT * FROM BANKCARD;

-- CALL sp_insert_autoID_bankcard('a', 'b', 'c', 'd', 'usr000000001', @NEWID);
-- SELECT @NEWID;

-- DELETE FROM bankcard WHERE bank_name LIKE 'a%';






-- -- DebitCard

-- DROP PROCEDURE IF EXISTS sp_insert_autoID_debitcard;

-- DELIMITER //

-- CREATE PROCEDURE sp_insert_autoID_debitcard(
--     IN debit_num			varchar(16),
--     IN debit_end_date		datetime,
--     IN debit_CCV			varchar(10),
--     IN debit_name			nvarchar(50),
--     IN debit_address		nvarchar(50),
--     IN debit_postal		    varchar(10),
--     IN au_user_id			char(12),
--     OUT NewID CHAR(12)
-- )
-- BEGIN
--     DECLARE MaxID VARCHAR(10);
--     DECLARE Prefix CHAR(3);
--     SET Prefix = 'deb';

--     SELECT MAX(SUBSTRING(debit_id, 4, 9))
--     INTO MaxID
--     FROM debitcard
--     WHERE debit_id LIKE CONCAT(Prefix, '_________');

--     IF MaxID IS NULL THEN
--         SET MaxID = 0;
--     END IF;

--     SET NewID = CONCAT(Prefix, LPAD(MaxID + 1, 9, '0'));

--     INSERT INTO debitcard (debit_id, debit_num, debit_end_date, debit_CCV, debit_name, debit_address, debit_postal, au_user_id)
--     VALUES (NewID, debit_num, debit_end_date, debit_CCV, debit_name, debit_address, debit_postal, au_user_id);

-- END;

-- DELIMITER ;

-- -- TESTING

-- SELECT * FROM debitCARD;

-- CALL sp_insert_autoID_debitcard('1', '2023-11-01', '2', '3', '1', '3', NULL, @NEWID);
-- SELECT @NEWID;

-- DELETE FROM debitcard WHERE debit_num = '1';







-- -- Province
-- DROP PROCEDURE IF EXISTS sp_insert_autoID_province;

-- DELIMITER //

-- CREATE PROCEDURE sp_insert_autoID_province(
-- 	IN prov_name	nvarchar(100),
-- 	IN prov_url	    varchar(50),
--     OUT NewID CHAR(12)
-- )
-- BEGIN
--     DECLARE MaxID VARCHAR(10);
--     DECLARE Prefix CHAR(3);
--     SET Prefix = 'pro';

--     SELECT MAX(SUBSTRING(prov_id, 4, 9))
--     INTO MaxID
--     FROM Province
--     WHERE prov_id LIKE CONCAT(Prefix, '_________');

--     IF MaxID IS NULL THEN
--         SET MaxID = 0;
--     END IF;

--     SET NewID = CONCAT(Prefix, LPAD(MaxID + 1, 9, '0'));

--     INSERT INTO Province (prov_id, prov_name, prov_url)
--     VALUES (NewID, prov_name, prov_url);
-- END;

-- DELIMITER ;

-- -- TESTING

-- SELECT * FROM PROVINCE;

-- CALL sp_insert_autoID_province('Da nang', NULL, @NEWID);
-- SELECT @NEWID;

-- DELETE FROM province WHERE prov_name LIKE 'Da nang%';







-- -- City
-- DROP PROCEDURE IF EXISTS sp_insert_autoID_city;

-- DELIMITER //

-- CREATE PROCEDURE sp_insert_autoID_city(
-- 	IN city_name  nvarchar(50),
--     IN city_url   varchar(50),
--     IN prov_id    char(12),
--     OUT NewID   CHAR(12)
-- )
-- BEGIN
--     DECLARE MaxID VARCHAR(10);
--     DECLARE Prefix CHAR(3);
--     SET Prefix = 'cty';

--     SELECT MAX(SUBSTRING(city_id, 4, 9))
--     INTO MaxID
--     FROM City
--     WHERE city_id LIKE CONCAT(Prefix, '_________');

--     IF MaxID IS NULL THEN
--         SET MaxID = 0;
--     END IF;

--     SET NewID = CONCAT(Prefix, LPAD(MaxID + 1, 9, '0'));

--     INSERT INTO City (city_id, city_name, city_url, prov_id)
--     VALUES (NewID, city_name, city_url, prov_id);

-- END;

-- DELIMITER ;

-- -- TESTING

-- SELECT * FROM CITY;

-- CALL sp_insert_autoID_city('Da nang', NULL, 'pro000000001', @NEWID);
-- SELECT @NEWID;

-- DELETE FROM city WHERE city_name LIKE 'Da nang%';






-- -- Accommodation
-- DROP PROCEDURE IF EXISTS sp_insert_autoID_accommodation;

-- DELIMITER //

-- CREATE PROCEDURE sp_insert_autoID_accommodation(
-- 	IN acco_type            nvarchar(50),
--     IN acco_star            int,
--     IN acco_tiny_img_url    varchar(50),
--     IN acco_name            nvarchar(100),
--     IN acco_logan           nvarchar(50),
--     IN acco_detail          text,
--     IN acco_exac_location   nvarchar(50),
--     IN city_id              char(12),
--     IN prov_id              char(12),
--     OUT NewID CHAR(12)
-- )
-- BEGIN
--     DECLARE MaxID VARCHAR(10);
--     DECLARE Prefix CHAR(3);
--     SET Prefix = 'acc';

--     SELECT MAX(SUBSTRING(acco_id, 4, 9))
--     INTO MaxID
--     FROM Accommodation
--     WHERE acco_id LIKE CONCAT(Prefix, '_________');

--     IF MaxID IS NULL THEN
--         SET MaxID = 0;
--     END IF;

--     SET NewID = CONCAT(Prefix, LPAD(MaxID + 1, 9, '0'));

--     INSERT INTO Accommodation(acco_id, acco_type, acco_star, acco_tiny_img_url, acco_name, acco_logan, acco_detail, acco_exac_location, city_id, prov_id)
--     VALUES (NewID, acco_type, acco_star, acco_tiny_img_url, acco_name, acco_logan, acco_detail, acco_exac_location, city_id, prov_id);

-- END;

-- DELIMITER ;

-- -- TESTING

-- SELECT * FROM ACCOMMODATION;

-- CALL sp_insert_autoID_accommodation('1', 1, '1', '1', '1', NULL, '1', 'cty000000001', 'pro000000001', @NEWID);
-- SELECT @NEWID;

-- DELETE FROM accommodation WHERE acco_type LIKE '1%';







-- -- Booking

-- DROP PROCEDURE IF EXISTS sp_insert_autoID_booking;

-- DELIMITER //

-- CREATE PROCEDURE sp_insert_autoID_booking(
--     IN book_datetime       datetime,
--     IN book_start_datetime datetime,
--     IN book_end_datetime   datetime,
--     IN pay_id              char(12),
--     IN book_total_cost     float,
--     IN book_first_name     char(50),
--     IN book_last_name      char(50),
--     IN book_email          varchar(50),
--     IN au_user_id          char(12),
--     IN book_phone          char(10),
--     IN book_note           text,
--     IN cancel_cost         float,
--     IN book_status         varchar(50),
--     IN book_is_payed       int,
--     OUT NewID CHAR(12)
-- )
-- BEGIN
--     DECLARE MaxID VARCHAR(10);
--     DECLARE Prefix CHAR(3);
--     SET Prefix = 'boo';

--     SELECT MAX(SUBSTRING(book_id, 4, 9))
--     INTO MaxID
--     FROM booking
--     WHERE book_id LIKE CONCAT(Prefix, '_________');

--     IF MaxID IS NULL THEN
--         SET MaxID = 0;
--     END IF;

--     SET NewID = CONCAT(Prefix, LPAD(MaxID + 1, 9, '0'));

--     INSERT INTO booking (book_id, book_datetime, book_start_datetime, book_end_datetime, pay_id, book_total_cost, book_first_name, book_last_name, book_email, au_user_id, book_phone, book_note, cancel_cost, book_status, book_is_payed)
--     VALUES (NewID, book_datetime, book_start_datetime, book_end_datetime, pay_id, book_total_cost, book_first_name, book_last_name, book_email, au_user_id, book_phone, book_note, cancel_cost, book_status, book_is_payed);
-- END;

-- DELIMITER ;

-- -- TESTING

-- SELECT * FROM booking;

-- CALL sp_insert_autoID_booking('2021-11-01', '2021-11-01', '2021-11-01', 'pay000000001', 0, '1', '1', '1', 'usr000000001', '1', NULL, 0, '1', 0, @NEWID);
-- SELECT @NEWID;

-- DELETE FROM booking WHERE book_id = @NEWID;







-- -- RoomType
-- DROP PROCEDURE IF EXISTS sp_insert_autoID_roomtype;

-- DELIMITER //

-- CREATE PROCEDURE sp_insert_autoID_roomtype(
-- 	IN room_class               varchar(50),
--     IN room_type                varchar(10),
--     IN room_max_adult           int,
--     IN room_max_child           int,
--     IN room_single_bed          int,
--     IN room_double_bed          int,
--     IN room_total               int,
--     IN room_details_img_url     varchar(50),
--     IN room_area                float,
--     IN room_cost                float,
--     IN room_discount            float,
--     IN room_date_end_discount   date,
--     IN room_sum_rating          int,
--     IN acco_id                  char(12),
--     OUT NewID CHAR(12)
-- )
-- BEGIN
--     DECLARE MaxID VARCHAR(10);
--     DECLARE Prefix CHAR(3);
--     SET Prefix = 'roo';

--     SELECT MAX(SUBSTRING(room_id, 4, 9))
--     INTO MaxID
--     FROM RoomType
--     WHERE room_id LIKE CONCAT(Prefix, '_________');

--     IF MaxID IS NULL THEN
--         SET MaxID = 0;
--     END IF;

--     SET NewID = CONCAT(Prefix, LPAD(MaxID + 1, 9, '0'));

--     INSERT INTO RoomType(room_id, room_class, room_type, room_max_adult, room_max_child, room_single_bed, room_double_bed, room_total, room_details_img_url, room_area, room_cost, room_discount, room_date_end_discount, room_sum_rating, acco_id)
--     VALUES (NewID, room_class, room_type, room_max_adult, room_max_child, room_single_bed, room_double_bed, room_total, room_details_img_url, room_area, room_cost, room_discount, room_date_end_discount, room_sum_rating, acco_id);

-- END;

-- DELIMITER ;

-- -- TESTING

-- SELECT * FROM ROOMTYPE;

-- CALL sp_insert_autoID_roomtype('1', '1', 1, 1, 1, 1, 1, '1', 1, 1, 1, '2021-11-01', 1, 'acc000000001', @NEWID);
-- SELECT @NEWID;

-- DELETE FROM roomtype WHERE room_class LIKE '1%';







-- -- Notification

-- DROP PROCEDURE IF EXISTS sp_insert_autoID_notification;

-- DELIMITER //

-- CREATE PROCEDURE sp_insert_autoID_notification(
--     IN noti_type			nvarchar(50),
--     IN noti_title			nvarchar(50),
--     IN noti_subtitle		text,
--     IN noti_datetime		datetime,
--     IN noti_content		    text,
--     IN noti_dest_url		varchar(50),
--     OUT NewID CHAR(12)
-- )
-- BEGIN
--     DECLARE MaxID VARCHAR(10);
--     DECLARE Prefix CHAR(3);
--     SET Prefix = 'not';

--     SELECT MAX(SUBSTRING(debit_id, 4, 9))
--     INTO MaxID
--     FROM debitcard
--     WHERE debit_id LIKE CONCAT(Prefix, '_________');

--     IF MaxID IS NULL THEN
--         SET MaxID = 0;
--     END IF;

--     SET NewID = CONCAT(Prefix, LPAD(MaxID + 1, 9, '0'));

--     INSERT INTO notification (noti_id, noti_type, noti_title, noti_subtitle, noti_datetime, noti_content, noti_dest_url)
--     VALUES (NewID, noti_type, noti_title, noti_subtitle, noti_datetime, noti_content, noti_dest_url);
-- END;

-- DELIMITER ;