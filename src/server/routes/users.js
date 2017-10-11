const Users = require('../../models/users')
const Reviews = require('../../models/reviews')
const Albums = require('../../models/albums')

const router = require('express').Router()

router.get('/',(request, response, next) => {
  // id = request.user.id
  Promise.all([
     Users.findById(1)//example remove
     Reviews.findAllByUserId(1)//example remove
  ])
  .then(results => {
    const userProfileInfo = results[0]
    const reviews = results[1]

    response.json(results)
  })


})
router.get('/new',(request,response) => {

});

router.post('/',(request, response) => {

});

router.get('/:id',(request, response) => {

});

router.put('/:id', (request, response) => {

});

router.delete('/:id',(request, response) => {

});
module.exports = router;
