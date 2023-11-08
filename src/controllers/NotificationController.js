class NotificationController {

    // [GET] /auth/notification/account-update
    notiAccountUpdate(req, res) {
        res.render('./pages/notification/account-update')
    }

    // [GET] /auth/notification/promotion
    notiPromotion(req, res) {
        const title = 'Thông báo'
        res.render('./pages/notifications/promotion', { title })
    }

}

module.exports = new NotificationController()
