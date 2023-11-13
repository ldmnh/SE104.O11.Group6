const db = require('../config/db');

class DetailController {

    // [GET] /
    showReview(req, res) {
        const sql = `
            SELECT
                B.AU_USER_FIRST_NAME AS 'AU_USER_FIRST_NAME',
                B.AU_USER_LAST_NAME AS 'AU_USER_LAST_NAME',
                A.RATING_DATETIME AS 'RATING_DATETIME',
                A.RATING_CONTEXT AS 'RATING_CONTEXT',
                A.RATING_POINT AS 'RATING_POINT'
            FROM view_RATING AS A
            INNER JOIN AUTHUSER AS B ON A.au_user_id = B.au_user_id
            INNER JOIN ROOMTYPE AS C ON A.room_id = C.room_id
            INNER JOIN ACCOMMODATION AS D ON D.acco_id = C.acco_id
            WHERE B.au_user_email = ?`;
        const params = [req.session.user?.email];                     // Nên đổi thành id

        db.query(sql, params, (err, result, fields) => {
            if (err) {
                res.status(500).json({ message: 'Lỗi truy vấn!!!', });
                throw err;
            }
            // res.status(200).json(result);
            if (result.length > 0) {
                res.status(200).render('./pages/detail/acco-detail', {
                    message: 'Lấy thông tin đánh giá thành công',
                    data: result
                });
                console.log(result);   // Nên xóa 
            } else {
                res.status(404).json({ message: 'Không tìm thấy tài khoản!!!', });
            }
        });
    }

}

module.exports = new DetailController()