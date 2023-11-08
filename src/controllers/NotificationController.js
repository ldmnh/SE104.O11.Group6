class SiteController {
    
    // [GET] /auth/notification/account-update
    notiAccountUpdate(req, res) {
        const title = 'Thông báo'
        res.render('./pages/notifications/account-update', { title })
    }

    // [GET] /auth/notification/promotion
    notiPromotion(req, res) {
        const title = 'Thông báo'
        res.render('./pages/notifications/promotion', { title })
    }

}

module.exports = new SiteController()