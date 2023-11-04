// import router
const siteRouter = require('./siteRouter')
const accountRouter = require('./accountRouter')
const detailRoute= require('./detailRouter')

function route(app) {
    // app.get('/detail', (req, res) => res.render('./pages/acco-detail'))
    app.use('/account', accountRouter)
    app.use('/detail', detailRoute)
    app.use('/', siteRouter)
}

module.exports = route