const express = require('express')
const router = express.Router();

// import controller
const AccountController = require('../controllers/AccountController.js')

router.get('/', AccountController.index)
router.get('/booking-history', AccountController.bookingHistory)
router.get('/payment-account', AccountController.paymentAccount)
router.get('/change-password', AccountController.changePassword)

module.exports = router