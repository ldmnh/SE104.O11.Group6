USE DATABASE_SE104;

DROP VIEW IF EXISTS VIEW_AUTHUSER;

CREATE VIEW VIEW_AUTHUSER AS
SELECT
    au_user_first_name,
    au_user_last_name,
    au_user_email,
    au_user_avt_url,
    au_user_sex,
    au_user_birthday
FROM AUTHUSER;

DROP VIEW IF EXISTS VIEW_BANKCARD;

CREATE VIEW VIEW_BANKCARD AS
SELECT
    bank_name,
    bank_num,
    au_user_id,
    bank_id
FROM BANKCARD;

DROP VIEW IF EXISTS VIEW_DEBITCARD;

CREATE VIEW VIEW_DEBITCARD AS
SELECT
    debit_name,
    debit_num,
    au_user_id,
    debit_id
FROM DEBITCARD;

DROP VIEW IF EXISTS VIEW_RATING;

CREATE VIEW VIEW_RATING AS
SELECT
    room_id,
    rating_datetime,
    rating_context,
    rating_point,
    au_user_id
FROM RATING;

DROP VIEW IF EXISTS VIEW_NOTIFICATION;

CREATE VIEW
    VIEW_NOTIFICATION AS
SELECT
    noti_id,
    noti_type,
    noti_title,
    noti_subtitle,
    noti_datetime,
    noti_content,
    noti_dest_url
FROM NOTIFICATION;

DROP VIEW IF EXISTS VIEW_NAME_FEA;

CREATE VIEW VIEW_NAME_FEA AS
SELECT
    accommodation.acco_id,
    feature.fea_name
FROM accommodation
INNER JOIN accofea
    ON accommodation.acco_id = accofea.acco_id
INNER JOIN feature
    ON accofea.fea_id = feature.fea_id;

DROP VIEW IF EXISTS VIEW_ROOM_RATING;

CREATE VIEW VIEW_ROOM_RATING AS
SELECT
    rating.*,
    roomtype.acco_id,
    CONCAT(authuser.au_user_first_name, ' ', authuser.au_user_last_name) AS 'au_user_full_name'
FROM roomtype
INNER JOIN rating
    ON roomtype.room_id = rating.room_id
INNER JOIN authuser
    ON rating.au_user_id = authuser.au_user_id;


DROP VIEW IF EXISTS VIEW_ROOM_EXTE;

CREATE VIEW VIEW_ROOM_EXTE AS
SELECT
    roomtype.room_id,
    extension.exte_name
FROM roomtype
INNER JOIN roomexte
    ON roomtype.room_id = roomexte.room_id
INNER JOIN extension
    ON roomexte.exte_id = extension.exte_id;

DROP VIEW IF EXISTS VIEW_BOOKING_HISTORY;

CREATE VIEW VIEW_BOOKING_HISTORY AS
SELECT
    accommodation.acco_name,
    booking.book_id,
    booking.book_datetime,
    booking.book_start_datetime,
    booking.book_end_datetime,
    booking.book_cost_before,
    booking.book_cost_after,
    CONCAT(booking.book_first_name, ' ', booking.book_last_name) AS 'book_full_name',
    booking.book_status,
    booking.book_is_paid,
    booking.au_user_id
FROM accommodation
INNER JOIN booking
    ON accommodation.acco_id = booking.acco_id;

DROP VIEW IF EXISTS VIEW_BOOKING_DETAIL;

CREATE VIEW view_booking_detail AS
SELECT
    bookingdetail.*,
    roomtype.room_class,
    roomtype.room_type,
    roomtype.room_details_img_url 
FROM bookingdetail
INNER JOIN roomtype
    ON roomtype.room_id = bookingdetail.room_id;

CREATE VIEW view_rating_admin AS
SELECT
    rating.au_user_id,
    CONCAT(authuser.au_user_last_name, ' ', authuser.au_user_first_name) as 'au_user_full_name',
    rating.room_id,
    CONCAT(rating.rating_datetime) as 'rating_datetime',
    rating.rating_context,
    rating.rating_point, 
    roomtype.room_class,
    roomtype.room_type,
    accommodation.acco_id,
    accommodation.acco_name
FROM rating
INNER JOIN authuser
    ON rating.au_user_id = authuser.au_user_id
INNER JOIN roomtype
    ON rating.room_id = roomtype.room_id
INNER JOIN accommodation
    ON roomtype.acco_id = accommodation.acco_id;

CREATE VIEW view_booking_admin AS
SELECT
    booking.book_id,
    booking.au_user_id,
    CONCAT(authuser.au_user_last_name, ' ', authuser.au_user_first_name) as 'au_user_full_name',
    booking.acco_id,
    accommodation.acco_name,
    CONCAT(booking.book_datetime) as 'book_datetime',
    CONCAT(booking.book_start_datetime) as 'book_start_datetime',
    CONCAT(booking.book_end_datetime) as 'book_end_datetime',
    booking.book_num_adult,
    booking.book_num_child,
    booking.book_cost_before,
    booking.book_cost_after,
    CONCAT(booking.book_first_name, ' ', booking.book_last_name) as 'book_customer_name',
    booking.book_email,
    booking.book_phone,
    booking.pay_id,
    booking.book_note,
    booking.cancel_cost,
    booking.book_status,
    booking.book_is_paid,
    booking.rea_id 
FROM booking, authuser, accommodation
WHERE booking.au_user_id = authuser.au_user_id
AND booking.acco_id = accommodation.acco_id;