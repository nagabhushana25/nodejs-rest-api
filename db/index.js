const Pool = require('pg').Pool

require('dotenv').config()

const pool = new Pool({
  user:process.env.DB_USER,
  host:process.env.DB_HOST,
  database:process.env.DB_DATABASE,
  password:process.env.DB_PASS,
  port: 5432,
})

module.exports ={
  query:(text, params, callback) => {
    return pool.query(text, params, callback)
  },
}
