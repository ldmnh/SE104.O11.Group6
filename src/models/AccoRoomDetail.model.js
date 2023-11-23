const db = require('../config/db/connect')
const index = require('../models/index.model')

const accoRoomDetail = function () { }

accoRoomDetail.getDetail = function (req, res, callback) {
    const getAccoDetail = 'SELECT * FROM view_acco WHERE acco_id = ?'
    const getAccoImg = 'SELECT * FROM accoimg WHERE acco_id = ?'
    const getAccoFea = 'SELECT * FROM view_name_fea WHERE acco_id = ?'
    const getAccoRoom = 'SELECT DISTINCT(room_id), roomtype.* FROM roomtype WHERE acco_id = ?'
    const getAccoRoomExte = 'SELECT * FROM view_room_exte WHERE room_id = ?'
    const getAccoRoomExteDistinct = 'SELECT DISTINCT(exte_name) FROM view_room_exte WHERE acco_id = ?'
    const getAccoRoomImg = 'SELECT * FROM roomtypeimg WHERE room_id = ?'
    const getAccoRoomRating = 'SELECT * FROM view_room_rating WHERE acco_id = ? ORDER BY rating_datetime DESC'

    const params = [req.params.acco_id]

    db.query(getAccoDetail, params, (err, accoDetail) => {
        if (err) {
           console.log({
                message: 'Lỗi truy vấn getAccoDetail',
            })
            throw err
        }

        db.query(getAccoImg, params, (err, accoImg) => {
            if (err) {
               console.log({
                    message: 'Lỗi truy vấn getAccoImg',
                })
                throw err
            }

            db.query(getAccoFea, params, (err, accoFea) => {
                if (err) {
                   console.log({
                        message: 'Lỗi truy vấn getAccoFea',
                    })
                    throw err
                }
                accoFea.forEach(fea => {
                    fea.fea_icon = index.feaIcon(fea.fea_id)
                })

                db.query(getAccoRoom, params, (err, accoRoom) => {
                    if (err) {
                       console.log({
                            message: 'Lỗi truy vấn getAccoRoom',
                        })
                        throw err
                    }

                    accoRoom.forEach(room =>{
                        room.room_cost_after =  room.room_cost - (room.room_cost * room.room_discount)
                        room.room_cost_after_currency = index.toCurrency(Number(room.room_cost_after))
                        room.room_cost_currency = index.toCurrency(Number(room.room_cost))
                    })

                    accoRoom.forEach(room => {
                        db.query(getAccoRoomExte, room.room_id, (err, accoRoomExte) => {
                            if (err) {
                               console.log({
                                    message: 'Lỗi truy vấn getAccoRoomExte',
                                })
                                throw err
                            }
                            accoRoomExte.forEach(roomExte => {
                                roomExte.exte_icon = index.exteIcon(roomExte.exte_id)
                            })
                            room.extension = accoRoomExte
                        })
                    })

                    accoRoom.forEach(room => {
                        db.query(getAccoRoomImg, room.room_id, (err, accoRoomImg) => {
                            if (err) {
                               console.log({
                                    message: 'Lỗi truy vấn getAccoRoomImg',
                                })
                                throw err
                            }
                            room.room_img = accoRoomImg
                        })
                    })

                    db.query(getAccoRoomExteDistinct, params, (err, accoExte) => {
                        if (err) {
                           console.log({
                                message: 'Lỗi truy vấn getAccoRoomExteDistinct',
                            })
                            throw err
                        }
                    
                    db.query(getAccoRoomRating, params, (err, accoRoomRating) => {
                        if (err) {
                           console.log({
                                message: 'Lỗi truy vấn getAccoRoomRating',
                            })
                            throw err
                        }

                        accoRoomRating.forEach(function (rating) {
                            rating.rating_datetime_format = index.toDDMMYYYY(new Date(rating.rating_datetime))
                        })

                        callback(err, accoDetail[0], accoFea, accoImg, accoRoom, accoExte, accoRoomRating)

                        })
                    })
                })
            })
        })
    })
}

module.exports = accoRoomDetail