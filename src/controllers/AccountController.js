class AccountController {
  // [GET] /account/information
  information(req, res) {
    const nav_tree__data = [
      {
        text: "Trang chủ",
        link: "/",
      },
      {
        text: "Trang cá nhân",
        link: "/account/information",
      },
      {
        text: "Thông tin cá nhân",
        link: "/account/information",
      },
    ];
    res.render("./pages/account/information", { nav_tree__data });
  }

  // [PUT] /account/
  informationPut(req, res) {
    res.send("indexPut");
  }

  // [GET] /account/history
  history(req, res) {
    const nav_tree__data = [
      {
        text: "Trang chủ",
        link: "/",
      },
      {
        text: "Trang cá nhân",
        link: "/account/information",
      },
      {
        text: "Lịch sử đặt phòng",
        link: "/account/history",
      },
    ];
    res.render("./pages/account/history", { nav_tree__data });
  }

  // [GET] /account/card
  card(req, res) {
    const nav_tree__data = [
      {
        text: "Trang chủ",
        link: "/",
      },
      {
        text: "Trang cá nhân",
        link: "/account/information",
      },
      {
        text: "Tài khoản thanh toán",
        link: "/account/card",
      },
    ];
    res.render("./pages/account/card", { nav_tree__data });
  }

  // [GET] /account/card-fill
  cardFill(req, res) {
    res.render("./pages/account/card-fill");
  }

  // [POST] /account/payment/addBank
  addBank(req, res) {
    res.send("addBank");
  }

  // [POST] /account/payment/addDebit
  addDebit(req, res) {
    res.send("addDebit");
  }

  // [POST] /account/payment/delBank
  delBank(req, res) {
    res.send("delBank");
  }

  // [POST] /account/payment/delDebit
  delDebit(req, res) {
    res.send("delDebit");
  }

  // [GET] /account/change-password
  changePassword(req, res) {
    const nav_tree__data = [
      {
        text: "Trang chủ",
        link: "/",
      },
      {
        text: "Trang cá nhân",
        link: "/account/information",
      },
      {
        text: "Đổi mật khẩu",
        link: "/account/change-password",
      },
    ];
    res.render("./pages/account/change-password", { nav_tree__data });
  }
}

module.exports = new AccountController();
