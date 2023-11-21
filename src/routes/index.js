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

    app.get("/testing-search", (req, res) => {
        req.session.search = {
            check_in: new Date('11-06-2023'),
            check_out: new Date('11-06-2023'),
            adult: 2,
            child: 0,
        }

        res.status(200).json({
            search: req.session.search,
        })
    })
}

module.exports = route