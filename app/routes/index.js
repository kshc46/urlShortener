'use strict';

var shortener = require(process.cwd() + '/app/controllers/shortener.js');

module.exports = function (app, db) {
    
    app.route('/')
        .get(function (req, res) {
            res.sendFile(process.cwd() + '/public/index.html');
        });
        
    //need something to check if argument is URL or shortened
    app.get('/:URLarg', function(req, res) {
        var URLarg = req.params.URLarg;
        res.send(shortener(URLarg, db));
    });

};