const APIError = require('./apierror')
const UnauthenticatedError = require('./unauthenticated')
const UnauthorizedError = require('./unauthorized')

module.exports = { APIError, UnauthenticatedError, UnauthorizedError }