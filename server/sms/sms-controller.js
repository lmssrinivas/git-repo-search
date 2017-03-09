
var Nexmo = require('nexmo');
var nexmo = new Nexmo({
    apiKey:'094f6098',
    apiSecret:'518c488849b67048'
},{debug:true});

var textbeltKey ='971d6140104290dd656e27bae4ca72058674a728OQQNeDXJQ3x3E9bYabCFdRie5';

var NUMBER ='18312002565';
module.exports.sendSms = function(req,res,next){

    nexmo.message.sendSms(NUMBER,'req.body.data.number',req.body.data.message,{type:'unicode'},function(err,response){
        if(err){
            res.send(err);
        }else{
           res.send(response);   
        }

    })
    

}