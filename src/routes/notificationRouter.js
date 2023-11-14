const express = require('express')
const router = express.Router();

// import controller
const NotificationsController = require('../controllers/NotificationsController.js')

router.get('/account-update', NotificationsController.notiAccountUpdate)
router.post('/account-update', NotificationsController.updateNotiAccount)

router.get('/promotion', NotificationsController.notiPromotion)
router.post('/promotion', NotificationsController.updateNotiPromotion)
router.post('/read-all', NotificationsController.readAllNotification)

module.exports = router