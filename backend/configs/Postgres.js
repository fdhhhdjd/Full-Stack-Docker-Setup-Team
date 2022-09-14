const Pool = require("pg").Pool;
require("dotenv").config();
const {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_DB,
  POSTGRES_DB_POOL_SIZE,
} = process.env;
const pool = new Pool({
  user: POSTGRES_USER,
  host: POSTGRES_HOST,
  database: POSTGRES_DB,
  password: POSTGRES_PASSWORD,
  port: POSTGRES_PORT,
  max: POSTGRES_DB_POOL_SIZE,
});
pool.connect();
pool.query(`Select * from users`, (err, res) => {
  if (!err) {
    console.log("Connect Pg-Postgres Success");
  } else {
    console.log("Connect Pg-Postgres Fail");
  }
  pool.end();
});

module.exports = pool;
