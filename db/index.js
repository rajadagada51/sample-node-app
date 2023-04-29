const { Pool } = require('pg');

// Configure the database connection
const pool = new Pool({
  user: 'your_username',
  host: 'your_host',
  database: 'your_database_name',
  password: 'your_password',
  port: 5432, // Default PostgreSQL port is 5432
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

