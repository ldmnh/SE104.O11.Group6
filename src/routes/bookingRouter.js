const express = require('express')
const router = express.Router();

// import controller
const BookingController = require('../controllers/BookingController.js')

router.get('/info', BookingController.info)
router.post('/info', BookingController.infoPost)
router.get('/payment', BookingController.payment)
router.post('/payment', BookingController.paymentPost)
router.get('/result', BookingController.result)
router.get('/result-detail', BookingController.resultDetail)
router.post('/cancel', BookingController.cancelPost)
router.get('/cancel', BookingController.cancel)

module.exports = router