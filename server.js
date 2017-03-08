/**
 * Created by mlingolu on 2/26/17.
 */

var express = require('express');
var path = require('path');
var port = process.env.PORT || 3000;
var app = express();

app.use(express.static(path.join(__dirname,'public')))

app.listen(port,function (req,res) {
    console.log('request received');
})
