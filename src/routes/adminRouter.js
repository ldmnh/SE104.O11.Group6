const express = require('express')
const router = express.Router();

// import controller
const AdminController = require('../controllers/AdminController.js')
const adminMiddleware = require('../middlewares/admin.middleware.js')

router.get('/login', adminMiddleware.checkAuthAdmin, AdminController.login)
router.post('/login', adminMiddleware.checkAuthAdmin, AdminController.loginPost)
router.get('/logout', adminMiddleware.checkAuthAdmin, AdminController.logout)

router.get('/dashboard/getchart',adminMiddleware.isLoggedInAdmin, AdminController.getChart)
router.get('/dashboard', adminMiddleware.isLoggedInAdmin, AdminController.dashboard)
router.get('/', adminMiddleware.isLoggedInAdmin, AdminController.dashboard)

module.exports = router