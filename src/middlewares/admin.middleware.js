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
exports.isLoggedInAdmin = (req, res, next) => {
    console.log(`isLoggedInAdmin: ${req.session.admin}`)
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
exports.checkAuthAdmin = (req, res, next) => {
    console.log(`checkAuthAdmin: ${req.session.admin}`)
    if (req.session.admin) {
        res.redirect('/admin/')
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
exports.checkUnauthAdmin = (req, res, next) => {
    console.log(`checkUnauthAdmin: ${req.session.admin}`)
    if (!req.session.admin) {
        res.status(401).redirect('/admin/')
    } else {
        next()
    }
}