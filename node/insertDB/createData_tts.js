const { Pool } = require('pg');


const pool = new Pool({
    user: 'tts',
    host: 'localhost',
    database: 'tts',
    password: 'tts',
    port: '5432',
  
});

for(let i = 0; i < 10; i++){
    pool.query(`
    CREATE TABLE IF NOT EXISTS "tb_session_log_${setDate(i).table}" (
        tid character varying,
        nadid character varying,
        req_type character varying,
        res_status character varying,
        result_data jsonb,
        st_time character varying,
        ed_time character varying,
        work_time integer,
        host_name character varying,
        voice_file bytea,
        asr_conn_cnt integer
    );
    `);
    
    pool.query(`
    CREATE TABLE IF NOT EXISTS "tb_trace_log_${setDate(i).table}" (
        tid character varying,
        seq integer,
        source character varying,
        target character varying,
        result_data jsonb,
        res_status  character varying,
        update_time character varying
    );
    `);
}

async function createData(){
    for(let i =0; i < 10; i++){
        for(let j=0; j<30; j++){
            let tableName = setDate(i).table
            let formattedDate = setDate(i).formattedDate
            let tid = createTid()
            let nadid = createNadid();
           
            await pool.query(`
                        INSERT INTO "tb_session_log_${tableName}" (tid, nadid, req_type, res_status, result_data, st_time, ed_time, work_time, host_name, voice_file, asr_conn_cnt)
                        VALUES ($1, $2, $3, $4, $5, $6,$7, $8, $9, $10, $11)`,
                        [tid, nadid, `TTS`, createStatus().session_status, resultData().sessionlog_result, formattedDate, formattedDate, createWorkTime(), createServer(),'test', '0']
                    );
        
            await pool.query(`
            INSERT INTO "tb_trace_log_${tableName}" (tid, seq, source, target, result_data, res_status, update_time)
            VALUES ($1, $2, $3, $4, $5, $6, $7)`,
            [tid, Math.floor(Math.random()*3)+1, createSource(), createTarget(), resultData().tracelog_result, createStatus().trace_status, formattedDate]
            );
        }
    }
}


createData()

function setDate(test) {
    let currentDate = new Date();

    // 날짜만 설정
    currentDate.setDate(currentDate.getDate() - test);

    let year = currentDate.getFullYear();
    let month = String(currentDate.getMonth() + 1).padStart(2, '0');
    let day = String(currentDate.getDate()).padStart(2, '0');

    // 시간, 분, 초, 밀리초를 랜덤으로 생성
    let hours = String(Math.floor(Math.random() * 24)).padStart(2, '0'); // 0-23 사이
    let minutes = String(Math.floor(Math.random() * 60)).padStart(2, '0'); // 0-59 사이
    let seconds = String(Math.floor(Math.random() * 60)).padStart(2, '0'); // 0-59 사이
    // let milliseconds = String(Math.floor(Math.random() * 1000)).padStart(3, '0'); // 0-999 사이

    let formattedDate = year + month + day + hours + minutes + seconds /* + milliseconds */;
    let table = year+month+day;
    return {formattedDate : formattedDate, table : table}
}

// console.log(setDate(1).formattedDate, setDate(1).table)

function resultData(){
    let sessionlog_result = {
        "type" : 'mp3',
        "length" : 30092,
        "ttsByte" : "...",
        "ttsText" : "이 장소로 안내할까요?",
        "engineResultCode" : 1
    }

    let tracelog_result = {
    
        "request": {
            "body": {
                "mode": "text",
                "codec": "mp3",
                "volume": 100,
                "ttsText": "목적지를 말씀하세요.",
                "codeKind": "6"
            },
            "header": {
                "to": "HVR",
                "snr": "167",
                "tid": "Ntsxf5PKT6y7YqE9Ubso-w@v3",
                "vin": "KMJPTEST023071802",
                "date": "Tue, 07 Nov 2023 19:06:12 GMT",
                "from": "TMU",
                "host": "127.0.0.1:3000",
                "brand": "G",
                "nadid": "01242676095",
                "driver": "0",
                "offset": "9",
                "userid": "8982301022000054578F",
                "network": "4",
                "telecom": "KT",
                "version": "1.921.7.3",
                "language": "3",
                "platform": "ccIC",
                "voicetype": "HyundaiW",
                "avn-update": "202310",
                "connection": "close",
                "vehiclename": "RS4",
                "x-dynatrace": "",
                "content-type": "application/json",
                "signalstrengh": "-107",
                "content-length": "99",
                "accept-encoding": "deflate, gzip",
                "x-forwarded-for": "172.24.128.49:33998, 172.24.128.49",
                "prosodyvolumelevel": "medium",
                "userprofile-verion": "202311"
            }
        },
        "response": {
        "body": {
            "msg": "OK",
            "result": {
            "type": "mp3",
            "length": 29256,
            "ttsByte": "...",
            "ttsText": "목적지를 말씀하세요.",
            "engineResultCode": 1
            },
            "status": "00"
            }
        }
        
}
    return {sessionlog_result: sessionlog_result, tracelog_result: tracelog_result} ;
}

function createWorkTime(){
    let work_time = '';
    for(let i = 0; i<5; i++){
        work_time += Math.floor(Math.random()*10)
    }
    return work_time;
}
function createSource(){
    let source = 'HU';
    return source;
}
function createTarget(){
    let target = 'serviceHandler';
    return target;
}
function createTid() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let tid = '';
    for (let i = 0; i < 13; i++) {
        tid += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return tid;
}
function createNadid(){
    let nadid = '01234';
    for(let i = 0; i < 7; i++){
        nadid += Math.floor(Math.random() * 10); // 0에서 9 사이의 정수를 생성
    }
    return nadid;
}

function createStatus(){
    let session_status = 1;
    let trace_status = ['0', '30', '60'];
    let traceIndex = Math.floor(Math.random() * trace_status.length);

    return {session_status: session_status, trace_status: trace_status[traceIndex]};
}

function createServer(){
    let server = 'ccskccvrasrs'
    return server + String(Math.floor(Math.random()*42 +1) + ".krcloud");
}