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

router.get('/about', SiteController.about)

router.get('/', SiteController.index)

router.get('/testing', (req, res) => {
    res.status(200).json({ email: req.session.email, message: 'ok' });
});

module.exports = router;
