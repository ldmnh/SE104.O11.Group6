const express = require('express')
const router = express.Router();

// import controller
const SearchController = require('../controllers/SearchController.js')

router.get('/results', SearchController.find)
router.get('/resultsfiltersort', SearchController.filterSortResult)
router.get('/:acco_id', SearchController.accoDetail)
router.get('/:acco_id/commentsfiltersort', SearchController.filterSortComments)
router.post('/:acco_id', SearchController.submitBooking)

module.exports = router