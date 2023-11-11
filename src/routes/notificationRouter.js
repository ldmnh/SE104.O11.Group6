const express = require('express')
const router = express.Router();

// import controller
const NotificationController = require('../controllers/NotificationController.js')

router.get('/account-update', NotificationController.notiAccountUpdate)
router.post('/account-update', NotificationController.updateNotiAccount)

router.get('/promotion', NotificationController.notiPromotion)
router.post('/promotion', NotificationController.updateNotiPromotion)
router.post('/read-all', NotificationController.readAllNotification)


module.exports = router
