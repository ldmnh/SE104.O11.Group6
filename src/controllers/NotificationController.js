class NotificationController {

    // [GET] /auth/notification/account-update
    notiAccountUpdate(req, res) {
        res.render('./pages/notification/account-update')
    }

    // [GET] /auth/notification/promotion
    notiPromotion(req, res) {
        res.render('./pages/notification/promotion')
    }

}

module.exports = new NotificationController()