'use strict';

function shortener(URLarg, db){
    
    var collection = db.collection('urls');
    if (isNaN(URLarg)) {
        var insertFunction = function() { 
            var insertNum = Math.floor(Math.random() * 10000);
            console.log('Made it there');
            if(collection.find({number: insertNum}) === null) {
                collection.insert({number: insertNum, url: URLarg})
                return 'https://short-url-kshc46.c9users.io/' + toString(insertNum);
            } else {
                insertFunction();
            }
        }
    } else {
        var address = collection.find({number: URLarg}).url;
        console.log('Made it here');
        return address;
    }
}

module.exports = shortener;