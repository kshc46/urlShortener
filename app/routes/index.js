'use strict';

var userInfo = require(process.cwd() + '/app/controllers/userInfo.js');

module.exports = function (app) {

    app.route('/')
        .get(function (req, res) {
            res.sendFile(process.cwd() + '/public/index.html');
        });
    
    app.get('/api/whoami', function(req, res) {
        var ip =  req.headers['x-forwarded-for'];
        var lang = req.headers["accept-language"].split(',')[0];
        var software = req.headers['user-agent'].match(/\((.*?)\)/)[1];
        res.send(userInfo(ip,lang,software));
    });

};