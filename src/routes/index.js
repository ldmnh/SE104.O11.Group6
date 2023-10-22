// import router
const siteRouter = require('./siteRouter')

function route(app) {
    // register
    app.use('/register', (req, res) => { res.render('./pages/register.ejs') })
    app.use('/', siteRouter)
}

module.exports = route