const { pool } = require('../database/db.js')
const {getUser} = require('../Db_controller/getAlluser.js')

async function CreateUser(user, password, email) {
    const [rows] = await pool.query("INSERT INTO users (username, password, email) VALUES(?,?,?)", [user, password, email]);
    const id = rows.insertId
    return getUser(id)
  }


// const a = CreateUser('ramaaaa','janaki-is_her', 'ram@ramayan.com.np')
module.exports = {CreateUser}