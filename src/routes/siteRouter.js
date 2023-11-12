/**
 * Express router for handling site-related routes.
 * @module routes/siteRouter
 * @require express
 * @require controllers/SiteController
 */

const express = require('express');
const router = express.Router();

// import controller
const SiteController = require('../controllers/SiteController.js');

router.get('/error404', SiteController.error404);

router.get('/about', SiteController.about)

router.get('/terms-of-use', SiteController.termOfUse)

router.get('/privacy-policy', SiteController.privacyPolicy)

router.get('/', SiteController.index)

router.get('/testing2', (req, res) => {
    req.session.loggIn = true;
    req.session.userId = 'usr000000001'
    res.status(200).json({ userId: req.session.userId, message: 'ok' });
});

module.exports = router;