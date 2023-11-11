const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const session = require('express-session')
const SiteController = require('../controllers/SiteController.js');


router.get("/error404", SiteController.error404);
const passport = require('passport');

router.get('/about', SiteController.about)

router.get('/terms-of-use', SiteController.termOfUse)

router.get('/privacy-policy', SiteController.privacyPolicy)

router.get('/', SiteController.index)
// router for reset-password testing session 
router.get('/testing', (req, res) => {
    req.session.logedIn = true;
    req.session.email = 'john.doe@example.com';
    res.status(200).json({ email: req.session.email, message: 'ok' });
});
module.exports = router

