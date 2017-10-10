const db = require('./db/albums');


// additional functions which operate on `contacts` data will go here

module.exports = {
  findAll: db.findAll,
  findById: db.findById
}
