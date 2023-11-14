class AdminController {

    // [GET] /admin/dashboard
    dashboard(req, res) {
        res.render('./pages/admin/dashboard')
    }

    delRating(req,res){
        
    }
}

module.exports = new AdminController()