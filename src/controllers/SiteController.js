class SiteController {
  // [GET] /
  index(req, res) {
    res.render("./pages/site/index");
  }

  // [GET] /about
  about(req, res) {
    const nav_tree__data = [
      {
        text: "Trang chủ",
        link: "/",
      },
      {
        text: "Về chúng tôi",
        link: "/about",
      },
    ];
    res.render("./pages/site/about", { nav_tree__data });
  }

  // [GET] /error404
  error404(req, res) {
    const title = "Không tìm thấy trang";
    res.render("./pages/account/error404.ejs", { title });
  }
}

module.exports = new SiteController();
