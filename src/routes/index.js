// import router
const accountRouter = require("./accountRouter")
const adminRouter = require("./adminRouter")
const authRouter = require("./authRouter")
const bookingRouter = require("./bookingRouter")
const notificationRouter = require("./notificationRouter")
const searchRouter = require("./searchRouter")
const siteRouter = require("./siteRouter")

const route = (app) => {
    app.use("/admin", adminRouter)
    app.use("/auth", authRouter)
    app.use("/search", searchRouter)
    app.use("/notifications", notificationRouter)
    app.use("/account", accountRouter)
    app.use("/booking", bookingRouter)
    app.use("/", siteRouter)
    app.get("/testing1", (req, res) => {
        req.session.user = {
            id: 1,
            email: "lanlyst123@example.com",
            avt_url: "user_3.jpg"
        }
        res.status(200).json({
            user: req.session.user,
            message: "OK"
        })
    })
    app.get("/testing2", (req, res) => {
        req.session.acco = {
            id: 1,
            star: 4,
            name: "Khách sạn Quê Hương",
        };

        req.session.search = {
            location: "Sóc Trăng",
            check_in: "2023-11-11 14:00",
            check_out: "2023-11-15 09:00",
            num_adult: 2,
            num_child: 0,
            num_room: 1,
        }

        req.session.rooms = [{
            id: 1,
            num: 1,
        }, {
            id: 2,
            num: 1,
        }];

        res.status(200).json({
            acco: req.session.acco,
            search: req.session.search,
            rooms: req.session.rooms,
            message: "OK"
        })
    })
}

module.exports = route