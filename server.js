var express = require('express');
var oauth = require('oauth');
var util = require('util');
var twitter = require('twitter');

var app = express();

var twit = new twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
});

twit.get('/statuses/retweets/273795885580816384.json', {include_entities:true}, function(data) {
    console.log(util.inspect(data));
});


app.listen(parseInt(process.env.PORT || 80));