const path = require('path');

require('dotenv').config({
  path: path.resolve(__dirname, '../../.env')
});

module.exports = {
  development: {
    username: process.env.db_username,
    password: process.env.db_password,
    database: process.env.db_name,
    host: process.env.db_host,
    dialect: process.env.db_dialect
  },

  test: {
    username: process.env.db_username,
    password: process.env.db_password,
    database: process.env.db_name,
    host: process.env.db_host,
    dialect: process.env.db_dialect
  },

  production: {
    username: process.env.db_username,
    password: process.env.db_password,
    database: process.env.db_name,
    host: process.env.db_host,
    dialect: process.env.db_dialect
  }
};
