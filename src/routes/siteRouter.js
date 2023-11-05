const express = require('express')
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const session = require('express-session')
const SiteController = require('../controllers/SiteController.js');
const passport = require('passport');

router.get('/about', SiteController.about)
router.get('/register', SiteController.register)
router.get('/login', authMiddleware.isAuth, SiteController.showLoginForm)
router.post('/login', authMiddleware.isAuth, SiteController.login)
router.get('/forgot-password', SiteController.showForgotForm);
router.post('/forgot-password', SiteController.forgot);
router.get('/reset-password', SiteController.showResetForm);
router.put('/reset-password', SiteController.reset);

// router for reset-password testing session 
router.get('/testing', (req, res) => {
  req.session.email = 'abc@gmail.com';
  res.status(200).json({ email: req.session.email, message: 'ok' });
});
router.post('/search-results', SiteController.search);

router.get('/', SiteController.index)

module.exports = router