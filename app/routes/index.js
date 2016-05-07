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
        //res.send(shortener(URLarg, db));
        if (isNaN(URLarg)) {
            res.send(shortener(URLarg, db));
        } else {
            var findNum = Number(URLarg);
            var collection = db.collection('urls');
            collection.find({number: findNum}).toArray( function (err, result) {
                if (err) {
                    console.log(err);
                }
                console.log(result);
                if(result.length === 0){
                    res.send('This doesn\'t exist!');
                } else {
                    res.send(result[0].url);
                }
                
            });
        }
    });

};