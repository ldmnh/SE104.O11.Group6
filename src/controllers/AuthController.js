class SiteController {

    // [GET] /auth/register
    register(req, res) {
        const title = 'Đăng ký'
        res.render('./pages/site/register', { title })
    }

    // [POST] /auth/register
    registerPost(req, res) {
        // const title = 'Đăng ký'
        // res.render('./pages/site/register', { title })
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
        res.render('./pages/site/forgot-password', { title })
    }

    // [POST] /auth/forgot-password
    forgotPost(req, res) {
        // const title = 'Nhận liên kết đặt lại mật khẩu'
        // res.render('./pages/site/forgot-password', { title })
    }

    // [GET] /auth/reset-password
    reset(req, res) {
        const title = 'Đặt lại mật khẩu'
        res.render('./pages/site/reset-password', { title })
    }

    // [POST] /auth/reset-password
    resetPost(req, res) {
        // const title = 'Đặt lại mật khẩu'
        // res.render('./pages/site/reset-password', { title })
    }

    // [GET] /auth/logout
    logout(req, res) {
        res.redirect('/')
    }

    // [GET] /auth/change
    change(req, res) {
        const title = 'Đổi mật khẩu'
        res.render('./pages/account/change-password', { title })
    }

}

module.exports = new SiteController()