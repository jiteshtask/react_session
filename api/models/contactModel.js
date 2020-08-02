var responseModel = require('../assets/responseModel');
var responseMessage = require('../assets/responseMessage');
var Response = require('../db_models/response');
var Contact = require('../db_models/contact');
var Check = require('../libs/core/Check');
var appUtils = require('../libs/appUtils');
var Mongoose = require('mongoose');
var commonService = require('../services/common.services');
var Async = require('async');
let contact = {};
module.exports = contact;

/**
 * admin workspace
 * @param {object} req (express request object)
 * @param {(Error,object)} callback - callback function.
 */
contact.getContact = (req, callback) => {
  Async.waterfall([
    cb => {
      const _contact = new Contact();
      const condition = {};
      const skipObj = {};
      const projection = {}
      commonService.Fetch(_contact, condition, projection, skipObj, cb);
    },
  ],
    (err, data) => {
      if (err) {
        return callback(err);
      }
      let res = new responseModel.arrayResponse();
      res.message = responseMessage.GET_CONTACT;
      res.data = data;
      return callback(null, new Response(res));
    })
};

/**
 * admin workspace
 * @param {object} req (express request object)
 * @param {(Error,object)} callback - callback function.
 */
contact.updateContact = (request, callback) => {
  let rules = {
    name: Check.that((request.body.name)).isStringType().isOptional(),
    email: Check.that((request.body.email)).isStringType().isOptional(),
    mobile: Check.that((request.body.mobile)).isStringType().isOptional()
  }

  Async.waterfall([
    cb => {
      appUtils.validateChecks(rules, cb);
    },
    cb => {

      const _contact = new Contact();
      const condition = {
        _id: Mongoose.Types.ObjectId(request.body._id)
      };
      let updatedValues = {
        name, email, mobile
      } = request.body
      commonService.findOneAndUpdate(_contact, condition, updatedValues, (err, doc) => {
        if (err) {
          return cb(err);
        }
        return cb(null, doc);
      });
    }

  ],
    (err) => {
      if (err) {
         return callback(err);
      }
      let res = new responseModel.arrayResponse();
      res.message = responseMessage.CONTACT_UPDATED;
      return callback(null, new Response(res));
    })
}

/**
 * admin workspace
 * @param {object} req (express request object)
 * @param {(Error,object)} callback - callback function.
 */
contact.addContact = (request, callback) => {
  let rules = {
    name: Check.that(request.body.name).isStringType(),
    email: Check.that(request.body.email).isEmail(),
    mobile: Check.that(request.body.mobile).isMobileNumber()
  }

  Async.waterfall([
    cb => {
      appUtils.validateChecks(rules, cb);
    },
    cb => {
      const _contact = new Contact();
      const contactData = sanitizeDataForSignUp(request.body);
      commonService.Insert(_contact, contactData, cb);
    },
  ],
    (err) => {
      if (err) {
        return callback(err);
      }
      let res = new responseModel.arrayResponse();
      res.message = responseMessage.CONTACT_ADDED;
      return callback(null, new Response(res));
    })
}

const sanitizeDataForSignUp = data => {
  let insertObject = [];
  insertObject.push({
    name: data.name,
    email: data.email,
    mobile: data.mobile
  })
  return insertObject;
}