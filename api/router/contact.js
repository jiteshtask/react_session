var router = require('express').Router();
var contactController = require('../controller/index').contact;

router.get('/contact', contactController.getContact);
router.post('/contact', contactController.addContact);
router.put('/contact', contactController.updateContact);


module.exports = router;
