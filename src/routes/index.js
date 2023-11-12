// import router
const authRouter = require("./authRouter")
const searchRouter = require("./searchRouter")
const notificationRouter = require("./notificationRouter")
const accountRouter = require("./accountRouter")
const bookingRouter = require("./bookingRouter")
const siteRouter = require("./siteRouter")

const route = (app) => {
    app.use("/auth", authRouter)
    app.use("/search", searchRouter)
    app.use("/notification", notificationRouter)
    app.use("/account", accountRouter)
    app.use("/booking", bookingRouter)
    app.use("/", siteRouter)
    app.get("/testing", (req, res) => {
        req.session.user = {
            "isLoggedIn": true,
            "email": "john.doe@example.com"
        }
        res.status(200).json({
            loggedin: req.session.user?.isLoggedIn,
            email: req.session.user?.email,
            message: "OK"
        })
    })
}

module.exports = route