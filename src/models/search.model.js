const db = require("../config/db/connect");
function Search() { }


Search.find = function (req, res, callback) {
    const {
        location,
        checkin: checkIn,
        checkout: checkOut,
        adult,
        child,
        room,
    } = req.query;
    req.session.search = {
        check_in: checkIn,
        check_out: checkOut,
        adult: adult,
        child: child,
    };

    const sql = `
        SELECT X.room_id
        FROM (
            SELECT room_id
            FROM roomtype AS E
            INNER JOIN (
                SELECT acco_id
                FROM accommodation AS A
                INNER JOIN (
                    SELECT prov_id
                    FROM province
                    WHERE prov_name LIKE ?
                ) AS B
                    ON A.prov_id = B.prov_id

                UNION

                SELECT acco_id
                FROM accommodation AS C
                INNER JOIN (
                    SELECT city_id
                    FROM city
                    WHERE city_name LIKE ?
                ) AS D
                    ON C.city_id = D.city_id
            ) AS F
                ON E.acco_id = F.acco_id
            WHERE E.room_max_adult >= ? AND E.room_max_child >= ?
        ) AS X
        INNER JOIN (
            SELECT FF.room_id, room_available
            FROM (
                (SELECT AA.room_id
                FROM roomtype AS AA
                WHERE AA.room_id NOT IN (
                    SELECT BB.room_id
                    FROM (
                        SELECT DD.*
                        FROM booking AS CC
                        INNER JOIN
                            bookingdetail AS DD
                            ON CC.book_id = DD.book_id
                        WHERE (? >= CC.book_start_datetime AND ? <= CC.book_end_datetime)
                            OR (? >= CC.book_start_datetime AND ? <= CC.book_end_datetime)
                            OR (? < CC.book_start_datetime AND ? > CC.book_end_datetime)
                    ) AS BB
                )) AS EE
                INNER JOIN 
                (SELECT
                    RT.room_id,
                    (RT.room_total - COALESCE(SUM(BD.book_num_room), 0)) AS room_available
                FROM RoomType AS RT
                LEFT JOIN BookingDetail AS BD
                    ON RT.room_id = BD.room_id
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
        callback(err, res, result);
    });
};

Search.hintSearch = (searchKey, callback) => {
    let sql = `SELECT city_name, prov_name FROM view_acco`;
    let sql2 = `SELECT city_name, prov_name FROM view_acco`;
    let searchKeyArray = searchKey.split(' ');
    if (searchKey) {
        sql += ` WHERE LOWER(city_name) LIKE '%${searchKeyArray[0]}%'`
    }
    if (searchKey) {
        searchKeyArray.forEach(key => {
            sql += ` OR LOWER(city_name) LIKE '%${key}%' OR LOWER(prov_name) LIKE '%${key}%'`
        })
    }
    
    db.query(sql, (err, result) => {
        if (result[0]) {
            callback(err, result);
        }
        else {
            db.query(sql2, (err, result2) => {
                callback(err, result2);
            })
        }
    })
}


module.exports = Search;
