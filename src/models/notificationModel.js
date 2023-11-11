const db = require('../config/db/connect');

const NotificationModel = function () { }

// [GET] /notification/account-update
NotificationModel.getNotiAccount = function (req, res, callback) {

    if (!req.session.email) {
        res.status(404).json({ message: 'Không tìm thấy email!!!' });
        return;
    }

    const sql = `
    SELECT A.noti_id,
    noti_type,
    noti_title,
    noti_subtitle,
    CAST(noti_datetime AS time) as noti_time,
    CONCAT(
    RIGHT('0' + CAST(DAY(noti_datetime) AS VARCHAR(2)), 2), '/',
    RIGHT('0' + CAST(MONTH(noti_datetime) AS VARCHAR(2)), 2), '/',
    CAST(YEAR(noti_datetime) AS VARCHAR(4))) AS noti_date,
    noti_content,
    noti_dest_url,
    B.usernoti_is_read
    FROM VIEW_NOTIFICATION A 
    INNER JOIN USERNOTI AS B ON A.noti_id = B.noti_id
    INNER JOIN AUTHUSER AS C ON C.au_user_id = B.au_user_id
    WHERE A.noti_type='Type 1'
    AND C.au_user_email = ? 
    `
    const params = [req.session.email];

    db.query(sql, params, (err, result) => {
        callback(err, res, result)
    });
}

// [POST] /notification/account-update
NotificationModel.notiAccountRead = function (req, res, callback) {
    if (!req.session.email) {
        res.status(404).json({ message: 'Không tìm thấy email!!!' });
        return;
    }

    const sql = `
        UPDATE usernoti AS A
        INNER JOIN USERNOTI AS B ON A.noti_id = B.noti_id
        INNER JOIN AUTHUSER AS C ON C.au_user_id = B.au_user_id
        INNER JOIN notification AS D ON D.noti_id = A.noti_id
        SET A.usernoti_is_read = 1
        WHERE D.noti_type = 'Type 1'
        AND C.au_user_email =?;
    `

    const params = [req.session.email];

    db.query(sql, params, (err, data_notiacc_isread) => {
        callback(err, res, data_notiacc_isread)
    })
}


// [GET] /notification/promotion
NotificationModel.getNotiPromotion = function (req, res, callback) {

    if (!req.session.email) {
        res.status(404).json({ message: 'Không tìm thấy email!!!' });
        return;
    }

    const sql = `
    SELECT A.noti_id,
    noti_type,
    noti_title,
    noti_subtitle,
    CAST(noti_datetime AS time) as noti_time,
    CONCAT(
    RIGHT('0' + CAST(DAY(noti_datetime) AS VARCHAR(2)), 2), '/',
    RIGHT('0' + CAST(MONTH(noti_datetime) AS VARCHAR(2)), 2), '/',
    CAST(YEAR(noti_datetime) AS VARCHAR(4))) AS noti_date,
    noti_content,
    noti_dest_url,
    B.usernoti_is_read
    FROM VIEW_NOTIFICATION A 
    INNER JOIN USERNOTI AS B ON A.noti_id = B.noti_id
    INNER JOIN AUTHUSER AS C ON C.au_user_id = B.au_user_id
    WHERE A.noti_type='Type 2'
    AND C.au_user_email = ?
    `
    const params = [req.session.email];

    db.query(sql, params, (err, result) => {
        callback(err, res, result)
    });
}


// [POST] /notification/promotion
NotificationModel.notiPromotionRead = function (req, res, callback) {
    if (!req.session.email) {
        res.status(404).json({ message: 'Không tìm thấy email!!!' });
        return;
    }

    const sql = `   
        UPDATE usernoti AS A
        INNER JOIN USERNOTI AS B ON A.noti_id = B.noti_id
        INNER JOIN AUTHUSER AS C ON C.au_user_id = B.au_user_id
        INNER JOIN notification AS D ON D.noti_id = A.noti_id
        SET A.usernoti_is_read = 1
        WHERE D.noti_type = 'Type 2'
        AND C.au_user_email =?;
    `

    const params = [req.session.email];

    db.query(sql, params, (err, data_notiacc_isread) => {
        callback(err, res, data_notiacc_isread)
    })
}


// [GET] /notification/read-all
NotificationModel.readAllNotification = function (req, res, callback) {

    req.session.user = {
        'id': 'usr000000001'
    }

    const sql = `
        UPDATE usernoti
        SET usernoti_is_read = 1
        AND au_user_id = ?;
    `
    const params = [req.session.user?.id];

    db.query(sql, params, (err, data_read_all) => {
        callback(err, res, data_read_all)
    })
}


module.exports = NotificationModel