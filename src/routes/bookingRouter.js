const express = require('express')
const router = express.Router();

// import controller
const BookingController = require('../controllers/BookingController.js')

router.get('/information', BookingController.information)
router.post('/information', BookingController.informationPost)

router.get('/payment', BookingController.payment)
router.post('/payment', BookingController.paymentPost)

router.get('/success', BookingController.success)

router.get('/detail', BookingController.detail)

router.get('/cancellation', BookingController.cancel)
router.post('/cancellation', BookingController.cancelPost)

module.exports = router