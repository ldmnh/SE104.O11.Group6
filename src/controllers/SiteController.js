class SiteController {
  // [GET] /
  index(req, res) {
    res.render("./pages/site/index");
  }

  // [GET] /register
  register(req, res) {
    const title = "Đăng ký";
    res.render("./pages/site/register", { title });
  }

  // [GET] /login
  login(req, res) {
    const title = "Đăng nhập";
    res.render("./pages/site/login", { title });
  }

  // [GET] /about-us
  about(req, res) {
    res.render('./pages/site/about')
  }
  // [GET] /footer
  footer(req, res) {
    res.render('./pages/footer.ejs')
  }

  // [GET] /forgot-password
  forgot(req, res) {
    const title = "Nhận liên kết đặt lại mật khẩu";
    res.render("./pages/site/forgot-password", { title });
  }

  // [GET] /reset-password
  reset(req, res) {
    const title = "Đặt lại mật khẩu";
    res.render("./pages/site/reset-password", { title });
  }

  // [GET] /search-results
  search(req, res) {
    const title = "Kết quả tìm kiếm";
    res.render("./pages/site/search-results", { title });
  }

  payment(req, res) {
    res.render("./pages/payment.ejs");
  }

  // [GET] /booking-info
  booking_info(req, res) {
    const nav_tree__data = [
      {
        text: "Trang chủ",
        link: "/",
      },
      {
        text: "Thông tin đặt phòng",
        link: "/booking_info",
      },
    ];
    const title = "Thông tin đặt phòng";
    res.render("./pages/booking/info", { title, nav_tree__data });
  }
}

module.exports = new SiteController();
