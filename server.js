/**
 * Created by mlingolu on 2/26/17.
 */

var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname,'public')))

app.listen(3000,function (req,res) {
    console.log('request received');
})