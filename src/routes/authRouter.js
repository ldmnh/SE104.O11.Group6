const express = require('express')
const router = express.Router();

// import controller
const AuthController = require('../controllers/AuthController.js')

router.get('/register', AuthController.register)
router.post('/register', AuthController.registerPost)

router.get('/login', AuthController.login)
router.post('/login', AuthController.loginPost)

router.get('/forgot', AuthController.forgot)
router.post('/forgot', AuthController.forgotPost)

router.get('/reset', AuthController.reset)
router.post('/reset', AuthController.resetPost)

router.get('/logout', AuthController.logout)

router.put('/change', AuthController.changePut)

module.exports = router
