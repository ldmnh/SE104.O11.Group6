const db = require('../config/db/connect');

const AccountModel = function () { }

AccountModel.addBank = function (req, res, callback) {

    if (!req.session.email) {
        res.status(404).json({ message: 'Không tìm thấy email!!!' });
        return;
    }

    const {
        bank_name,
        bank_branch,
        bank_num,
        bank_name_pers
    } = req.body
    // const sql = `CALL sp_insert_autoID_bankcard(
    //     '${bank_name}',
    //     '${bank_branch}',
    //     '${bank_num}',
    //     '${bank_name_pers}',
    //     '${req.session.email}'
    // )`;

    const sql = `
        INSERT INTO bankcard
        (bank_name,
         bank_branch,
         bank_num,
         bank_name_pers,
         au_user_id)
        VALUES (?, ?, ?, ?,
                (SELECT au_user_id
                 FROM AUTHUSER
                 WHERE au_user_email = ?)
                )`;
    const params = [
        bank_name,
        bank_branch,
        bank_num,
        bank_name_pers,
        req.session.email
    ];

    db.query(sql, params, (err, data_bank) => {
        callback(err, res, data_bank)
    })

}


AccountModel.addDebit = function (req, res, callback) {

    if (!req.session.email) {
        res.status(404).json({ message: 'Không tìm thấy email!!!' });
        return;
    }
    const {
        debit_num,
        debit_end_date,
        debit_CCV,
        debit_name,
        debit_address,
        debit_postal,
    } = req.body

    const sql = `
    INSERT INTO debitcard
        (debit_num,
        debit_end_date,
        debit_CCV,
        debit_name,
        debit_address,
        debit_postal,
        au_user_id)
        VALUES (?, ?, ?, ?, ?, ?,
    (SELECT au_user_id
     FROM AUTHUSER
     WHERE au_user_email = ?)
    );`;

    const params = [
        debit_num,
        debit_end_date,
        debit_CCV,
        debit_name,
        debit_address,
        debit_postal,
        req.session.email
    ];

    db.query(sql, params, (err, data_debit) => {
        callback(err, res, data_debit)
    })

}

AccountModel.paymentAccount = function (req, res, callback) {
    if (!req.session.email) {
        res.status(404).json({ message: 'Không tìm thấy email!!!' });
        return;
    }

    const sql = `
        SELECT BANK_ID AS 'BANK_ID', BANK_NAME as 'NAME', BANK_NUM AS 'NUM', 'BANK' as 'TYPE'
        FROM view_BANKCARD AS A
        INNER JOIN AUTHUSER AS B
            ON A.au_user_id = B.au_user_id
        WHERE B.au_user_email = ?
        
        UNION
        
        SELECT DEBIT_ID AS 'DEBIT_ID', 'SACOMBANK' AS 'NAME', DEBIT_NUM AS 'NUM', 'DEBIT' as 'TYPE'
        FROM view_DEBITCARD AS A
        INNER JOIN AUTHUSER AS B
            ON A.au_user_id = B.au_user_id
        WHERE B.au_user_email = ?`;
    const params = [req.session.email, req.session.email];

    db.query(sql, params, (err, result, fields) => {
        callback(err, res, result)
    });
}

module.exports = AccountModel