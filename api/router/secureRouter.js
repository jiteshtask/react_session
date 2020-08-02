var router = require('express').Router();

var contact = require('./contact');

router.use('/', contact);

module.exports = router;
