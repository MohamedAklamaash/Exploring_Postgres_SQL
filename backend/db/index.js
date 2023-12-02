const { Pool } = require("pg");

const pool = new Pool({
  user: `postgres`,
  password: `akla123%`,
  database: `yelp`,
  port: process.env.PGPORT,
  host: `localhost`,
});

module.exports = { query: (text, params) => pool.query(text,params) };
