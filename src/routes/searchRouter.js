const express = require('express')
const router = express.Router();

// import controller
const SearchController = require('../controllers/SearchController.js')

router.get('/:acco_id', SearchController.accoDetail)
router.get('/', SearchController.searchResult)

module.exports = router

