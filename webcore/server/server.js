'use strict';

var express = require('express');
var app = express();
var chalk = require('chalk');
var config = require('./config/environment');
var mongoose = require('mongoose');
require('./config/express')(app);
require('./routes')(app);
mongoose.connect(config.mongo.uri, config.mongo.options);
var server = require('http').createServer(app);
server.listen(config.port, config.ip, function() {
	console.log(
		chalk.red('\nExpress server listening on port ') + chalk.yellow('%d') + chalk.red(', in ') + chalk.yellow('%s') + chalk.red(' mode.\n'),
		config.port,
		app.get('env')
	);
	if (config.env === 'development') {
		require('ripe').ready();
	}
});
module.exports = server;