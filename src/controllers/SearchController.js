const db = require("../config/db/connect");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const accoRoomDetail = require("../models/AccoRoomDetail.model");
const Search = require("../models/search.model");
class SearchController {
    // [GET] /search/results
    searchResult(req, res) {
        Search.find(req, res, function (err, res, result) {
            if (err) {
                res.status(500).json({ message: "Lỗi truy cập cơ sở dữ liệu" });
                throw err;
            }
            if (result.length > 0) {
                let resultFilter = result.map((obj) => obj.room_id).join(",");
                let sql1 = `SELECT DISTINCT A.acco_id, R.room_id, A.acco_star, R.room_date_end_discount, A.acco_name, R.room_avg_rating, R.room_count_rating, A.acco_location_link, R.room_class, R.room_max_adult, R.room_type, R.room_cost, R.room_discount, A.acco_tiny_img_url, R.room_single_bed, R.room_double_bed FROM accommodation as A, roomtype as R, accofea as AF WHERE A.acco_id = R.acco_id AND AF.acco_id = A.acco_id AND R.room_id IN (${resultFilter})`;
                
                db.query(sql1, (err, result1) => {
                    if (err) {
                        res.status(500).json({
                            message: "Lỗi truy cập cơ sở dữ liệu",
                        });
                        throw err;
                    }
                    if (result1.length > 0) {
                        res.status(200).render('./pages/search/results', {
                            message: "Đã tìm thành công",
                            data: result1,
                        });
                        
                    } else {
                        res.status(404).json({
                            message: "Không tìm thấy kết quả",
                        });
                    }
                });
            } else {
                res.status(404).json({ message: "Không tìm thấy kết quả" });
            }
        });
    }

    filterSortResult(req, res) {
        const {
            acco_type,
            rating_point,
            bed_type,
            acco_star,
            acco_fea,
            price,
            cost,
            accoStar,
            countRating,
        } = req.query;
        Search.find(req, res, function (err, res, result) {
            if (err) {
                res.status(500).json({
                    message: "Lỗi truy cập cơ sở dữ liệu",
                });
                throw err;
            }
            if (result.length > 0) {
                let resultFilter = result.map((obj) => obj.room_id).join(",");
                let sql1 = `SELECT DISTINCT A.acco_id, R.room_id, A.acco_star, R.room_date_end_discount, A.acco_name, R.room_avg_rating, R.room_count_rating, A.acco_location_link, R.room_class, R.room_max_adult, R.room_type, R.room_cost, R.room_discount, A.acco_tiny_img_url, R.room_single_bed, R.room_double_bed FROM accommodation as A, roomtype as R, accofea as AF WHERE A.acco_id = R.acco_id AND AF.acco_id = A.acco_id AND R.room_id IN (${resultFilter})`;

                if (price == "Dưới VND 200.000")
                    sql1 += ` AND room_cost BETWEEN 0 AND 200000`;
                if (price == "VND 200.000 - VND 500.000")
                    sql1 += ` AND room_cost BETWEEN 200000 AND 500000`;
                if (price == "VND 500.000 - VND 1.000.000")
                    sql1 += ` AND room_cost BETWEEN 500000 AND 1000000`;
                if (price == "Trên VND 1.000.000")
                    sql1 += ` AND room_cost > 1000000`;

                if (acco_type) {
                    let acco_typeFilter = acco_type.join(",");
                    sql1 += ` AND acco_type IN ('${acco_typeFilter}')`;
                }

                if (rating_point == "9+")
                    sql1 += ` AND room_avg_rating BETWEEN 9 AND 10`;
                if (rating_point == "8+")
                    sql1 += ` AND room_avg_rating BETWEEN 8 AND 10`;
                if (rating_point == "7+")
                    sql1 += ` AND room_avg_rating BETWEEN 7 AND 10`;
                if (rating_point == "6+")
                    sql1 += ` AND room_avg_rating BETWEEN 1 AND 5`;

                if (bed_type == "Giường đơn") {
                    sql1 += ` AND room_single_bed > 0`;
                }
                if (bed_type == "Giường đôi") {
                    sql1 += ` AND room_double_bed > 0`;
                }
                if (acco_star) {
                    let acco_starFilter = acco_star.join(",");
                    sql1 += ` AND acco_star IN ('${acco_starFilter}')`;
                }

                if (acco_fea) {
                    let acco_feaFilter = acco_fea.join(",");
                    sql += ` AND accofea.fea_id IN ('${acco_feaFilter}')`;
                }
                if (cost == "Cao đến thấp")
                    // result.sort((a, b) => a.room_cost - b.room_cost)
                    sql1 += ` ORDER BY room_cost DESC`;
                if (cost == "Thấp đến cao") sql1 += ` ORDER BY room_cost ASC`;
                if (accoStar == "Cao đến thấp")
                    sql1 += ` ORDER BY acco_star DESC`;
                if (accoStar == "Thấp đến cao")
                    sql1 += ` ORDER BY acco_star ASC`;
                if (countRating == "Cao đến thấp")
                    sql1 += ` ORDER BY room_avg_rating DESC`;
                if (countRating == "Thấp đến cao")
                    sql1 += ` ORDER BY room_avg_rating ASC`;
                db.query(sql1, (err, result1) => {
                    if (err) {
                        res.status(500).json({
                            message: "Lỗi truy cập cơ sở dữ liệu",
                        });
                        throw err;
                    }

                    if (result1.length > 0) {
                        res.status(200).json({
                            message: "Đã tìm thành công",
                            data: result1,
                        });
                    } else {
                        res.status(200).json({
                            message: "Không tìm thấy kết quả",
                        });
                    }
                });
            } else {
                res.status(404).json({ message: "Không tìm thấy kết quả" });
            }
        });
    }

    // [GET] /search/:acco_id
    accoDetail(req, res) {
        accoRoomDetail.getDetail(
            req,
            res,
            function (
                err,
                accoDetail,
                accoFea,
                accoImg,
                accoRoom,
                accoRoomRating
            ) {
                res.status(200).render("./pages/search/detail", {
                    // res.status(200).json({
                    message: "Lấy thông tin thành công",
                    accoDetail: accoDetail,
                    accoFea: accoFea,
                    accoImg: accoImg,
                    accoRoom: accoRoom,
                    accoRoomRating: accoRoomRating,
                });
            }
        );
        // res.status(200).render('./pages/search/detail')
    }

    // [POST] /search:acco_id
    submitBooking(req, res) {
        const {
            acco_id,
            room_id,
            room_number,
            room_cost_before,
            room_cost_after,
        } = req.body;

        req.session.acco = { id: acco_id };

        req.session.rooms = room_number
            .map((value, index) => {
                return {
                    id: Number(room_id[index]),
                    num: Number(value),
                    cost_before: Number(room_cost_before[index]),
                    cost_after: Number(room_cost_after[index]),
                };
            })
            .filter((value) => value.num > 0);

        // res.redirect('/booking/information');
    }
}

module.exports = new SearchController();
