const express = require('express');
const router = express.Router();

// import controller
const SiteController = require('../controllers/SiteController.js');


router.get("/error404", SiteController.error404);

router.get('/about', SiteController.about)

router.get('/', SiteController.index)


module.exports = router;
