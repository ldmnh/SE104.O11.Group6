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
    const data = "Xnhi";
    const title = "Không tìm thấy trang";
    const status = "success";
    res.render("./pages/site/error404.ejs", { title, data, status });
  }
}

module.exports = new SiteController();
