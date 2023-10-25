const express = require('express')
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

// import controller
const SiteController = require('../controllers/SiteController.js')

router.get('/register', SiteController.register)
// router.use('/register', SiteController.index)
router.get('/login', authMiddleware.isAuth, SiteController.showLoginForm)
.post('/login', SiteController.login)
// router.use('/login', SiteController.login)
router.get('/', SiteController.index)
// router.use('/', SiteController.index)
module.exports = router