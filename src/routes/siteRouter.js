const express = require('express')
const router = express.Router();

// import controller
const SiteController = require('../controllers/SiteController.js')

router.get('/register', SiteController.register)
router.get('/about-us', SiteController.about_us)
router.get('/login', SiteController.login)
router.get('/account', SiteController.account)
router.get('/account/booking-history', SiteController.bookingHistory)
router.get('/account/payment-account', SiteController.paymentAccount)
router.get('/account/change-password', SiteController.changePassword)
router.get('/', SiteController.index)



router.get('/payment', SiteController.payment)

module.exports = router