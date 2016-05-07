'use strict';

function shortener(URLarg, db){
    var final = "Drats!";
    var collection = db.collection('urls');
        var insertFunction = function insertFunction() { 
            var insertNum = Math.floor(Math.random() * 10000);
            
            //Need to insert checks... is URL already in the database? Is insertNum already in the database?
            
            //if(collection.find({number: insertNum}) === null) {
                collection.insert({number: insertNum, url: URLarg})
                final = 'https://short-url-kshc46.c9users.io/' + insertNum;
                console.log("Number is ", insertNum);
            //} else {
            //    insertFunction();
            //}
        }
        insertFunction();

    return final;
}

module.exports = shortener;