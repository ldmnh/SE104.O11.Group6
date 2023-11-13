class AdminController {

    // [GET] /admin/dashboard
    dashboard(req, res) {
        res.render('./pages/admin/dashboard')
    }
}

module.exports = new AdminController()