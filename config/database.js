const database = require('../knexfile.js')[process.env.NODE_ENV || 'development'];
const knex = require('knex')(database);
module.exports = knex;
