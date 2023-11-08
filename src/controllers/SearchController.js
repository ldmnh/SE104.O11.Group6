class SearchController {

    // [GET] /search/:acco_id
    accoDetail(req, res) {
        res.render('./pages/acco-detail')
    }

    // [GET] /search
    searchResult(req, res) {
        const title = 'Kết quả tìm kiếm'
        res.render('./pages/site/search-results', { title })
    }

}

module.exports = new SearchController()