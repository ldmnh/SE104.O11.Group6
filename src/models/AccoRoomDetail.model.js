const db = require('../config/db/connect');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const accoRoomDetail = function () {};

accoRoomDetail.getDetail = function (req, res, callback) {
    const getAccoDetail = 'SELECT * FROM accommodation WHERE acco_id = ?';
    const getAccoImg = 'SELECT * FROM accommodation WHERE acco_id = ?';
    const getAccoFea = 'SELECT * FROM view_name_fea WHERE acco_id = ?';
    const getAccoRoom = 'SELECT DISTINCT(room_id), roomtype.* FROM roomtype WHERE acco_id = ?';
    const getAccoRoomExte = 'SELECT * FROM view_room_exte WHERE room_id = ?';
    const getAccoRoomImg = 'SELECT * FROM roomtypeimg WHERE room_id = ?';
    const getAccoRoomRating = 'SELECT * FROM view_room_rating WHERE acco_id = ?';

    const params = [req.params.acco_id];

    db.query(getAccoDetail, params, (err, accoDetail) => {
        if (err) {
            res.status(500).json({
                message: 'Lỗi truy vấn getAccoDetail',
            });
            throw err;
        }

        db.query(getAccoImg, params, (err, accoImg) => {
            if (err) {
                res.status(500).json({
                    message: 'Lỗi truy vấn getAccoImg',
                });
                throw err;
            }

            db.query(getAccoFea, params, (err, accoFea) => {
                if (err) {
                    res.status(500).json({
                        message: 'Lỗi truy vấn getAccoFea',
                    });
                    throw err;
                }


                db.query(getAccoRoom, params, (err, accoRoom) => {
                    if (err) {
                        res.status(500).json({
                            message: 'Lỗi truy vấn getAccoRoom',
                        });
                        throw err;
                    }

                    accoRoom.forEach(room => {
                        db.query(getAccoRoomExte, room.room_id, (err, accoRoomExte) => {
                            if (err) {
                                res.status(500).json({
                                    message: 'Lỗi truy vấn getAccoRoomExte',
                                });
                                throw err;
                            }
                            room.extension = accoRoomExte;
                        })
                    });

                    accoRoom.forEach(room => {
                        db.query(getAccoRoomImg, room.room_id, (err, accoRoomImg) => {
                            if (err) {
                                res.status(500).json({
                                    message: 'Lỗi truy vấn getAccoRoomImg',
                                });
                                throw err;
                            }
                            room.room_img = accoRoomImg;
                        })
                    });

                    db.query(getAccoRoomRating, params, (err, accoRoomRating) => {
                        if (err) {
                            res.status(500).json({
                                message: 'Lỗi truy vấn getAccoRoomRating',
                            });
                            throw err;
                        }

                        accoRoomRating.forEach(function (rating) {
                            rating.rating_datetime = rating.rating_datetime.toDateString()
                        })

                        callback(err, accoDetail, accoFea, accoImg, accoRoom, accoRoomRating)

                    })
                })
            })
        })
    })
}

module.exports = accoRoomDetail;