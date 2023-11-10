const express = require('express')
const router = express.Router();

// import middleware
const authMiddleware = require('../middlewares/auth.middleware')

// import controller
const AuthController = require('../controllers/AuthController.js')

router.get('/register', authMiddleware.isAuth, AuthController.register)
router.post('/register', authMiddleware.isAuth, AuthController.registerPost)

router.get('/login', authMiddleware.isAuth, AuthController.login)
router.post('/login', authMiddleware.isAuth, AuthController.loginPost)

router.get('/forgot', authMiddleware.loggedin, AuthController.forgot)
router.post('/forgot', authMiddleware.loggedin, AuthController.forgotPost)

router.get('/reset', AuthController.reset)
router.post('/reset', AuthController.resetPost)

router.get('/logout', authMiddleware.isAuth, AuthController.logout)

router.put('/change', authMiddleware.isAuth, AuthController.changePut)

module.exports = router
