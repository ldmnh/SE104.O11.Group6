const express = require('express')
const router = express.Router();

// import controller
const NotificationController = require('../controllers/NotificationController.js')

router.get('/account-update', NotificationController.notiAccountUpdate)

router.get('/promotion', NotificationController.notiPromotion)


module.exports = router
