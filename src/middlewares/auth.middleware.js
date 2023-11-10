exports.loggedin = (req, res, next) => {
    console.log(req.session.loggedin)
    if (req.session.loggedin) {
        res.locals.user = req.session.user
        next();
    } else {
        res.redirect('/auth/login')
    }
}

exports.isAuth = (req, res, next) => {
    if (req.session.loggedin) {
        res.locals.user = req.session.user
        res.redirect('/');
    } else {
        next();
    }
}