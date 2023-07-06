const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'followme',
    database:'application_db'
}).promise()

async function getUser(user) {
    const rows = await pool.query("SELECT * FROM users WHERE username = ?", [user]);
    // console.log(rows[0],"hj")
    return rows[0];
  }

// const a = await getUser('rama')
// console.log(a)
module.exports = { pool };

