const db = require('../config/db/connect');
const SearchModel = require('../models/searchModel');

class SearchController {

    // [GET] /search/results
    searchResult(req, res) {
        // const title = 'ABC'
        SearchModel.filterSort(res, req, function (err, res, result) {
            if (err) {
                res.status(500).json({ message: 'Lỗi truy vấn!' })
                throw err
            }
            if (result.length > 0) {
                // res.status(200).render('./pages/search/results', { title },
                res.status(200).json(
                    {
                        message: 'Thành công',
                        data: result
                    })
            } else {
                res.status(404).json({
                    message: 'Không có dữ liệu phù hợp'
                })
            }
        })
    }

    // [GET] /search/:acco_id
    accoDetail(req, res) {
        res.render('./pages/search/detail')
    }

}

module.exports = new SearchController()