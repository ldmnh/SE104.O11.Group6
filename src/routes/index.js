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
	app.use((req, res) => {
		res.status(404).redirect('/error404')
	})

}

module.exports = route