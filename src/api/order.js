const { pool } = require('../database/db.js')


async function FetchOrder(){
    try{
        const rows = await pool.query("SELECT * FROM product WHERE id = ?", [id]);
        console.log("here ti is ",rows[0])
        return rows[0]
    }
    catch{
        console.log(error)
    }
}

async function InputOrder(){
    try{
        const rows = await pool.query("SELECT * FROM product WHERE id = ?", [id]);
        console.log("here ti is ",rows[0])
        return rows[0]
    }
    catch{
        console.log(error)
    }
}