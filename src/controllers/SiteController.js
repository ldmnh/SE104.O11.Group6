const db = require('../config/db/connect');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class SiteController {

    // [GET] /
    index(req, res) {
        res.render('./pages/site/index')
    }

    // [GET] /register
    register(req, res) {
        const title = 'Đăng ký'
        res.render('./pages/site/register', {
            title
        })
    }

    // [POST] /register
    submitRegister(req, res) {
        const {
            au_user_last_name,
            au_user_first_name,
            au_user_email,
            au_user_pass: NewPassword
        } = req.body

        console.log(req.body)

        db.query('SELECT au_user_email FROM authuser WHERE au_user_email = ?', [au_user_email], async (err, result) => {
            if (err) throw err;
            if (result[0]) return res.json({
                status: "error",
                error: "Email đã được sử dụng"
            })
            else {
                const au_user_pass = bcrypt.hash(NewPassword, 8)
                db.query('INSERT INTO authuser SET ?', {
                    au_user_last_name: au_user_last_name,
                    au_user_first_name: au_user_first_name,
                    au_user_email: au_user_email,
                    au_user_pass: au_user_pass
                }, async (error, results) => {
                    if (error) throw error;
                    return res.json({
                        status: "success",
                        success: "Register successfully"
                    })
                    //res.redirect('/');
                })
            }
        })
    }


    // [GET] /login
    login(req, res) {
        const title = 'Đăng nhập'
        res.render('./pages/site/login', {
            title
        })
    }

    // [GET] /about
    about(req, res) {
        res.render('./pages/site/about-us')
    }

    // [GET] /forgot-password
    forgot(req, res) {
        const title = 'Nhận liên kết đặt lại mật khẩu'
        res.render('./pages/site/forgot-password', {
            title
        })
    }

    // [GET] /reset-password
    reset(req, res) {
        const title = 'Đặt lại mật khẩu'
        res.render('./pages/site/reset-password', {
            title
        })
    }

    // [GET] /search-results
    search(req, res) {
        const title = 'Kết quả tìm kiếm'
        res.render('./pages/site/search-results', {
            title
        })
    }

    // [GET] /accoDetail
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
                    message: 'Lỗi truy vấn',
                });
                throw err;
            }

            if (result[0]) {
                db.query('SELECT * FROM view_name_fea WHERE acco_id = ?', params, (err, result2) => {
                    if (err) {
                        res.status(500).json({
                            message: 'Lỗi truy vấn',
                        });
                        throw err;
                    }

                    if (result2[0]) {
                        db.query('SELECT * FROM roomtype WHERE acco_id = ?', params, (err, result3) => {
                            if (err) {
                                res.status(500).json({
                                    message: 'Lỗi truy vấn',
                                });
                                throw err;
                            }

                            result3.forEach(room => {
                                db.query('SELECT exte_id FROM roomexte WHERE room_id = ?', room.room_id, (err, result4) => {
                                room.extension = result4;
                                })
                            });


                            if (result3[0]) {
                                db.query('SELECT * FROM viewRoomRating WHERE acco_id = ?', params, (err, result5) => {
                                    if (err) {
                                        res.status(500).json({
                                            message: 'Lỗi truy vấn',
                                        });
                                        throw err;
                                    }
                                    res.status(200).render('./pages/site/acco-detail', {
                                        message: 'Lấy thông tin thành công',
                                        data_acco: result[0],
                                        data_fea: result2,
                                        data_rooms: result3,
                                        // data_roomexte: result4,
                                        data_rating: result5,
                                    })
                                    // res.send({
                                    //         message: 'Lấy thông tin thành công',
                                    //         data_acco: result[0],
                                    //         data_fea: result2,
                                    //         data_rooms: result3,
                                    //         // data_roomexte: result4,
                                    //         data_rating: result5,
                                    //     })

                                })

                            }
                        })
                    }
                })
            }





        })

    }



}

module.exports = new SiteController()