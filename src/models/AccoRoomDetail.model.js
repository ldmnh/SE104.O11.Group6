const db = require('../config/db/connect')
const index = require('./index.model')
const util = require('node:util')
const query = util.promisify(db.query).bind(db)

const accoRoomDetail = function () {}

accoRoomDetail.getAccoDetail = function (acco_id, callback) {
    const getAccoDetail = 'SELECT * FROM view_acco WHERE acco_id = ?'

    db.query(getAccoDetail, acco_id, (err, accoDetail) => {
        if (err) {
            throw err
        }     
        callback(err, accoDetail[0])
    })
}

accoRoomDetail.getAccoImg = function (acco_id, callback) {
    const getAccoImg = 'SELECT * FROM accoimg WHERE acco_id = ?'

    db.query(getAccoImg, acco_id, (err, accoImg) => {
        if (err) {
            throw err
        }
        callback(err, accoImg)
    })
}


accoRoomDetail.getAccoFea = function (acco_id, callback) {
    const getAccoFea = 'SELECT * FROM view_name_fea WHERE acco_id = ?'

    db.query(getAccoFea, acco_id, (err, accoFea) => {
        if (err) {
            throw err
        }
        accoFea.forEach(fea => {
            fea.fea_icon = index.feaIcon(fea.fea_id)
        })
        callback(err, accoFea)
    })
}

accoRoomDetail.getAccoRoom = function (acco_id, callback) {
    const getAccoRoom = 'SELECT DISTINCT(room_id), roomtype.* FROM roomtype WHERE acco_id = ?'

    db.query(getAccoRoom, acco_id, (err, accoRoom) => {
        if (err) {
            throw err
        }

        accoRoom.forEach(room => {
            room.room_cost_after = room.room_cost - (room.room_cost * room.room_discount)
            room.room_cost_after_currency = index.toCurrency(Number(room.room_cost_after))
            room.room_cost_currency = index.toCurrency(Number(room.room_cost))
        })

        accoRoom.forEach(room => {
                accoRoomDetail.getAccoRoomExte(room.room_id, function(err, accoRoomExte){
                    room.extension = accoRoomExte
                })
            })
        callback(err, accoRoom)
    })
}

accoRoomDetail.getAccoRoomDetails = function ({ room_id }, callback) {
    const getAccoRoom = 'SELECT roomtype.* FROM roomtype WHERE room_id = ?';

    db.query(getAccoRoom, room_id, async (err, accoRoom) => {
        if (err) {
            throw err;
        }

        // Calculate derived values for each room
        accoRoom.forEach(room => {
            room.room_cost_after = room.room_cost - (room.room_cost * room.room_discount);
            room.room_cost_after_currency = index.toCurrency(Number(room.room_cost_after));
            room.room_cost_currency = index.toCurrency(Number(room.room_cost));
        });

        // Fetch room extensions for each room
        const extePromises = accoRoom.map(room => {
            return new Promise((resolve, reject) => {
                accoRoomDetail.getAccoRoomExte(room.room_id, (err, accoRoomExte) => {
                    if (err) {
                        reject(err);
                    } else {
                        room.extension = accoRoomExte;
                        resolve();
                    }
                });
            });
        });

        // Wait for all extension promises to resolve
        await Promise.all(extePromises);

        // Fetch room images for each room
        const imgPromises = accoRoom.map(room => {
            return new Promise((resolve, reject) => {
                accoRoomDetail.getAccoRoomImg(room.room_id, (err, accoRoomImg) => {
                    if (err) {
                        reject(err);
                    } else {
                        room.room_img = accoRoomImg;
                        resolve();
                    }
                });
            });
        });

        // Wait for all image promises to resolve
        await Promise.all(imgPromises);

        // Invoke the final callback with the result
        callback(err, accoRoom);
    });
};

accoRoomDetail.getAccoRoomExte = function (room_id, callback) {
    const getAccoRoomExte = 'SELECT * FROM view_room_exte WHERE room_id = ?'

    db.query(getAccoRoomExte, room_id, (err, accoRoomExte) => {
        if (err) {
            throw err
        }
        accoRoomExte.forEach(roomExte => {
            roomExte.exte_icon = index.exteIcon(roomExte.exte_id)
        })
        callback(err, accoRoomExte)
    })
}

accoRoomDetail.getAccoRoomExteDistinct = function (acco_id, callback) {
    const getAccoRoomExteDistinct = 'SELECT DISTINCT(exte_name) FROM view_room_exte WHERE acco_id = ?'

    db.query(getAccoRoomExteDistinct, acco_id, (err, accoExte) => {
        if (err) {
            throw err
        }

        callback(err, accoExte)

    })
}

accoRoomDetail.getAccoRoomImg = function ( room_id, callback) {
    const getAccoRoomImg = 'SELECT * FROM roomtypeimg WHERE room_id = ?'

    db.query(getAccoRoomImg, room_id, (err, accoRoomImg) => {
        if (err) {
            throw err
        }
        callback(err, accoRoomImg)
    })
}

accoRoomDetail.findRating = async (req, callback) => {

    const params = Number(req.params.acco_id) ? req.params.acco_id : req.query.acco_id

    let getAccoRoomRating = 'SELECT * FROM view_room_rating WHERE acco_id = ? ORDER BY'

    if (req.query.rating_point && req.query.rating_datetime) {
        if (req.query.rating_point == 'ZA') {
            getAccoRoomRating += ' rating_point DESC'
        } else if (req.query.rating_point == 'AZ') {
            getAccoRoomRating += ' rating_point ASC'
        }
        if (req.query.rating_datetime == 'ZA') {
            getAccoRoomRating += 'AND rating_datetime DESC'
        } else if (req.query.rating_datetime == 'AZ') {
            getAccoRoomRating += 'AND rating_datetime ASC'
        }
    } else if (!req.query.rating_point && !req.query.rating_datetime) {
        getAccoRoomRating += ' rating_datetime DESC'
    } else if (req.query.rating_point == 'ZA') {
        getAccoRoomRating += ' rating_point DESC'
    } else if (req.query.rating_point == 'AZ') {
        getAccoRoomRating += ' rating_point ASC'
    } else if (req.query.rating_datetime == 'ZA') {
        getAccoRoomRating += ' rating_datetime DESC'
    } else if (req.query.rating_datetime == 'AZ') {
        getAccoRoomRating += ' rating_datetime ASC'
    }

    db.query(getAccoRoomRating, params, (err, accoRoomRating) => {
        if (err) {
            throw err
        }

        accoRoomRating.forEach(function (rating) {
            rating.rating_datetime_format = index.toDDMMYYYY(new Date(rating.rating_datetime))
        })

        callback(err, accoRoomRating)

    })
}

module.exports = accoRoomDetail