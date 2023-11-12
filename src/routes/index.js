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
            "id": "1",
            "email": "john.doe@example.com"
        }
        res.status(200).json({
            id: req.session.user?.id,
            email: req.session.user?.email,
            message: "OK"
        })
    })
}

module.exports = route