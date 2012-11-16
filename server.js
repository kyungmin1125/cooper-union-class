var express = require('express');
var sys = require('sys');
var oauth = require('oauth');
var util = require('util'),
var twitter = require('twitter');

var app = express();

var twit = new twitter({
    consumer_key: '0AryNjToIG2Alt7Sdc31gg',
    consumer_secret: '1xsJUvzU2MX75BMFEpq8MQRBxkgik57HiMG1CuQsUs',
    access_token_key: '1465161-zbfgSiTZmeRSCrgu28BTNZo9eEbSFq5ouhMSfNUD4g',
    access_token_secret: 'Y2RKVQ3wKONXBDuZofpCYmq0O2ALOwzkZjpqxghgs'
});

twit.get('/statuses/show/27593302936.json', {include_entities:true}, function(data) {
    console.log(util.inspect(data));
});


app.listen(parseInt(process.env.PORT || 80));