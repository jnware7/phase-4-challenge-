const db = require('./db')

const create = function (username, password, email) {
  return db.query(`
    INSERT INTO
      users ( username, password, email)
    VALUES
      ($1,$2,$3)
    RETURNING
      *
      `,
      [
        username,
        password,
        email
      ])
      .catch(error =>{
        console.error({message:'Error occured while executing users.create',
                       arguments: arguments});
      throw error});
}


const findAll = function () {
  return db.query(`
    SELECT
      *
    FROM
      users
    ` ,[])
    .catch(error =>{
      console.error({message:'Error occured while executing users.findAll',
                     arguments: arguments});
    throw error});
}

const findById = function (id) {
  return db.any(`
    SELECT
      *
    FROM
      users
    WHERE
      id =$1`,
    [id])
    .catch(error =>{
      console.error({message:'Error occured while executing users.findById',
                     arguments: arguments});
    throw error});
}
const findByEmail = function (email) {
  return db.any(`
    SELECT
      *
    FROM
      reviews
    WHERE
      email =$1`,
    [email])
    .catch(error =>{
      console.error({message:'Error occured while executing reviews.findByEmail',
                     arguments: arguments});
    throw error});
}
const updateById = function(id, username, password, email, user_image) {
  return db.one(`
    UPDATE
      users
    SET
      ( username, password, email, user_image)
      =
      ($1, $2, $3, $4)
    WHERE
      users.id =$1`,
    [
      id,
      username,
      password,
      email,
      user_image
    ])
      .catch(error =>{
        console.error({message:'Error occured while executing users.findById',
                       arguments: arguments});
      throw error});
}



module.exports = {
  create,
  findAll,
  findById,
  findByEmail,
  updateById
}
