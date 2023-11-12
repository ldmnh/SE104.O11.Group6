const db = require('../config/db/connect')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const accoRoomDetail = require('../models/AccoRoomDetail.model')

class SearchController {

    // [GET] /search/results
    searchResult(req, res) {
        const { location, checkIn, checkOut, adult, child, room } = req.query

        const sql = `
            SELECT X.room_id
            FROM 
            (
                SELECT room_id
                FROM roomtype AS E
                INNER JOIN    
                    (
                    SELECT acco_id
                    FROM accommodation AS A
                    INNER JOIN 
                        (
                        SELECT prov_id
                        FROM province
                        WHERE prov_name LIKE ?
                        ) AS B
                    ON A.prov_id = B.prov_id

                    UNION

                    SELECT acco_id
                    FROM accommodation AS C
                    INNER JOIN 
                        (
                        SELECT city_id
                        FROM city
                        WHERE city_name LIKE ?
                        ) AS D
                    ON C.city_id = D.city_id
                    ) AS F
                ON E.acco_id = F.acco_id
                WHERE E.room_max_adult >= ? AND E.room_max_child >= ?
                ) AS X
                INNER JOIN
                (
                SELECT FF.room_id, room_available
                FROM 
                (
                    (
                    SELECT AA.room_id
                    FROM roomtype AS AA
                    WHERE AA.room_id NOT IN 
                    (
                        SELECT BB.room_id
                        FROM 
                        (
                            SELECT DD.*
                            FROM booking AS CC
                            INNER JOIN
                                bookingdetail AS DD
                            ON CC.book_id = DD.book_id
                            WHERE (? >= CC.book_start_datetime AND ? <= CC.book_end_datetime)
                                OR  (? >= CC.book_start_datetime AND ? <= CC.book_end_datetime)
                                OR  (? < CC.book_start_datetime AND ? > CC.book_end_datetime)
                        ) AS BB
                    )
                    ) AS EE
                    INNER JOIN 
                    (
                    SELECT RT.room_id,
                        (RT.room_total - COALESCE(SUM(BD.book_num_room), 0)) AS room_available
                    FROM RoomType AS RT
                    LEFT JOIN BookingDetail AS BD ON RT.room_id = BD.room_id
                    GROUP BY RT.room_id, RT.room_total
                    HAVING room_available >= ?
                    ) AS FF
                    ON EE.room_id = FF.room_id
                )
            ) AS Y
            ON X.room_id = Y.room_id`
        const searchQuery = `%${location}%`
        const params = [
            searchQuery,
            searchQuery,
            adult,
            child,
            checkIn,
            checkIn,
            checkOut,
            checkOut,
            checkIn,
            checkOut,
            room,
        ]

        db.query(sql, params, (err, result) => {
            if (err) {
                res.status(500).json({ message: 'Lỗi truy cập cơ sở dữ liệu' })
                throw err
            }

            if (result.length > 0) {
                res.status(200).json({ message: 'Đã tìm thành công', data: result })
            } else {
                res.status(404).json({ message: 'Không tìm thấy kết quả' })
            }
        })

    }

    // [GET] /search/:acco_id
    accoDetail(req, res) {
        accoRoomDetail.getDetail(req, res, function (err, accoDetail, accoFea, accoImg, accoRoom, accoRoomRating) {
            res.status(200).render('./pages/search/detail', {
                message: 'Lấy thông tin thành công',
                accoDetail: accoDetail,
                accoFea: accoFea,
                accoImg: accoImg,
                accoRoom: accoRoom,
                accoRoomRating: accoRoomRating,
            })

            // res.send({
            //     message: 'Lấy thông tin thành công',
            //     accoDetail : accoDetail, 
            //     accoFea: accoFea, 
            //     accoImg: accoImg, 
            //     accoRoom: accoRoom, 
            //     accoRoomRating: accoRoomRating,
            // })
        })
    }

    // [PORT] /search:acco_id
    submitBooking(req, res) {
        console.log(req.body)
    }

}

module.exports = new SearchController()