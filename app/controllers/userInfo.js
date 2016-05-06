'use strict';

function userInfo(ip,lang,software){
    
    var data = JSON.stringify({'IP Address': ip, 'user_language': lang, 'OS': software });
    return data;
}

module.exports = userInfo;