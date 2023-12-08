const adminModel = require('../models/admin.model')

class AdminController {

    // [GET] /admin/login
    login(req, res) {
        res.render('./pages/admin/login')
    }

    // [POST] /admin/login
    loginPost(req, res) {
        adminModel.login(req, function(err, noFoundName, notMatchPass, success) {
            if (err) return res.status(404).json({
                status: 'error'
            })

            if (noFoundName) return res.status(404).json({
                status: 'noFoundName',
                message: 'Tên đăng nhập không tồn tại!'
            })
            
            if (notMatchPass) return res.status(404).json({
                status: 'notMatchPass',
                message: 'Mật khẩu không chính xác!'
            })
            
            if (success) return res.status(200).json({
                status: 'success',
                message: 'Register successfully'
            })
        })
    }

    // [GET] /admin/logout
    logout (req, res) {
        delete req.session.admin;
        // Chuyển hướng người dùng về trang đăng nhập sau khi đăng xuất thành công
        return res.redirect("/admin/login");
    }


    // [GET] /admin/dashboard
    dashboard(req, res) {
        adminModel.getTotalRoomType(function (getTotalRoomType) {
            adminModel.getTotalBooking(function (getTotalBooking) {
                adminModel.getTotalRating(function (getTotalRating) {
                    adminModel.getLastestBooking(function (getLastestBooking) {
                        adminModel.getLastestRating(function (getLastestRating) {
                            res.status(200).render('./pages/admin/dashboard', {
                                totalRoomType: getTotalRoomType,
                                totalBooking: getTotalBooking,
                                totalRating: getTotalRating,

                                lastestRating: getLastestRating,
                                lastestBooking: getLastestBooking,
                            });         
                        })
                    })
                })
            })
        })
    }

    getChart(req, res) {
        adminModel.getChart(function (chart) {
            return res.json({
                chart: chart,
            })
        })
    }
}


module.exports = new AdminController()