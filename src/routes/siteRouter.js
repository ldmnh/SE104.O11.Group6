const express = require('express')
const router = express.Router();

// import controller
const SiteController = require('../controllers/SiteController.js')

router.get('/register', SiteController.register)
router.get('/footer', SiteController.footer)
router.get('/login', SiteController.login)
router.get('/forgot-password', SiteController.forgot);
router.get('/reset-password', SiteController.reset);
router.get('/', SiteController.index)

module.exports = router