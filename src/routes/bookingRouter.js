const express = require('express')
const router = express.Router();

// import middleware
const middleware = require('../middlewares/auth.middleware')

// import controller
const BookingController = require('../controllers/BookingController.js')

router.get('/information', middleware.loggedin, BookingController.information)
router.post('/information', middleware.loggedin, BookingController.informationPost)

router.get('/payment', BookingController.payment)
router.post('/payment', BookingController.paymentPost)

router.get('/success', BookingController.success)

router.get('/detail', BookingController.detail)

router.get('/cancellation', BookingController.cancel)
router.post('/cancellation', BookingController.cancelPost)

module.exports = router