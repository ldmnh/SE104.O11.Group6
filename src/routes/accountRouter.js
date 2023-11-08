const express = require('express')
const router = express.Router();

// import controller
const AccountController = require('../controllers/AccountController.js')

router.get('/history', AccountController.history)

router.get('/payment', AccountController.payment)
router.post('/payment/addBank', AccountController.addBank)
router.post('/payment/addDebit', AccountController.addDebit)
router.post('/payment/delBank', AccountController.delBank)
router.post('/payment/delDebit', AccountController.delDebit)

router.get('/information', AccountController.information)
router.put('/information', AccountController.informationPut)

module.exports = router