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