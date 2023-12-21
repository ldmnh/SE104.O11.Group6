const db = require('../config/db/connect');

const AccountModel = function () { }

AccountModel.addBank = ({
    bank_name,
    bank_num,
    bank_branch,
    bank_name_pers,
    id
}, callback) => {
    const sql = `
        INSERT INTO bankcard
        (bank_name,
         bank_branch,
         bank_num,
         bank_name_pers,
         au_user_id)
        VALUES (?, ?, ?, ?, ${id})`;
    const params = [
        bank_name,
        bank_branch,
        bank_num,
        bank_name_pers
    ];

    db.query(sql, params, (err, result) => {
        callback(err, result);
    })
}

AccountModel.addDebit = ({
    debit_num,
    debit_end_date,
    debit_CCV,
    debit_name,
    debit_address,
    debit_postal,
    id
}, callback) => {
    const sql = `
        INSERT INTO debitcard
        (debit_num,
        debit_end_date,
        debit_CCV,
        debit_name,
        debit_address,
        debit_postal,
        au_user_id)
        VALUES (?, ?, ?, ?, ?, ?, ${id})`;
    const params = [
        debit_num,
        debit_end_date,
        debit_CCV,
        debit_name,
        debit_address,
        debit_postal,
    ];

    db.query(sql, params, (err, result) => {
        callback(err, result);
    })
}

// [POST] /account/delBank
AccountModel.delBank = ({ id, bank_id }, callback) => {
    const sql = `
            UPDATE bankcard
            SET au_user_id = NULL
            WHERE bank_id=${bank_id}
            and au_user_id=${id}
        `
    db.query(sql, (err, result) => {
        callback(err, result);
    })
}

AccountModel.delDebit = ({ id, debit_id }, callback) => {
    const sql = `
            UPDATE debitcard
            SET au_user_id = NULL
            WHERE debit_id=${debit_id}
            and au_user_id=${id}
        `
    db.query(sql, (err, result) => {
        callback(err, result);
    })
}

AccountModel.addRating = ({
    room_id,
    rating_datetime,
    rating_point,
    rating_context,
    id
}, callback) => {
    const sql = `
        INSERT INTO rating
        (room_id,
        rating_datetime,
        rating_point,
        rating_context,
        au_user_id)
        VALUES (?, ?, ?, ?,${id})`;
    const params = [
        room_id,
        rating_datetime,
        rating_point,
        rating_context
    ];

    db.query(sql, params, (err, result) => {
        callback(err, result);
    })
}


module.exports = AccountModel