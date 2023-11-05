const express = require('express')
const router = express.Router();

// import controller
const AccountController = require('../controllers/AccountController.js')

router.get('/booking-history', AccountController.bookingHistory)
router.get('/payment', AccountController.paymentAccount)
router.get('/change-password', AccountController.changePassword)
router.get('/', AccountController.index)

module.exports = router