class SiteController {

    // [GET] /register
    register(req, res) {
        const title = 'Đăng ký'
        res.render('./pages/site/register', { title })
    }

    // [POST] /register
    registerPost(req, res) {
        // const title = 'Đăng ký'
        // res.render('./pages/site/register', { title })
    }

    // [GET] /login
    login(req, res) {
        const title = 'Đăng nhập'
        res.render('./pages/site/login', { title })
    }

    // [POST] /login
    loginPost(req, res) {
        // const title = 'Đăng nhập'
        // res.render('./pages/site/login', { title })
    }

    // [GET] /forgot-password
    forgot(req, res) {
        const title = 'Nhận liên kết đặt lại mật khẩu'
        res.render('./pages/site/forgot-password', { title })
    }

    // [POST] /forgot-password
    forgotPost(req, res) {
        // const title = 'Nhận liên kết đặt lại mật khẩu'
        // res.render('./pages/site/forgot-password', { title })
    }

    // [GET] /reset-password
    reset(req, res) {
        const title = 'Đặt lại mật khẩu'
        res.render('./pages/site/reset-password', { title })
    }

    // [POST] /reset-password
    resetPost(req, res) {
        // const title = 'Đặt lại mật khẩu'
        // res.render('./pages/site/reset-password', { title })
    }

    // [GET] /logout
    logout(req, res) {
        res.redirect('/')
    }

    // [GET] /notification/account-update
    notiAccountUpdate(req, res) {
        const title = 'Thông báo'
        res.render('./pages/site/notification/account-update', { title })
    }

    // [GET] /notification/promotion
    notiPromotion(req, res) {
        const title = 'Thông báo'
        res.render('./pages/site/notification/promotion', { title })
    }

    // [GET] /change
    change(req, res) {
        const title = 'Đổi mật khẩu'
        res.render('./pages/site/change', { title })
    }

}

module.exports = new SiteController()