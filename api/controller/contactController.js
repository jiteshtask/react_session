var contactModel = require('../models/contactModel');

/**
 * Get Vector List
 * @request_type- GET
 * @url- /dashboard
 * @param {Object} req - express request.
 * @param {Object} res - express response.
 * @param {function} next - next middleware callback.
 */

exports.getContact = function(req, res, next) {
  contactModel.getContact(req, function(err, result) {
    if (err) {
      return next(err);
    } else {
      res.json(result);
    }
  });
};

/**
 * add contact
 * @request_type- POST
 * @url- /contact
 * @param {Object} req - express request.
 * @param {Object} res - express response.
 * @param {function} next - next middleware callback.
 */

exports.addContact = function(req, res, next) {
  contactModel.addContact(req, function(err, result) {
    if (err) {
      return next(err);
    } else {
      res.json(result);
    }
  });
};

/**
 * update contact
 * @request_type- PUT
 * @url- /contact
 * @param {Object} req - express request.
 * @param {Object} res - express response.
 * @param {function} next - next middleware callback.
 */

exports.updateContact = function(req, res, next) {
  contactModel.updateContact(req, function(err, result) {
    if (err) {
      return next(err);
    } else {
      res.json(result);
    }
  });
};
