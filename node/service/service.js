
    /*  형식
        {
            00 : count,
            02 : count,
            03 : count,
            05 : count,
            98 : count,
            99 : count
        }
    */
function getCount(countData){
    let counts ={};
    for(let i = 0; i<countData.rowCount; i++){
        let status = countData.rows[i].res_status;
        let count = countData.rows[i].count;
        counts[status] = count;
    }
    return counts;

}

function utcToKst(data){
    data.rows.forEach(v => {
            // 9시간 차이 수정
            let kstDate = new Date(v.date.getTime() + (9 * 60 * 60 * 1000));
            // ISO 형식
            v.date = kstDate.toISOString().replace('Z', '+09:00');
    });
    return data;
}

function dataProcessing(jsonData){
    // WHERE 조건에 들어갈 값
    const conditions = [];
    // WHERE 조건에 들어갈 파라미터
    const params = [];

    if(jsonData.date){
        let datePart = jsonData.date.split('T')[0]; // yyyy-mm-dd
        console.log()
        let datePartSplit = datePart.split('-').join('');
        let fromTime; // 시작시간
        let toTime; // 끝 시간
        if(!jsonData.fromTime && !jsonData.toTime){ // 시간 정보가 안왔다면
            // 00:00 ~ 23:59 으로 지정
            fromTime = `${datePartSplit}000000`; 
            toTime = `${datePartSplit}235959`;
        }else{
            // yyyy-mm-dd HH:mm 00.000 형식으로 조정
            fromTime = `${datePartSplit}${jsonData.fromTime.split(':').join('')}00`
            toTime = `${datePartSplit}${jsonData.toTime.split(':').join('')}59`
        }
        console.log(fromTime, toTime)
        conditions.push(`a.st_time >= $${params.length + 1}`)
        params.push(fromTime);
        conditions.push(`a.st_time <= $${params.length + 1}`)
        params.push(toTime);
    }

    if(jsonData.status){
        if(jsonData.requireType == 'TTS'){
            conditions.push(`b.res_status = $${params.length+1}`)
        }else{
            conditions.push(`a.res_status = $${params.length+1}`)
        }
        params.push(jsonData.status)
    }
    if(jsonData.tid){
        conditions.push(`a.tid = $${params.length+1}`)
        params.push(jsonData.tid)
    }
    if(jsonData.requireType){
        conditions.push(`a.req_type = $${params.length+1}`)
        params.push(jsonData.requireType)
    }
    if(jsonData.header){
        conditions.push(`b.result_data -> 'request' -> 'header' ->> '${jsonData.header}' LIKE '%' || $${params.length+1} || '%' `);
        params.push(jsonData.header_text)
    }

    console.log(conditions) // [value1 = $1 , value2 = $2, value3 = $3 ...] 
    console.log(params) // [value1, value2, value3 ...]

    return {conditions : conditions, params : params}
}

function formmatTime(time){
    let formatTime = time.substring(0,4) + "-"
             + time.substring(4,6) + "-"
             + time.substring(6,8) +" " 
             + time.substring(8, 10) + ":"
             + time.substring(10, 12) + ":"
             + time.substring(12, 14);
    return formatTime;
}
function setDate(date){
    let currentDate = new Date(date)
    let year = currentDate.getFullYear();
    let month = String(currentDate.getMonth() + 1).padStart(2, '0');
    let day = String(currentDate.getDate()).padStart(2, '0');
    return year + month + day;
}

module.exports = {
    utcToKst, getCount, dataProcessing, formmatTime, setDate
}