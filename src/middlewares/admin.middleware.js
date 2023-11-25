/**
 * Middleware functions for authentication and authorization.
 * @module adminMiddleware
 */

/**
 * Checks if the admin is logged in by checking if the session has a admin property.
 * @function isLoggedIn
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
exports.isLoggedIn = (req, res, next) => {
    console.log(`isLoggedIn: ${req.session.admin}`)
    if (req.session.admin) {
        next()
    } else {
        res.status(401).redirect('/admin/login')
    }
}

/**
 * Checks if the admin is authenticated by checking if the session has a admin property.
 * If the admin is authenticated, redirects to the home page.
 * @function checkAuth
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
exports.checkAuth = (req, res, next) => {
    console.log(`checkAuth: ${req.session.admin}`)
    if (req.session.admin) {
        res.redirect('/admin/dashboarb')
    } else {
        next()
    }
}

/**
 * Checks if the admin is unauthenticated by checking if the session has no admin property.
 * If the admin is unauthenticated, redirects to the login page.
 * @function checkUnauth
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
exports.checkUnauth = (req, res, next) => {
    console.log(`checkUnauth: ${req.session.admin}`)
    if (!req.session.admin) {
        res.status(401).redirect('/admin/dashboard')
    } else {
        next()
    }
}