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

DROP VIEW IF EXISTS VIEW_NAME_FEA;

CREATE VIEW VIEW_NAME_FEA AS
SELECT
  accommodation.acco_id,
  feature.fea_name
FROM accommodation, feature, accofea
WHERE accommodation.acco_id = accofea.acco_id
  AND accofea.fea_id = feature.fea_id;


DROP VIEW IF EXISTS VIEW_ROOM_RATING;

CREATE VIEW VIEW_ROOM_RATING AS
SELECT
  rating.*,
  roomtype.acco_id,
  authuser.au_user_first_name + ' ' + authuser.au_user_last_name as 'au_user_full_name'
FROM roomtype, rating, authuser
WHERE roomtype.room_id = rating.room_id
  AND authuser.au_user_id = rating.au_user_id;


DROP VIEW IF EXISTS VIEW_ROOM_EXTE;

CREATE VIEW VIEW_ROOM_EXTE AS
SELECT
  roomtype.room_id,
  extension.exte_name
FROM roomtype, extension, roomexte
WHERE roomtype.room_id = roomexte.room_id
  AND roomexte.exte_id = extension.exte_id;


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
  booking.book_first_name + ' ' + booking.book_last_name as 'book_full_name',
  booking.book_status,
  booking.book_is_paid,
  booking.au_user_id
FROM accommodation, booking
WHERE accommodation.acco_id = booking.acco_id;