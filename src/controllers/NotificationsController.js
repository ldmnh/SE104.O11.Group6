const db = require('../config/db/connect');
const NotificationModel = require('../models/notifications.model')


// [GET] /notifications/account-update
class NotificationController {
    notiAccountUpdate(req, res) {
        NotificationModel.getNoti({
            "id": req.session.user?.id,
            "noti_type": "Type 1"
        }, (err, result) => {
            if (err) throw err;

            res.status(200).json({
                data: result,
            })
        })
    }

    // [PUT] /notifications/account-update
    updateNotiAccount(req, res) {
        NotificationModel.notiRead({
            "id": req.session.user?.id,
            "noti_type": "Type 1"
        }, (err, result) => {
            if (err) throw err;

            res.status(200).json({
                massage: "Đánh dấu đã đọc thông báo cập nhật tài khoản thành công"
            })
        })
    }

    // [GET] /notifications/promotion
    notiPromotion(req, res) {
        NotificationModel.getNoti({
            "id": req.session.user?.id,
            "noti_type": "Type 2"
        }, (err, result) => {
            if (err) throw err;

            res.status(200).json({
                data: result,
            })
        })
    }

    // [PUT] /notifications/promotion
    updateNotiPromotion(req, res) {
        NotificationModel.notiRead({
            "id": req.session.user?.id,
            "noti_type": "Type 2"
        }, (err, result) => {
            if (err) throw err;

            res.status(200).json({
                massage: "Đánh dấu đã đọc thông báo khuyến mãi thành công"
            })
        })
    }

    // [POST] /notifications/read-all
    readAllNotification(req, res) {
        NotificationModel.readAllNotification({
            "id": req.session.user?.id,
        }, (err, result) => {
            if (err) throw err;

            res.status(200).json({
                massage: "Đánh dấu đã đọc tất cả thông báo thành công"
            })
        })
    }
}


module.exports = new NotificationController()
