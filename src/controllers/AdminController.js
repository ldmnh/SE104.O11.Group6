const adminModel = require('../models/admin.model')

class AdminController {

    // [GET] /admin/dashboard
    dashboard(req, res) {

        adminModel.getTotalRoomType(function (getTotalRoomType) {
            adminModel.getTotalBooking(function (getTotalBooking) {
                adminModel.getTotalRating(function (getTotalRating) {
                    adminModel.getLastestBooking(function (getLastestBooking) {
                        adminModel.getLastestRating(function (getLastestRating) {
                            adminModel.getChartRating(function (getChartRating) {
                                adminModel.getChartBooking(function (getChartBooking) {
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
            })
        })
    }

    getChart(req, res) {
        adminModel.getChartRating(function (getChartRating) {
            adminModel.getChartBooking(function (getChartBooking) {
                return res.json({
                    chartBooking: getChartBooking,
                    chartRating: getChartRating,
                });
            })
        })
    }

    delRating(req,res){
        
    }
}

module.exports = new AdminController()