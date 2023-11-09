CREATE VIEW view_name_fea AS
SELECT accommodation.acco_id, feature.fea_name
FROM accommodation, feature, accofea
WHERE accommodation.acco_id = accofea.acco_id
AND accofea.fea_id = feature.fea_id

CREATE VIEW `viewrating` AS 
SELECT
    `rating`.`au_user_id` AS `au_user_id`,
    `rating`.`room_id` AS `room_id`,
    roomtype.acco_id,
    `rating`.`rating_datetime` AS `rating_datetime`,
    `rating`.`rating_context` AS `rating_context`,
    `rating`.`rating_point` AS `rating_point`,
    `authuser`.`au_user_first_name` + `authuser`.`au_user_last_name` AS `au_user_full_name`,
    `authuser`.`au_user_avt_url` AS `au_user_avt_url`
FROM
    (
        (`authuser`
    JOIN `roomtype`)
    JOIN `rating`
    ) WHERE
    `authuser`.`au_user_id` = `rating`.`au_user_id` AND `rating`.`room_id` = `roomtype`.`room_id`;
