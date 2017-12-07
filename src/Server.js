// require("babel-register");

const env = process.env.NODE_ENV || 'development';
const port = process.env.NODE_PORT || 1995;

const path = require('path');
const http = require('http');
const express = require('express');
const address = require('network-address');

let app = express();

app.set('port', port);
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.send('Hello!');
});

http.createServer(app).listen(app.get('port'), function () {
  console.info('Demo app is listening on "%s:%s" env="%s"', address(), app.get('port'), env);
});
