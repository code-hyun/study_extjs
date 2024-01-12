const { dbConn } = require('../config/config');

function checkDB(jsonData){
    let dbConfig;    
    if(jsonData.requireType == 'STREAM'){
        console.log(dbConn.ccvr.opr)
        if(jsonData.clickedButtonId == 'opr'){
            dbConfig = dbConn.ccvr.opr
        }else if(jsonData.clickedButtonId == 'pre'){
            dbConfig = dbConn.ccvr.pre
        }else{
            dbConfig = dbConn.ccvr.dev
        }

    }else if(jsonData.requireType == 'TTS'){
        if(jsonData.clickedButtonId == 'opr'){
            console.log(`${jsonData.clickedButtonId}`)
            console.log(`${jsonData.require_type}`)
            dbConfig = dbConn.tts.opr
        }else if(jsonData.clickedButtonId === 'pre'){
            dbConfig = dbConn.tts.pre
        }else{
            dbConfig = dbConn.tts.dev
        }
    }else {
        console.error('error')
    }
    return dbConfig;
}

function selectLog(jsonData, sessiontable, tracetable, clause){
    let query
    if(jsonData.requireType == 'STREAM'){
        query = `SELECT a.*, b.result_data FROM ${sessiontable} a join ${tracetable} b on a.tid = b.tid ${clause} order by a.st_time asc`
    }else{
        query = `SELECT a.st_time, a.tid, a.nadid, a.req_type, a.host_name, a.asr_conn_cnt ,b.res_status, a.work_time, b.result_data FROM ${sessiontable} a join ${tracetable} b on a.tid = b.tid ${clause} order by a.st_time asc`
    }
    return query;
}
function selectCount(jsonData, sessiontable, tracetable, clause){
    let countQuery
    if(jsonData.requireType == 'STREAM'){
        countQuery = `SELECT a.res_status, COUNT(*) FROM ${sessiontable} a join ${tracetable} b on a.tid = b.tid ${clause} GROUP BY a.res_status`
    }else{
        countQuery = `SELECT b.res_status, COUNT(*) FROM ${sessiontable} a join ${tracetable} b on a.tid = b.tid ${clause} GROUP BY b.res_status`
    }
    return countQuery;
}

module.exports = {
    checkDB, selectLog, selectCount
}