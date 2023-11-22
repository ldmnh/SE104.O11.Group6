const adminModel = require('../models/admin.model')

class AdminController {

    // [GET] /admin/login
    login(req, res) {
        res.render('./pages/admin/login')
    }

    // [GET] /admin/dashboard
    dashboard(req, res) {

        adminModel.getTotalRoomType(function (getTotalRoomType) {
            adminModel.getTotalBooking(function (getTotalBooking) {
                adminModel.getTotalRating(function (getTotalRating) {
                    adminModel.getLastestBooking(function (getLastestBooking) {
                        adminModel.getLastestRating(function (getLastestRating) {
                            res.status(200).render('./pages/admin/dashboard', {
                                totalRoomType: getTotalRoomType,
                                totalBooking: getTotalBooking,
                                totalRating: getTotalRating,

                                lastestRating: getLastestRating,
                                lastestBooking: getLastestBooking,
                            });

                            // res.send({
                            //     totalRoomType: getTotalRoomType,
                            //     totalBooking: getTotalBooking,
                            //     totalRating: getTotalRating,

                            //     lastestRating: getLastestRating,
                            //     lastestBooking: getLastestBooking,

                            // });          
                        })
                    })
                })
            })
        })
    }

    getChart(req, res) {
        adminModel.getChart(function (chart) {
            console.log(chart)
            return res.json({
                chart: chart,
            })
        })
    }
}

module.exports = new AdminController()