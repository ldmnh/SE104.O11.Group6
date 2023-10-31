const express = require('express')
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const session = require('express-session')
// import controller
const SiteController = require('../controllers/SiteController.js');
const passport = require('passport');

router.get('/register', SiteController.register)
// router.use('/register', SiteController.index)
router.get('/login', authMiddleware.isAuth, SiteController.showLoginForm)
    // .post('/login', authMiddleware.isAuth, passport.authenticate('local', {
    //     successRedirect: "/",
    //     failureRedirect: "/login",
    //     failureFlash: true
    // }))
.post('/login', authMiddleware.isAuth, SiteController.login)

router.get('/', SiteController.index)
module.exports = router
