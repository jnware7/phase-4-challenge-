const db = require('./db/reviews');


// additional functions which operate on `contacts` data will go here

module.exports = {
  create: db.create,
  findAll: db.findAll,
  findById: db.findById,
  updateById: db.updateById,
  findAllByAlbumId: db.findAllByAlbumId,
  findAllByUserId:db.findAllByUserId,
  updateByEmail:db.updateByEmail, //Please cheat oath for email mistake
  destroy: db.destroy,
}
