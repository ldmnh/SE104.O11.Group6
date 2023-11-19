const db = require("../config/db/connect");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const accoRoomDetail = require("../models/AccoRoomDetail.model");

class SearchController {
  // [GET] /search/results
  searchResult(req, res) {
    const {
      location,
      checkIn,
      checkOut,
      adult,
      child,
      room,
      acco_type,
      rating_point,
      bed_type,
      acco_star,
      acco_fea,
      cost,
      accoStar,
      countRating,
    } = req.query;
    let sql = `
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
            ON X.room_id = Y.room_id`;

    const searchQuery = `%${location}%`;
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
    ];

    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(500).json({ message: "Lỗi truy cập cơ sở dữ liệu" });
        throw err;
      }

      if (result.length > 0) {
        // res.status(200).json({
        //     message: "Đã tìm thành công",
        //     data: result,
        // });
        let resultFilter = result.map((obj) => obj.room_id).join(",");
        let sql1 = `SELECT DISTINCT A.acco_id, R.room_id, A.acco_star, R.room_date_end_discount, A.acco_name, R.room_avg_rating, R.room_count_rating, A.acco_location_link, R.room_class, R.room_max_adult, R.room_type, R.room_cost, R.room_discount, A.acco_tiny_img_url FROM accommodation as A, roomtype as R, accofea as AF WHERE A.acco_id = R.acco_id AND AF.acco_id = A.acco_id AND R.room_id IN (${resultFilter})`;
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
          sql1 += ` AND room_avg_rating BETWEEN 6 AND 10`;

        if (bed_type == "Giường đơn") {
          sql1 += ` AND room_single_bed > 0`;
        }
        if (bed_type == "Giường đôi") {
          sql1 += ` AND room_double_bed > 0`;
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
          let acco_starFilter = acco_star.join(",");
          sql1 += ` AND acco_star IN ('${acco_starFilter}')`;
        }

        if (acco_fea) {
          let acco_feaFilter = acco_fea.join(",");
          sql += ` AND accofea.fea_id IN ('${acco_feaFilter}')`;
        }

        // if (acco_exte) {
        //     let acco_exteFilter = acco_exte.join("','")
        //     sql += ` AND roomexte.exte_id IN ('${acco_exteFilter}')`
        // }
        // if (room_exte) {
        //     let room_exteFilter = room_exte.join("','")
        //     sql += ` AND roomexte.exte_id IN ('${room_exteFilter}')`
        // }

        if (cost == "Cao đến thấp")
          // result.sort((a, b) => a.room_cost - b.room_cost)
          sql1 += ` ORDER BY room_cost DESC`;
        if (cost == "Thấp đến cao") sql1 += ` ORDER BY room_cost ASC`;
        if (accoStar == "Cao đến thấp") sql1 += ` ORDER BY acco_star DESC`;
        if (accoStar == "Thấp đến cao") sql1 += ` ORDER BY acco_star ASC`;
        if (countRating == "Cao đến thấp")
          sql1 += ` ORDER BY room_sum_rating DESC`;
        if (countRating == "Thấp đến cao")
          sql1 += ` ORDER BY room_sum_rating ASC`;
        db.query(sql1, (err, result1) => {
          if (err) {
            res.status(500).json({
              message: "Lỗi truy cập cơ sở dữ liệu",
            });
            throw err;
          }

          if (result1.length > 0) {
            // res.status(200).render("./pages/search/results", {
            res.send({
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
        accoExte,
        accoRoomRating
      ) {
        if (err) {
          res.status(404).render("./pages/site/error404.ejs");
        }
        if (!accoDetail) {
          res.status(404).render("./pages/site/error404.ejs");
        }
        res.status(200).render("./pages/search/detail", {
          // res.status(200).json({
          message: "Lấy thông tin thành công",
          user: req.session.user,
          accoDetail: accoDetail,
          accoFea: accoFea,
          accoImg: accoImg,
          accoRoom: accoRoom,
          accoExte: accoExte,
          accoRoomRating: accoRoomRating,
        });
      }
    );
    // res.status(200).render('./pages/search/detail')
  }

  // [POST] /search:acco_id
  submitBooking(req, res) {
    const { acco_id, room_id, room_number, room_cost_before, room_cost_after } =
      req.body;

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
