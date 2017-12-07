'use strict';

// require("babel-register");

var env = process.env.NODE_ENV || 'development';
var port = process.env.NODE_PORT || 1995;

var path = require('path');
var http = require('http');
var express = require('express');
var address = require('network-address');

var app = express();

app.set('port', port);
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function (req, res) {
  res.send('Hello!');
});

http.createServer(app).listen(app.get('port'), function () {
  console.info('Demo app is listening on "%s:%s" env="%s"', address(), app.get('port'), env);
});