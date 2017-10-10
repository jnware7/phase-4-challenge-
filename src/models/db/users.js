const db = require('./db')

const create = function () {
  return db.query(`
    INSERT INTO
      reviews (id, username, password, email, user_image, logged)
    VALUES
      ($1,$2,$3,$4)
    RETURNING
      *
      `,
      [
        id,
        username,
        password,
        email,
        user_image,
        logged
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

const updateById = function(id, username, password, email, user_image, logged) {
  return db.one(`
    UPDATE
      users
    SET
      ( username, password, email, user_image, logged)
      =
      ($1, $2, $3, $4, $5)
    WHERE
      users.id =$1`,
    [
      id,
      username,
      password,
      email,
      user_image,
      logged
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
  updateById
}
