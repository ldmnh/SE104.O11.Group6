// import router
const authRouter = require('./authRouter')
const searchRouter = require('./searchRouter')
const notificationRouter = require('./notificationRouter')
const accountRouter = require('./accountRouter')
const bookingRouter = require('./bookingRouter')
const siteRouter = require('./siteRouter')

function route(app) {
    app.use('/auth', authRouter)
    app.use('/search', searchRouter)
    app.use('/notifications', notificationRouter)
    app.use('/account', accountRouter)
    app.use('/booking', bookingRouter)
    app.use('/', siteRouter)
}

module.exports = route