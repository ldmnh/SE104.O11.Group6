class SearchController {

    // [GET] /search/results
    searchResult(req, res) {
        const title = 'ABc'
        res.render('./pages/search/results', { title })
    }

    // [GET] /search/:acco_id
    accoDetail(req, res) {
        res.render('./pages/search/detail')
    }

}

module.exports = new SearchController()