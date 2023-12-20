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

            if (result.length > 0) {
                req.data_noti = result;
            } else {
                req.data_noti = [];
            }
            res.status(200).render(
                // res.status(200).json(
                './pages/notifications/account-update',
                {
                    data_noti: result,
                    user: req.session.user
                })
        })
    }

    // [POST] /notifications/account-update
    updateNotiAccount(req, res) {
        const { noti_id } = req.body;

        NotificationModel.notiRead({
            "id": req.session.user?.id,
            "noti_id": noti_id
        }, (err, result) => {
            if (err) throw err;
        })
    }

    // [GET] /notifications/promotion
    notiPromotion(req, res) {
        NotificationModel.getNoti({
            "id": req.session.user?.id,
            "noti_type": "Type 2"
        }, (err, result) => {
            if (err) throw err;

            if (result.length > 0) {
                req.data_noti = result;
            } else {
                req.data_noti = [];
            }
            res.status(200).render(
                './pages/notifications/promotion',
                {
                    data_noti: result,
                    user: req.session.user
                }
            )
        })
    }

    // [POST] /notifications/promotion
    updateNotiPromotion(req, res) {
        const { noti_id } = req.body;

        NotificationModel.notiRead({
            "id": req.session.user?.id,
            "noti_id": noti_id
        }, (err, result) => {
            if (err) throw err;
        })
    }

    // [POST] /notifications/read-all
    readAllNotification(req, res) {
        NotificationModel.readAllNotification({
            "id": req.session.user?.id,
            "noti_type": req.body.noti_type
        }, (err, result) => {
            if (err) throw err;
        })

    }
}


module.exports = new NotificationController()
