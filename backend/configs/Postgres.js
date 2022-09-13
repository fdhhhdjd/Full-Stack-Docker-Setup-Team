const Pool = require("pg").Pool;
require("dotenv").config();
const {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_DB,
  DB_POOL_SIZE,
  DB_POOL_CLIENT_IDLE_TIMEOUT,
  DB_POOL_CLIENT_CONNECTION_TIMEOUT,
} = process.env;
const pool = new Pool({
  user: POSTGRES_USER,
  host: POSTGRES_HOST,
  database: POSTGRES_DB,
  password: POSTGRES_PASSWORD,
  port: Number(POSTGRES_PORT),
  database: POSTGRES_DB,
  max: Number(DB_POOL_SIZE),
  idleTimeoutMillis: Number(DB_POOL_CLIENT_IDLE_TIMEOUT),
  connectionTimeoutMillis: Number(DB_POOL_CLIENT_CONNECTION_TIMEOUT),
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
