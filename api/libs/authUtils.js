var ApiException = require('../libs/core/ApiException');
var apiErrors = require('../assets/api_errors');
var authHelper = require('../helper/authHelper');

// define module
var authUtils = {};
module.exports = authUtils;

/**
 * Ensures there is a valid sessionId in request headers or url query params.
 * @param req - express request.
 * @param res - express response.
 * @param next - express next.
 * @return {*}
 */
authUtils.verifySessionId = function(req, res, next) {
  //UUID check regular expression
  var exp = new RegExp(
    '^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$'
  );

  // get auth_token from header or url query parameter if present

  const headerSessionId = req.get('sessionId');
  const sessionId = req.session.sessionId;

  const authToken = !(
    headerSessionId === 'undefined' || headerSessionId === undefined
  )
    ? headerSessionId
    : sessionId;

  // auth_token must be provided
  if (authToken === null || authToken === undefined) {
    return next(
      ApiException.newUnauthorizedError(
        apiErrors.auth_token_required.error_code,
        null
      ).addDetails(apiErrors.auth_token_required.description)
    );
  }
  // auth_token must be valid format

  if (!exp.test(authToken)) {
    return next(
      ApiException.newUnauthorizedError(
        apiErrors.invalid_auth_token.error_code
      ).addDetails(apiErrors.invalid_auth_token.description)
    );
  }
  // find the Auth object for token
  authHelper.verifyAuthToken(authToken, function(err, authenticationDetail) {
    if (err) {
      return next(err);
    } else {
      // save authentication info in request
      authenticationDetail['isAuthenticated'] = true;
      req.auth = authenticationDetail;
      return next();
    }
  });
};

/**
 * Check admin
 * @param req - express request.
 * @param res - express response.
 * @param next - express next.
 * @return {*}
 */
authUtils.verifyAdmin = function(req, res, next) {
  if (req.auth && req.auth.roleId >= 5) {
    return next();
  } else {
    return next(
      ApiException.newUnauthorizedError(
        apiErrors.no_resource_access.error_code
      ).addDetails(apiErrors.no_resource_access.description)
    );
  }
};
