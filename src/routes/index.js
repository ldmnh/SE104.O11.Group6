// import router
const siteRouter = require('./siteRouter');
const searchRouter = require('./searchRouter');
const authRouter = require('./authRouter');
const accountRouter = require('./accountRouter')
const bookingRouter = require('./bookingRouter')

function route(app) {
    app.use("/search", searchRouter)
    app.use('/auth', authRouter)
    app.use("/account", accountRouter);
    app.use("/booking", bookingRouter);
    app.use("/", siteRouter);
}

module.exports = route