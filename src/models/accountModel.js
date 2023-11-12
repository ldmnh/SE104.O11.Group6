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

AccountModel.cardAccount = ({ id }, callback) => {
    const sql = `
        SELECT BANK_ID AS 'BANK_ID', BANK_NAME as 'NAME', BANK_NUM AS 'NUM', 'BANK' as 'TYPE'
        FROM view_BANKCARD
        WHERE au_user_id = ${id}
        
        UNION
        
        SELECT DEBIT_ID AS 'DEBIT_ID', 'SACOMBANK' AS 'NAME', DEBIT_NUM AS 'NUM', 'DEBIT' as 'TYPE'
        FROM view_DEBITCARD
        WHERE au_user_id = ${id}
        `;
    db.query(sql, (err, result) => {
        callback(err, result);
    })
}


// [PUT] /account/delBank
AccountModel.delBank = ({ id, bank_id }, callback) => {
    const sql = `
            UPDATE bankcard
            SET au_user_id = NULL
            WHERE bank_id=?
            and au_user_id=${id}
        `
    const params = [bank_id];
    db.query(sql, params, (err, result) => {
        callback(err, result);
    })
}

AccountModel.delDebit = ({ id, debit_id }, callback) => {
    const sql = `
            UPDATE debitcard
            SET au_user_id = NULL
            WHERE debit_id=?
            and au_user_id=${id}
        `
    const params = [debit_id];
    db.query(sql, params, (err, result) => {
        callback(err, result);
    })
}

AccountModel.addReview = ({
    room_id,
    rating_point,
    rating_context,
    id
}, callback) => {
    const sql = `
        INSERT INTO rating
        (room_id,
        rating_point,
        rating_context,
        au_user_id)
        VALUES (?, ?, ?, ${id})`;
    const params = [
        room_id,
        rating_point,
        rating_context,
    ];

    db.query(sql, params, (err, result) => {
        callback(err, result);
    })
}

module.exports = AccountModel