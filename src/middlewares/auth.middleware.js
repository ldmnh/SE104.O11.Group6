/**
 * Middleware functions for authentication and authorization.
 * @module authMiddleware
 */

/**
 * Checks if the user is logged in by checking if the session has a user property.
 * @function isLoggedIn
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
exports.isLoggedIn = (req, res, next) => {
    console.log(`isLoggedIn: ${req.session.user}`)
    if (req.session.user) {
        next()
    } else {
        res.status(401).redirect('/auth/login')
    }
}

/**
 * Checks if the user is authenticated by checking if the session has a user property.
 * If the user is authenticated, redirects to the home page.
 * @function checkAuth
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
exports.checkAuth = (req, res, next) => {
    console.log(`checkAuth: ${req.session.user}`)
    if (req.session.user) {
        res.redirect('/')
    } else {
        next()
    }
}

/**
 * Checks if the user is unauthenticated by checking if the session has no user property.
 * If the user is unauthenticated, redirects to the login page.
 * @function checkUnauth
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
exports.checkUnauth = (req, res, next) => {
    console.log(`checkUnauth: ${req.session.user}`)
    if (!req.session.user) {
        res.status(401).redirect('/')
    } else {
        next()
    }
}

/**
 * Checks if the user has an email of forgot password request by checking if the session has an emailOfForgot property.
 * If the user has no email of forgot password request, redirects to the forgot password page.
 * @function checkForgot
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
exports.checkForgot = (req, res, next) => {
    console.log(`checkForgot: ${req.session.emailOfForgot}`)
    if (!req.session.emailOfForgot) {
        res.status(401).redirect('/auth/forgot')
    } else {
        next()
    }
}