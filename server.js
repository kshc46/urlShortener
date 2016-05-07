'use strict';

var express = require('express'),
    mongo = require('mongodb').MongoClient,
    routes = require('./app/routes/index.js'),
    shortener = require('./app/controllers/shortener.js');
    
require('dotenv').config({
  silent: true
});    
var app = express();

mongo.connect(process.env.MONGOLAB_URI || 'mongodb://'+process.env.IP+':27017/shortenURL', function (err, db) {

    if (err) {
        throw new Error('Database failed to connect!');
    } else {
        console.log('MongoDB successfully connected on port 27017.');
    }
    
    app.use('/public', express.static(process.cwd() + '/public'));
    app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
    
    db.createCollection("urls", {
        capped: true,
        size: 5242880,
        max: 5000
    });
    
    routes(app, db);
    shortener(app, db);

    var port = Number(process.env.PORT || 8080);
    app.listen(port, function () {
        console.log('Listening on port' + port);
    });
    
});