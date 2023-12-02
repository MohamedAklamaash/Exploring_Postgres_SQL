const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.PGUSER,
  password: `${process.env.PGPASSWORD}`,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
  host: process.env.PGHOST,
});

(async () => {
  const client = await pool.connect();
  try {
    const { rows } = await client.query("SELECT CURRENT_TIMESTAMP");
    console.log(rows[0]);
    console.log(rows);
  } catch (error) {
    console.log("error while trying to connect");
  } finally {
    client.release();
  }
})();


module.exports = { query: (text, params) => pool.query(text, params) };
