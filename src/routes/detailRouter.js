const express = require('express');
const DetailController = require('../controllers/DetailController');
const router = express.Router();

// import controller
// const AccountController = require('../controllers/AccController.js')

router.get('/', DetailController.showReview)

module.exports = router