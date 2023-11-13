/**
 * Middleware functions for booking-related authentication and authorization.
 * @module bookingMiddleware
 */

/**
 * Middleware function to check if user has chosen rooms before proceeding to next step
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
exports.isChoosingRooms = (req, res, next) => {
    if (req.session.rooms) { next(); }
    else { res.status(401).redirect('/'); }
}

/**
 * Middleware function to check if user has filled booking information before proceeding to next step
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
exports.isFilledBookingInfo = (req, res, next) => {
    if (req.session.book) { next(); }
    else { res.status(401).redirect('/booking/information'); }
}