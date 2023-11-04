const express = require('express')
const router = express.Router();

// import controller
const AccountController = require('../controllers/AccountController.js')

router.get('/', AccountController.index)
router.get('/booking-history', AccountController.bookingHistory)
router.post('/booking-history', AccountController.addReview)
router.get('/payment', AccountController.showPayment)
router.post('/payment-addBankCard', AccountController.addBankCard)
router.post('/payment-addDebitCard', AccountController.addDebitCard)
router.get('/change-password', AccountController.showChangeForm)
router.put('/change-password', AccountController.changePassword)
module.exports = router