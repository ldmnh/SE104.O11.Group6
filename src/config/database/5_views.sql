-- Active: 1698914213463@@127.0.0.1@3306@database_se104
USE DATABASE_SE104;

DROP VIEW IF EXISTS VIEW_AUTHUSER;

CREATE VIEW VIEW_AUTHUSER AS
SELECT
    au_user_id,
    au_user_first_name,
    au_user_last_name,
    au_user_email,
    au_user_avt_url,
    au_user_sex,
    CONCAT(
        LPAD(YEAR(au_user_birthday), 4, '0'),
        '-',
        LPAD(MONTH(au_user_birthday), 2, '0'),
        -- RIGHT('0' + CAST(MONTH(au_user_birthday) AS VARCHAR(2)), 2),
        '-',
        LPAD(DAY(au_user_birthday), 2, '0')
        -- RIGHT('0' + CAST(DAY(au_user_birthday) AS VARCHAR(2)), 2)
    ) AS au_user_birthday
FROM AUTHUSER;

-- SELECT * FROM VIEW_AUTHUSER;

DROP VIEW IF EXISTS view_acco;

CREATE VIEW view_acco AS
SELECT accommodation.*, city.city_name, province.prov_name 
FROM accommodation
LEFT JOIN city
    ON accommodation.city_id = city.city_id
LEFT JOIN province
    ON province.prov_id = accommodation.prov_id;

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
    feature.fea_id,
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
    CONCAT(authuser.au_user_first_name, ' ', authuser.au_user_last_name) AS 'au_user_full_name',
    authuser.au_user_avt_url
FROM roomtype
INNER JOIN rating
    ON roomtype.room_id = rating.room_id
INNER JOIN authuser
    ON rating.au_user_id = authuser.au_user_id;


DROP VIEW IF EXISTS VIEW_ROOM_EXTE;

CREATE VIEW VIEW_ROOM_EXTE AS
SELECT
	roomtype.acco_id,
    roomtype.room_id,
   	extension.exte_id,
    extension.exte_name
FROM roomtype
INNER JOIN roomexte
    ON roomtype.room_id = roomexte.room_id
INNER JOIN extension
    ON roomexte.exte_id = extension.exte_id;

DROP VIEW IF EXISTS VIEW_BOOKING_HISTORY;

DROP VIEW IF EXISTS VIEW_BOOKING_HISTORY;

CREATE VIEW VIEW_BOOKING_HISTORY AS
SELECT
	view_acco.*,
    booking.book_id,
    booking.book_datetime,
    booking.book_start_datetime,
    booking.book_end_datetime,
    booking.book_cost_before,
    booking.book_cost_after,
    CONCAT(booking.book_last_name, ' ', booking.book_first_name) as 'book_customer_name',
    booking.book_status,
    booking.book_is_paid,
    booking.au_user_id
FROM view_acco
INNER JOIN booking
    ON view_acco.acco_id = booking.acco_id;


DROP VIEW IF EXISTS VIEW_BOOKING_DETAIL;

CREATE VIEW view_booking_detail AS
SELECT
	booking.au_user_id,
    bookingdetail.book_id,
    roomtype.*, 
    bookingdetail.book_num_room,
    bookingdetail.book_room_cost_before,
    bookingdetail.book_room_cost_after   
FROM bookingdetail, roomtype, booking
WHERE roomtype.room_id = bookingdetail.room_id
AND bookingdetail.book_id = booking.book_id;


DROP VIEW IF EXISTS view_rating_admin;

CREATE VIEW view_rating_admin AS
SELECT
    rating.au_user_id,
    CONCAT(authuser.au_user_last_name, ' ', authuser.au_user_first_name) as 'au_user_full_name',
    rating.room_id,
    rating.rating_datetime,
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


DROP VIEW IF EXISTS VIEW_BOOKING_DETAIL;

CREATE VIEW view_booking_detail AS
SELECT
	booking.au_user_id,
    bookingdetail.book_id,
    roomtype.*, 
    bookingdetail.book_num_room,
    bookingdetail.book_room_cost_before,
    bookingdetail.book_room_cost_after   
FROM bookingdetail, roomtype, booking
WHERE roomtype.room_id = bookingdetail.room_id
AND bookingdetail.book_id = booking.book_id;

DROP VIEW IF EXISTS view_chart_dashboard;

CREATE VIEW view_chart_dashboard AS
SELECT
    MONTH(book_datetime) AS 'month',
    COUNT(*) AS 'count_book',
    A.count_rating,
    A.avg_rating
FROM
    booking RIGHT JOIN
    (
    SELECT
        MONTH(rating_datetime) AS 'month_rating',
        COUNT(*) AS 'count_rating',
        AVG(rating_point) AS 'avg_rating'
    FROM
        rating
    
    GROUP BY
        MONTH(rating_datetime)
) A
ON
        A.month_rating = MONTH(book_datetime)
GROUP BY
    MONTH(book_datetime)
UNION ALL
SELECT
    MONTH(book_datetime) AS 'month',
    COUNT(*) AS 'count_book',
    A.count_rating,
    A.avg_rating
FROM
    booking LEFT JOIN
    (
    SELECT
        MONTH(rating_datetime) AS 'month_rating',
        COUNT(*) AS 'count_rating',
        AVG(rating_point) AS 'avg_rating'
    FROM
        rating
    
    GROUP BY
        MONTH(rating_datetime)
) A
ON
        A.month_rating = MONTH(book_datetime)
WHERE A.month_rating IS NULL
GROUP BY
    MONTH(book_datetime);

DROP VIEW IF EXISTS view_booking_admin;

CREATE VIEW view_booking_admin AS
SELECT
    booking.book_id,
    booking.au_user_id,
    CONCAT(authuser.au_user_last_name, ' ', authuser.au_user_first_name) as 'au_user_full_name',
    booking.acco_id,
    accommodation.acco_name,
    booking.book_datetime,
    booking.book_start_datetime,
    booking.book_end_datetime,
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
FROM booking
INNER JOIN authuser
    ON booking.au_user_id = authuser.au_user_id
INNER JOIN accommodation
    ON booking.acco_id = accommodation.acco_id;