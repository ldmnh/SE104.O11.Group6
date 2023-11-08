const db = require('../config/db/connect');

class NotificationController {

    // [GET] /notification/account-update
    notiAccountUpdate(req, res) {
        res.render('./pages/notification/account-update')
    }

    // [GET] /notification/promotion
    notiPromotion(req, res) {
        const title = 'Thông báo'
        res.render('./pages/notification/promotion', { title })
    }

}

module.exports = new NotificationController()
