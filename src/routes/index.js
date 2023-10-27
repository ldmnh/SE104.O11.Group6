// import router
const siteRouter = require('./siteRouter')

function route(app) {
    app.use('/detail', (req, res) => res.render('./pages/acco-detail'))
    app.use('/', siteRouter)
}

module.exports = route