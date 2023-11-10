class SiteController {
  // [GET] /auth/register
  register(req, res) {
    const title = "Đăng ký";
    const help = "Bạn cần sự trợ giúp?";
    res.render("./pages/auth/register", { title, help });
  }

  // [POST] /auth/register
  registerPost(req, res) {}

  // [GET] /auth/login
  login(req, res) {
    const title = "Đăng nhập";
    const help = "Bạn quên mật khẩu?";
    res.render("./pages/auth/login", { title, help });
  }

  // [POST] /auth/login
  loginPost(req, res) {}

  // [GET] /auth/forgot-password
  forgot(req, res) {
    const title = "Nhận liên kết đặt lại mật khẩu";
    const help = "Bạn cần sự trợ giúp?";
    res.render("./pages/auth/forgot", { title, help });
  }

  // [POST] /auth/forgot-password
  forgotPost(req, res) {}

  // [GET] /auth/reset-password
  reset(req, res) {
    const title = "Đặt lại mật khẩu";
    const help = "Bạn cần sự trợ giúp?";
    res.render("./pages/auth/reset", { title, help });
  }

  // [POST] /auth/reset-password
  resetPost(req, res) {}

  // [GET] /auth/logout
  logout(req, res) {
    res.redirect("/");
  }

  // [GET] /auth/change
  // change(req, res) {
  //     const title = 'Đổi mật khẩu'
  //     res.render('./pages/account/change-password', { title })
  // }
}

module.exports = new SiteController();
