// import router
const siteRouter = require('./siteRouter')
const accountRouter = require('./accountRouter')

function route(app) {
    app.use('/detail', (req, res) => res.render('./pages/acco-detail'))
    app.use('/account', accountRouter)
    app.use('/', siteRouter)
}

module.exports = route