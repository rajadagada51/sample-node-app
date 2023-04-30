const { Pool } = require('pg');

// Configure the database connection
const pool = new Pool({
  user: 'username',
  host: 'host',
  database: 'db_name',
  password: 'password',
  port: 5432,
});

// Fetch items from the database
async function getItems() {
  const query = 'SELECT * FROM items';
  const { rows } = await pool.query(query);
  return rows;
}

module.exports = {
  getItems,
};

