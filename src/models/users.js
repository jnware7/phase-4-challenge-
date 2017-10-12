const db = require('./db/users');


// additional functions which operate on `contacts` data will go here

module.exports = {
  create: db.create,
  findAll: db.findAll,
  findById: db.findById,
  findByEmail: db.findByEmail,
  updateById: db.updateById
}
