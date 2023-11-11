/**
 * Express router for handling authentication related routes.
 * @module authRouter
 * @requires express
 * @requires ../middlewares/auth.middleware
 * @requires ../controllers/AuthController.js
 */
const express = require('express')
const router = express.Router();

// import middleware
const authMiddleware = require('../middlewares/auth.middleware')

// import controller
const AuthController = require('../controllers/AuthController.js')

router.get('/register', AuthController.register)
router.post('/register', AuthController.registerPost)

router.get('/login', authMiddleware.checkAuth, AuthController.login)
router.post('/login', authMiddleware.checkAuth, AuthController.loginPost)

router.get('/forgot', AuthController.forgot)
router.post('/forgot', AuthController.forgotPost)

router.get('/reset', authMiddleware.checkForgot, AuthController.reset)
router.put('/reset', authMiddleware.checkForgot, AuthController.resetPost)

router.get('/logout', authMiddleware.checkUnauth, AuthController.logout)

router.put('/change-password', authMiddleware.checkAuth, AuthController.changePassPut)

module.exports = router
