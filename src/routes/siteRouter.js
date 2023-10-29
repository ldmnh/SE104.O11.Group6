const express = require('express')
const router = express.Router();

// import controller
const SiteController = require('../controllers/SiteController.js')

router.get('/register', SiteController.register)
router.get('/login', SiteController.login)
router.get('/account', SiteController.account)
router.get('/account/booking-history', SiteController.bookingHistory)
router.get('/account/payment-account', SiteController.paymentAccount)
router.get('/account/change-password', SiteController.changePassword)
router.get('/', SiteController.index)


module.exports = router