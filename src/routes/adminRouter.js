const express = require('express')
const router = express.Router();

// import controller
const AdminController = require('../controllers/AdminController.js')

router.get('/dashboard', AdminController.dashboard)

module.exports = router