const db = require("../config/db");
// const User = require('../models/loginServer');
// const { validationResult } = require('express-validator');
const { query } = require("express");
// const loginService = require('../models/loginServer')
// const { check } = require('express-validator')

class SiteController {
  // [GET] /
  index(req, res) {
    res.render("./pages/site/index");
  }

  // [GET] /register
  register(req, res) {
    const title = "Đăng ký";
    res.render("./pages/site/register", { title });
  }

  // [GET] /login
  showLoginForm(req, res) {
    const title = "Đăng nhập";
    res.render("./pages/site/login.ejs", { title });
    // errors: req.flash("errors")
  }

  // [POST] /login
  login(req, res) {
    const { email, password } = req.body;
    db.query(
      "SELECT * FROM authuser WHERE au_user_email = ? AND au_user_pass = ?",
      [email, password],
      function (error, results, fields) {
        if (error) throw error;
        if (results.length > 0) {
          req.session.loggedin = true;
          req.session.email = email;
          res.redirect("/");
        } else {
          const conflictError = "Email hoặc mật khẩu không chính xác";
          res.send(conflictError);
          // res.render('./pages/site/login.ejs', { title, email, password, conflictError });
        }
      }
    );
  }

  // [GET] /logout
  showLogoutForm(req, res) {
    if (error) throw error;
    req.session.loggedin = false;
    req.session.email = null;
    session_destroy();
    localStorage.removeItem();
    if (!error) {
      res.render("./pages/site/login.ejs", { title });
    }
  }


  // [GET] /about
  about(req, res) {
    const nav_tree__data = [
      { text: "Trang chủ", link: "/" },
      { text: "Giới thiệu", link: "/about" },
    ];
    res.render("./pages/site/about", { nav_tree__data });
  }

  // [GET] /forgot-password
  showForgotForm(req, res) {
    const title = "Nhận liên kết đặt lại mật khẩu";
    res.render("./pages/site/forgot-password", { title });
  }

  // [POST] /forgot-password
  forgot(req, res, next) {
    const { email } = req.body;
    db.query(
      "SELECT * FROM authuser WHERE au_user_email = ?",
      [email],
      (err, result, fields) => {
        if (err) throw err;
        if (result.length > 0) {
          req.session.email = email;
          res.status(200).json({ message: "Email đã được gửi" });
          next();
        } else {
          res.status(404).json({ message: "Email không tồn tại" });
        }
      }
    );
  }

  // [GET] /reset-password
  showResetForm(req, res) {
    const title = "Đặt lại mật khẩu";
    res.render("./pages/site/reset-password", { title });
  }

  // [PUT] /reset-password
  reset(req, res) {
    const { password } = req.body;
    if (!req.session.email) {
      res.status(404).json({ message: "Không tìm thấy email!!!" });
      return;
    }

    const sql = "UPDATE authuser SET au_user_pass = ? WHERE au_user_email = ?";
    const params = [password, req.session.email];

    db.query(sql, params, (err, result, fields) => {
      if (err) {
        res.status(500).json({ message: "Đặt lại mật khẩu thất bại" });
        throw err;
      } else {
        if (result.affectedRows === 0) {
          res.status(404).json({ message: "Không tìm thấy email!!!" });
        } else {
          res.status(200).json({ message: "Đặt lại mật khẩu thành công" });
        }
      }
    });
  }

  // [POST] /search-results
  search(req, res) {
    const title = "Kết quả tìm kiếm";
    const { location, checkIn, checkOut, adult, child, room } = req.body;

    // const sql = `
    // SELECT room_id
    // FROM roomtype AS E
    // INNER JOIN    (
    //     SELECT acco_id
    //     FROM accommodation AS A
    //     INNER JOIN (
    //         SELECT prov_id
    //         FROM province
    //         WHERE prov_name LIKE ?) AS B
    //     ON A.prov_id = B.prov_id

    //     UNION

    //     SELECT acco_id
    //     FROM accommodation AS C
    //     INNER JOIN (
    //         SELECT city_id
    //         FROM city
    //         WHERE city_name LIKE ?) AS D
    //     ON C.city_id = D.city_id
    //     ) AS F
    //     ON E.acco_id = F.acco_id
    // WHERE E.room_max_adult >= ? AND E.room_max_child >= ?

    //     `;
    // const searchQuery = `%${location}%`;
    // const params = [searchQuery, searchQuery, adult, child];

    function formatSQL(sql, params) {
      return sql.replace(/\?/g, function () {
        return "'" + params.shift() + "'";
      });
    }

    // const sql = `
    // SELECT F.room_id, room_available
    // FROM
    // (
    //   (
    //     SELECT AA.room_id
    //     FROM roomtype AS AA
    //     WHERE AA.room_id NOT IN
    //     (
    //       SELECT BB.room_id
    //       FROM
    //       (
    //           SELECT DD.*
    //           FROM booking AS CC
    //             INNER JOIN
    //               bookingdetail AS DD
    //             ON CC.book_id = DD.book_id
    //             WHERE (? >= CC.book_start_datetime AND ? <= CC.book_end_datetime)
    //               OR  (? >= CC.book_start_datetime AND ? <= CC.book_end_datetime)
    //               OR  (? < CC.book_start_datetime AND ? > CC.book_end_datetime)
    //       ) AS BB
    //     )
    //   ) AS EE
    //   INNER JOIN
    //   (
    //     SELECT RT.room_id,
    //       (RT.room_total - COALESCE(SUM(BD.book_num_room), 0)) AS room_available
    //     FROM RoomType AS RT
    //     LEFT JOIN BookingDetail AS BD ON RT.room_id = BD.room_id
    //     GROUP BY RT.room_id, RT.room_total
    //     HAVING room_available >= ?
    //   ) AS FF
    //   ON EE.room_id = FF.room_id
    // )
    //     `;
    // const params = [checkIn, checkIn, checkOut, checkOut, checkIn, checkOut];

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
    ON X.room_id = Y.room_id
        `;
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
      const formattedSQL = formatSQL(sql, params);
      console.log("Formatted SQL Statement:", formattedSQL);
      if (err) {
        console.error("Database error:", err);
        res.status(500).json({ message: "Lỗi truy cập cơ sở dữ liệu" });
      } else {
        if (result.length > 0) {
          res.status(200).json({ message: "Đã tìm thành công", data: result });
        } else {
          res.status(404).json({ message: "Không tìm thấy kết quả" });
        }
      }
    });
  }
}

module.exports = new SiteController();
