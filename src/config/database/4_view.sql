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

