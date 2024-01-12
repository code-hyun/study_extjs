const { Pool } = require('pg');
const { dbConn } = require('../config/config');
const {selectLog, selectCount, checkDB} = require('./queryProcessing')
const {utcToKst, getCount, dataProcessing, setDate, formmatTime} = require('./service')



async function select(jsonData) {
    date = setDate(jsonData.date);
    const sessiontable = `tb_session_log_${date}`;
    const tracetable = `tb_trace_log_${date}`;
   
    let dbConfig = checkDB(jsonData)
    console.log(dbConfig)
    const pool = new Pool( dbConfig)

    let conditions;
    let params;

    conditions = dataProcessing(jsonData).conditions
    params = dataProcessing(jsonData).params
    console.log(conditions, params)


    const clause = conditions.length ? `WHERE ${conditions.join(' AND ')}`: '';
    console.log(clause)
   
    let query = selectLog(jsonData, sessiontable, tracetable, clause);
    let countQuery = selectCount(jsonData, sessiontable, tracetable, clause);

    try {
        // query Data
        let data = await pool.query(query, params);
        // count Data
        let countData = await pool.query(countQuery, params);
        // total count
        const totalCount = data.rowCount;
        let counts = getCount(countData);

        // data = utcToKst(data)

        data.rows.forEach((v, i) => {
            v.result_data = JSON.stringify(v.result_data);
            v.st_time = formmatTime(v.st_time);
        })
        // console.log(data.rows)

        let returnSelect;
        if(jsonData.onlyStatus === 'statusBt'){
            returnSelect = {
                totalCount: totalCount,
                counts: counts
                
            };
        }else{
            returnSelect = {
                data: data.rows,
                totalCount: totalCount,
                counts: counts
                
            };
        }

        return returnSelect
        
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    select
};

