const mysql = require('mysql2');

const poll = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node-complete',
  password: 'raiven16',
  port: 3306
});

module.exports = poll.promise();