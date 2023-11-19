const express = require('express')
const router = express.Router();

// import middleware
const authMiddleware = require('../middlewares/auth.middleware')

// import controller
const AccountController = require('../controllers/AccountController.js')


router.get('/information', authMiddleware.isLoggedIn, AccountController.information)
router.post('/information', authMiddleware.isLoggedIn, AccountController.informationPost)
// router.get('/information', AccountController.information)
// router.post('/information', AccountController.informationPost)

router.get('/history', authMiddleware.isLoggedIn, AccountController.history)
router.post('/addReview', authMiddleware.isLoggedIn, AccountController.addReview)

router.get('/card', authMiddleware.isLoggedIn, AccountController.card)
// router.get('/card-fill', AccountController.cardFill)
router.post("/card/addBank", authMiddleware.isLoggedIn, AccountController.addBank);
router.post("/card/addDebit", authMiddleware.isLoggedIn, AccountController.addDebit);
router.post("/card/delBank", authMiddleware.isLoggedIn, AccountController.delBank);
router.post("/card/delDebit", authMiddleware.isLoggedIn, AccountController.delDebit);

router.get('/change-password', authMiddleware.isLoggedIn, AccountController.changePass)


module.exports = router