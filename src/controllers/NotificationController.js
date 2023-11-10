const db = require('../config/db/connect');
const NotificationModel = require('../models/notificationModel')


class NotificationController {
    // [GET] /notification/account-update
    notiAccountUpdate(req, res) {
        NotificationModel.getNotiAccount(req, res, function (err, res, result) {
            if (err) {
                res.status(500).json({ message: 'Lỗi truy vấn!!!', });
                throw err;
            }
            res.status(200).render('./pages/notification/account-update', {
                message: 'Lấy thông tin phương thức thanh toán thành công',
                data_noti: result,
            });
            // res.send({
            //     message: 'Lấy thông tin phương thức thanh toán thành công',
            //     data_noti: result,
            // })

        })
    }


    // [GET] /notification/promotion
    notiPromotion(req, res) {
        NotificationModel.getNotiPromotion(req, res, function (err, res, result) {
            if (err) {
                res.status(500).json({ message: 'Lỗi truy vấn!!!', });
                throw err;
            }
            // const title = 'Thông báo'
            res.status(200).render('./pages/notification/promotion', {
                message: 'Lấy thông tin phương thức thanh toán thành công',
                data_noti: result,
            });
            // res.send({
            //     message: 'Lấy thông tin phương thức thanh toán thành công',
            //     data_noti_Promotion: result,
            // })

        })

    }

    // [PUT] /notification/account-update
    updateNotiAccount(req, res) {
        NotificationModel.notiAccountRead(req, res, function(err, res,data_notiacc_isread) {
            if (err) throw err;
            res.status(200).redirect('./account-update')
        })
    }

    // [PUT] /notification/promotion
    updateNotiPromotion(req, res) {
        NotificationModel.notiPromotionRead(req, res, function(err, res,data_notiacc_isread) {
            if (err) throw err;
            res.status(200).redirect('./promotion')
        })
    }
}


module.exports = new NotificationController()
