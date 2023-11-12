USE DATABASE_SE104;

CREATE VIEW VIEW_AUTHUSER AS
SELECT
  au_user_first_name,
  au_user_last_name,
  au_user_email,
  au_user_avt_url,
  au_user_sex,
  au_user_birthday
FROM AUTHUSER;

CREATE VIEW view_name_fea AS
SELECT accommodation.acco_id, feature.fea_name
FROM accommodation, feature, accofea
WHERE accommodation.acco_id = accofea.acco_id
AND accofea.fea_id = feature.fea_id

CREATE VIEW view_room_rating AS
SELECT rating.*, roomtype.acco_id, authuser.au_user_first_name + ' ' + authuser.au_user_last_name as 'au_user_full_name'
FROM roomtype, rating, authuser
WHERE roomtype.room_id = rating.room_id
AND authuser.au_user_id = rating.au_user_id

CREATE VIEW view_room_exte AS
SELECT roomtype.room_id, extension.exte_name
FROM roomtype, extension, roomexte
WHERE roomtype.room_id = roomexte.room_id
AND roomexte.exte_id = extension.exte_id

CREATE VIEW view_booking_history AS
SELECT accommodation.acco_name, booking.book_id, booking.book_datetime, booking.book_start_datetime, booking.book_end_datetime,
booking.book_total_cost, booking.book_first_name + booking.book_last_name as 'book_full_name',
booking.book_cost_before, booking.book_status, booking.book_is_payed
FROM accommodation, booking
WHERE accommodation.acco_id = booking.acco_id

CREATE VIEW view_booking_history AS
SELECT accommodation.acco_name, booking.book_id, booking.book_datetime, booking.book_start_datetime, booking.book_end_datetime,
booking.book_total_cost, booking.book_first_name + booking.book_last_name as 'book_full_name',
booking.book_cost_before, booking.book_status, booking.book_is_payed, booking.au_user_id
FROM accommodation, booking
WHERE accommodation.acco_id = booking.acco_id