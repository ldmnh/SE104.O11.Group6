const express = require('express')
const router = express.Router();

// import controller
const NotificationsController = require('../controllers/NotificationsController.js')

router.get('/account-update', NotificationsController.notiAccountUpdate)

router.get('/promotion', NotificationsController.notiPromotion)


module.exports = router
