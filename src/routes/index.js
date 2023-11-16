// import router
const accountRouter = require("./accountRouter")
const adminRouter = require("./adminRouter")
const authRouter = require("./authRouter")
const bookingRouter = require("./bookingRouter")
const notificationRouter = require("./notificationsRouter")
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

    app.get("/testing-login", (req, res) => {
        req.session.user = {
            id: 1,
            email: 'lehieudn123@example.com',
            first_name: 'Hiếu',
            last_name: 'Lê',
            avatar: 'user_1.jpg'
        }

        res.status(200).json({
            message: "Đăng nhập thành công",
            data: req.session.user
        })
    })
}

module.exports = route