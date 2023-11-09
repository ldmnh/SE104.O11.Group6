const db = require('../config/db/connect');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class SiteController {

    // [GET] /
    index(req, res) {
        res.render('./pages/site/index')
    }

    // [GET] /about
    about(req, res) {
        res.render('./pages/site/about')
    }


}

module.exports = new SiteController()