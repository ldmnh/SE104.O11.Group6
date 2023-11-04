class NotificationsController {

    // [GET] /nofitications
    // index(req, res) {
    //     res.render('./pages/nofitications.ejs')
    // }
    accountUpdate(req, res) {
        res.render('./pages/notifications/account-update.ejs')
    }

    promotion(req, res) {
        res.render('./pages/notifications/promotion.ejs')
    }

}

module.exports = new NotificationsController()