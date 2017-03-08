/**
 * Created by mlingolu on 2/26/17.
 */

var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser')
var path = require('path');
var port = process.env.PORT || 3000;
var app = express();

app.use(express.static(path.join(__dirname,'public')));

app.set('views',path.join(__dirname,'public'));
app.set('views engine','html');

app.engine('html',ejs.renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))
app.listen(port,function (req,res) {
    console.log('request received');
})

app.use('/',function(req,res,next){
    res.render('index.html');
    next();
})