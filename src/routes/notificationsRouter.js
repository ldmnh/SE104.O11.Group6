const express = require('express')
const router = express.Router();

// import controller
const NotificationsController = require('../controllers/NotificationsController.js')
const authMiddleware = require('../middlewares/auth.middleware')

router.get('/account-update', authMiddleware.isLoggedIn, NotificationsController.notiAccountUpdate)
router.post('/account-update', authMiddleware.isLoggedIn, NotificationsController.updateNotiAccount)

router.get('/promotion', authMiddleware.isLoggedIn, NotificationsController.notiPromotion)
router.post('/promotion', authMiddleware.isLoggedIn, NotificationsController.updateNotiPromotion)
router.post('/read-all', authMiddleware.isLoggedIn, NotificationsController.readAllNotification)

module.exports = router 