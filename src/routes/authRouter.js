const express = require('express')
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware.js')

// import controller
const AuthController = require('../controllers/AuthController.js')

router.get('/register', AuthController.register)
router.post('/register', AuthController.registerPost)

router.get('/login', authMiddleware.isAuth, AuthController.login)
router.post('/login', authMiddleware.isAuth, AuthController.loginPost)

router.get('/forgot', AuthController.forgot)
router.post('/forgot', AuthController.forgotPost)

router.get('/reset', AuthController.reset)
router.post('/reset', AuthController.resetPost)

router.get('/logout', AuthController.logout)

router.post('/change', AuthController.changePost)

module.exports = router
