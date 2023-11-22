const express = require('express')
const router = express.Router();

// import controller
const AdminController = require('../controllers/AdminController.js')

router.get('/login', AdminController.login)
router.get('/dashboard', AdminController.dashboard)
router.get('/dashboard/getchart', AdminController.getChart)

module.exports = router