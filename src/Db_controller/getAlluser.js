const {pool} = require('../database/db')

async function getUser(id) {
    const rows = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
    console.log("here ti is ",rows[0])
    return rows[0];
  }

module.exports = { getUser };

