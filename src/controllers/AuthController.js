class SiteController {

    // [GET] /auth/register
    register(req, res) {
        const title = 'Đăng ký'
        res.render('./pages/site/register', { title })
    }

    // [POST] /auth/register
    registerPost(req, res) {
        res.send("registerPost")
    }

    // [GET] /auth/login
    login(req, res) {
        const title = 'Đăng nhập'
        res.render('./pages/site/login', { title })
    }

    // [POST] /auth/login
    loginPost(req, res) {
        // const title = 'Đăng nhập'
        // res.render('./pages/site/login', { title })
    }

    // [GET] /auth/forgot-password
    forgot(req, res) {
        const title = 'Nhận liên kết đặt lại mật khẩu'
        res.render('./pages/auth/forgot', { title })
    }

    // [POST] /auth/forgot-password
    forgotPost(req, res) { 
        res.send("forgotPost")
    }

    // [GET] /auth/reset-password
    reset(req, res) {
        const title = 'Đặt lại mật khẩu'
        res.render('./pages/auth/reset', { title })
    }

    // [POST] /auth/reset-password
    resetPost(req, res) {
        res.send("resetPost")
    }

    // [GET] /auth/logout
    logout(req, res) {
        res.redirect('/')
    }

    // [POST] /auth/change
    changePost(req, res) {
        // const title = 'Đổi mật khẩu'
        // res.render('./pages/account/change-password', { title })
        res.send("changePost")
    }

}

module.exports = new SiteController()