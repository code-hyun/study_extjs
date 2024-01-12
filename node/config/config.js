const dbConn = {
    ccvr : {
        opr : {host : 'localhost' , port : '5432', db : 'stt', user : 'stt', password: 'stt'},
        dev : {host : 'localhost' , port : '5432', db : 'stt', user : 'stt', password: 'stt'},
        pre : {host : 'localhost' , port : '5432', db : 'stt', user : 'stt', password: 'stt'},
    },
    tts : {
        opr : {host : 'localhost' , port : '5432', db : 'tts', user : 'tts', password: 'tts'},
        dev : {host : 'localhost' , port : '5432', db : 'tts', user : 'tts', password: 'tts'},
        pre : {host : 'localhost' , port : '5432', db : 'tts', user : 'tts', password: 'tts'},
    }
}

module.exports = {
   dbConn
}