const db = require('../config/db/connect');

const NotificationModel = function () { }


// [GET] /notification/account-update
// [GET] /notification/promotion
NotificationModel.getNoti = ({ id, noti_type }, callback) => {
    const sql = `
        SELECT
            A.noti_id,
            noti_type,
            noti_title,
            noti_subtitle,
            CONCAT(
                RIGHT('00' + CAST(EXTRACT(HOUR FROM noti_datetime) AS VARCHAR(2)), 2),
                ':',
                RIGHT('00' + CAST(EXTRACT(MINUTE FROM noti_datetime) AS VARCHAR(2)), 2)
            ) AS noti_time,
            CONCAT(
                RIGHT('0' + CAST(DAY(noti_datetime) AS VARCHAR(2)), 2),
                '/',
                RIGHT('0' + CAST(MONTH(noti_datetime) AS VARCHAR(2)), 2),
                '/',
                CAST(YEAR(noti_datetime) AS VARCHAR(4))
            ) AS noti_date,
            noti_content,
            noti_dest_url,
            B.usernoti_is_read
        FROM NOTIFICATION A
        INNER JOIN USERNOTI AS B
            ON A.noti_id = B.noti_id
        WHERE A.noti_type = ?
            AND B.au_user_id = ${id}
    `;

    const params = [noti_type];

    db.query(sql, params, (err, result) => {
        callback(err, result);
    })
}

// [POST] /notification/account-update
// [POST] /notification/promotion
NotificationModel.notiRead = ({ id, noti_id }, callback) => {
    const sql = `
        UPDATE usernoti
        SET usernoti_is_read = 1
        WHERE au_user_id = ${id}
            AND noti_id = ${noti_id}
    `

    db.query(sql, (err, result) => {
        callback(err, result);
    })
}

// [GET] /notification/read-all
NotificationModel.readAllNotification = ({ id, noti_type }, callback) => {
    const sql = `
    UPDATE usernoti
    SET usernoti_is_read = 1
    WHERE usernoti.au_user_id = ${id}
      AND usernoti.noti_id in (SELECT noti_id FROM notification WHERE noti_type = 'Type ${noti_type}');
    `

    db.query(sql, (err, result) => {
        callback(err, result);
    })
}




module.exports = NotificationModel