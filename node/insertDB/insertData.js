const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'test',
    port: '5432',
  
});

const tableName = 'extjs_practice';
const statuses = ['00', '02', '03', '05', '98', '99'];

function getRandomStatus() {
  return statuses[Math.floor(Math.random() * statuses.length)];
}

function getRandomDate() {
  const currentDate = new Date();
  const pastDate = new Date().setDate(currentDate.getDate() - Math.floor(Math.random() * 10));
  return new Date(pastDate);
}

async function db() {
    await pool.query(`
    CREATE TABLE IF NOT EXISTS "${tableName}" (
        DATE TIMESTAMP,
        TID TEXT,
        NADID TEXT,
        REQ_TYPE TEXT,
        SERVER TEXT,
        STATUS TEXT
    );
`);
    try {
        for (let i = 1; i <= 300; i++) { 
            let randomDate = getRandomDate();
            let randomStatus = getRandomStatus();
      
            console.log('Inserting with date and status:', randomDate, randomStatus);
      
            await pool.query(`
                INSERT INTO "${tableName}" (DATE, TID, NADID, REQ_TYPE, SERVER, STATUS)
                VALUES ($1, $2, $3, $4, $5, $6)`,
                [randomDate, `Tid ${i}`, `NADID ${i}`, `STREAM`, `SERVER -${i}`, randomStatus]
            );
          }
    } catch (error) {
        throw error;
    }
}
db()