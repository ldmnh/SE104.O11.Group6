class SiteController {

    // [GET] /
    index(req, res) {
        res.render('./pages/index.ejs')
    }

    // [GET] /register
    register(req, res) {
        const title = 'Đăng ký'
        res.render('./pages/register.ejs', { title })
    }

    // [GET] /login
    login(req, res) {
        const title = 'Đăng nhập'
        res.render('./pages/login.ejs', { title })
    }

    // [GET] /forgot-password
    forgot(req, res) {
        const title = 'Nhận liên kết đặt lại mật khẩu'
        res.render('./pages/forgot-password.ejs', { title })
    }

    // [GET] /reset-password
    reset(req, res) {
        const title = 'Đặt lại mật khẩu'
        res.render('./pages/reset-password.ejs', { title })
    }

    search(req, res) {
        const title = 'Kết quả tìm kiếm'
        res.render('./pages/search-results', { title })
    }

    // [GET] /about-us
    about(req, res) {
        const nav_tree__data = [
            { text: 'Trang chủ', link: '/' },
            { text: 'Giới thiệu', link: '/about-us' },
        ]
        res.render('./pages/about-us.ejs', { nav_tree__data })
    }

}

module.exports = new SiteController()