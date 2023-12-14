const express = require('express')
const router = express.Router();

// import middleware
const authMiddleware = require('../middlewares/auth.middleware')

// import controller
const AccountController = require('../controllers/AccountController.js')


router.get('/information', authMiddleware.isLoggedIn, AccountController.accountInformation)
router.post('/information', authMiddleware.isLoggedIn, AccountController.putChangeInfo)

router.get('/history', authMiddleware.isLoggedIn, AccountController.getBookingHistory)
router.post('/addReview', authMiddleware.isLoggedIn, AccountController.addRating)

router.get('/card', authMiddleware.isLoggedIn, AccountController.getCards)
router.post("/card/addBank", authMiddleware.isLoggedIn, AccountController.addBank);
router.post("/card/addDebit", authMiddleware.isLoggedIn, AccountController.addDebit);
router.post("/card/delBank", authMiddleware.isLoggedIn, AccountController.delBank);
router.post("/card/delDebit", authMiddleware.isLoggedIn, AccountController.delDebit);

router.get('/change-password', authMiddleware.isLoggedIn, AccountController.changePass)


module.exports = router