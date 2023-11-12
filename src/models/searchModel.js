const db = require('../config/db/connect');
const { query } = require('express');

const SearchModel = function () { }

SearchModel.filterSort = function (req, res, callback) {
    const { acco_type, rating_point, bed_type, acco_star, cost, accoStar, countRating } = req.query
    let sql = `SELECT * FROM accommodation, roomtype, rating WHERE accommodation.acco_id = roomtype.acco_id AND roomtype.room_id = rating.room_id`
    if (acco_type) {
        let acco_typeFilter = acco_type.join("','")
        sql += ` AND acco_type IN ('${acco_typeFilter}')`
    }

    if (rating_point == "9+")
        sql += ` AND rating_point BETWEEN 9 AND 10`
    if (rating_point == "8+")
        sql += ` AND rating_point BETWEEN 8 AND 9`
    if (rating_point == "7+")
        sql += ` AND rating_point BETWEEN 7 AND 8`
    if (rating_point == "6+")
        sql += ` AND rating_point BETWEEN 6 AND 7`

    if (bed_type == 'Giường đơn') {
        sql += ` AND room_single_bed > 0`
    }
    if (bed_type == 'Giường đôi') {
        sql += ` AND room_double_bed > 0`
    }

    // if (distance_center == "Dưới 1km")
    //     sql += ` AND distance_center BETWEEN 0 AND 1`
    // if (distance_center == "Dưới 3km")
    //     sql += ` AND distance_center BETWEEN 0 AND 3`
    // if (distance_center == "Dưới 5km")
    //     sql += ` AND distance_center BETWEEN 0 AND 5`

    // if (meal == "ext000000001") {
    //     sql += ` AND roomexte.exte_id == "ext000000001"`
    // }

    if (acco_star) {
        let acco_starFilter = acco_star.join("','")
        sql += ` AND acco_star IN ('${acco_starFilter}')`
    }

    // if (acco_fea) {
    //     let acco_feaFilter = acco_fea.join("','")
    //     sql += ` AND accofea.fea_id IN ('${acco_feaFilter}')`
    // }

    // if (acco_exte) {
    //     let acco_exteFilter = acco_exte.join("','")
    //     sql += ` AND roomexte.exte_id IN ('${acco_exteFilter}')`
    // }
    // if (room_exte) {
    //     let room_exteFilter = room_exte.join("','")
    //     sql += ` AND roomexte.exte_id IN ('${room_exteFilter}')`
    // }

    if (cost == 'Cao đến thấp')
        // result.sort((a, b) => a.room_cost - b.room_cost)
        sql += ` ORDER BY room_cost DESC`
    if (cost == 'Thấp đến cao')
        sql += ` ORDER BY room_cost ASC`
    if (accoStar == 'Cao đến thấp')
        sql += ` ORDER BY acco_star DESC`
    if (accoStar == 'Thấp đến cao')
        sql += ` ORDER BY acco_star ASC`
    if (countRating == 'Cao đến thấp')
        sql += ` ORDER BY room_sum_rating DESC`
    if (countRating == 'Thấp đến cao')
        sql += ` ORDER BY room_sum_rating ASC`

    db.query(sql, async (err, result) => {
        callback(err, res, result)
        // if (err) throw err
        // if (result.length > 0) {
        //     res.json({
        //         message: 'success',
        //         data: result
        //     })
        // } else {
        //     res.json({
        //         message: 'Not Found'
        //     })
        // }
    })

}
module.exports = SearchModel