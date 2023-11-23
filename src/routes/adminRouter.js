const express = require('express')
const router = express.Router();

// import controller
const AdminController = require('../controllers/AdminController.js')
const adminMiddleware = require('../middlewares/admin.middleware.js')

router.get('/login', adminMiddleware.checkAuth, AdminController.login)
router.post('/login', adminMiddleware.checkAuth, AdminController.loginPost)
router.get('/logout', adminMiddleware.checkUnauth, AdminController.logout)
router.get('/dashboard', adminMiddleware.isLoggedIn, AdminController.dashboard)
router.get('/dashboard/getchart', adminMiddleware.isLoggedIn, AdminController.getChart)

module.exports = router