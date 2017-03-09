var express = require('express');
var router = express.Router();
var smsController= require('./sms-controller');

router.post('/send',smsController.sendSms)


module.exports = router;