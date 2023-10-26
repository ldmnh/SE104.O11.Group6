// import router
const siteRouter = require('./siteRouter')

function route(app) {
    // register
    app.use('/register', (req, res) => { res.render('./pages/register.ejs') })
    app.use('/login', (req, res) => { res.render('./pages/login.ejs') })
    app.use('/forgotPassword', (req, res) => { res.render('./pages/forgotPassword.ejs') })
    app.use('/', siteRouter)
}

module.exports = route