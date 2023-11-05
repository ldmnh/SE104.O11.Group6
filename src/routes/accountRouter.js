const express = require('express')
const router = express.Router();

// import controller
const AccountController = require('../controllers/AccountController.js')

router.get('/', AccountController.index)
router.put('/', AccountController.index__put)
router.get('/booking-history', AccountController.bookingHistory)
router.get('/payment', AccountController.paymentAccount)
router.get('/change-password', AccountController.showChangeForm)
router.put('/change-password', AccountController.changePassword)

module.exports = router