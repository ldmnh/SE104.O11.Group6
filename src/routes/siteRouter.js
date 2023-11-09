const express = require('express');
const router = express.Router();

// import controller
const SiteController = require('../controllers/SiteController.js');

router.get('/about', SiteController.about)
router.get('/', SiteController.index)

module.exports = router;
