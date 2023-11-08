const express = require('express')
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const session = require('express-session')
const SiteController = require('../controllers/SiteController.js');
const passport = require('passport');

router.get('/about', SiteController.about)

router.get('/', SiteController.index)

module.exports = router

