const db = require('../config/db/connect');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const accoRoomDetail = require('../models/AccoRoomDetail.model')

class SearchController {

    // [GET] /search/results
    searchResult(req, res) {
        const title = 'ABc'
        // Nhung Testing 
        db.query('SELECT a.*, p.prov_name FROM accommodation a, province p WHERE a.prov_id = p.prov_id', (err, resultacco) => {
            console.log(resultacco);
                if (err) {
                    res.status(500).json({
                        message: 'Lỗi truy vấn',
                    });
                    throw err;
                }
                res.status(200).render('./pages/search/results', {
                    message: 'Lấy thông tin thành công',
                    title : title,
                    resultacco: resultacco,
                })
            })
        // Nhung End Testing 

        }

        // [GET] /search/:acco_id
        accoDetail(req, res) {
            accoRoomDetail.getDetail(req, res, function (err, accoDetail, accoFea, accoImg, accoRoom, accoRoomRating) {
                // res.status(200).render('./pages/search/detail', {
                //     message: 'Lấy thông tin thành công',
                //     accoDetail : accoDetail, 
                //     accoFea: accoFea, 
                //     accoImg: accoImg, 
                //     accoRoom: accoRoom, 
                //     accoRoomRating: accoRoomRating,
                // })

                res.send({
                    message: 'Lấy thông tin thành công',
                    accoDetail : accoDetail, 
                    accoFea: accoFea, 
                    accoImg: accoImg, 
                    accoRoom: accoRoom, 
                    accoRoomRating: accoRoomRating,
                })
            })
        }

        // [PORT] /search:acco_id
        submitBooking(req, res) {
            console.log(req.body)


        }

    }

    module.exports = new SearchController()