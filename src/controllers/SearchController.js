const db = require('../config/db/connect');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
class SearchController {

    // [GET] /search/results
    searchResult(req, res) {
        const title = 'ABc'
        res.render('./pages/search/results', {
            title
        })
    }

    // [GET] /search/:acco_id
    accoDetail(req, res) {
        // Test
        const acco_id = 'acc000000001';
        // Real
        // const {acco_id} = req.body;

        const sql = 'SELECT * FROM accommodation WHERE acco_id = ?';
        const sql2 = 'SELECT DISTINCT(room_id) FROM viewAccoDetail WHERE acco_id = ?';
        const sql3 = 'SELECT DISTINCT(fea_name) FROM viewAccoDetail WHERE acco_id = ?';
        const sql5 = 'SELECT * FROM viewRoomRating WHERE acco_id = ?';

        const params = [acco_id];

        db.query(sql, params, (err, result) => {
            if (err) {
                res.status(500).json({
                    message: 'Lỗi truy vấn 1',
                });
                throw err;
            }

            if (result[0]) {
                db.query('SELECT * FROM view_name_fea WHERE acco_id = ?', params, (err, result2) => {
                    if (err) {
                        res.status(500).json({
                            message: 'Lỗi truy vấn 2',
                        });
                        throw err;
                    }

                    if (result2[0]) {
                        db.query('SELECT * FROM roomtype WHERE acco_id = ?', params, (err, result3) => {
                            if (err) {
                                res.status(500).json({
                                    message: 'Lỗi truy vấn 3',
                                });
                                throw err;
                            }

                            result3.forEach(room => {
                                db.query('SELECT exte_id FROM roomexte WHERE room_id = ?', room.room_id, (err, result4) => {
                                    if (err) {
                                        res.status(500).json({
                                            message: 'Lỗi truy vấn 4',
                                        });
                                        throw err;
                                    }
                                    room.extension = result4;
                                })
                            });


                            if (result3[0]) {
                                db.query('SELECT * FROM viewRoomRating WHERE acco_id = ?', params, (err, result5) => {
                                    if (err) {
                                        res.status(500).json({
                                            message: 'Lỗi truy vấn 5',
                                        });
                                        throw err;
                                    }
                                    res.status(200).render('./pages/search/detail', {
                                        message: 'Lấy thông tin thành công',
                                        data_acco: result[0],
                                        data_fea: result2,
                                        data_rooms: result3,
                                        data_rating: result5,
                                    })
                                })

                            }
                        })
                    }
                })
            }
        })
    }

}

module.exports = new SearchController()