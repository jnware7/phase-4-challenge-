const Users = require('../../models/users')
const Reviews = require('../../models/reviews')
const Albums = require('../../models/albums')

const router = require('express').Router()

router.get('/:id',(request, response, next) => {
const  id = request.params.id

  Promise.all([
     Users.findById(id),
     Reviews.findAllByUserId(id)
  ])
  .then(results => {
    const userProfileInfo = results[0]
    const reviews = results[1]

    response.render('profile', { user:userProfileInfo, reviews: reviews, editing:false})
  })


})
router.get('/new',(request,response) => {

});

router.post('/',(request, response) => {

});

// router.get('/:id',(request, response) => {
//
// });

router.put('/:id', (request, response) => {

});

router.delete('/:id',(request, response) => {

});
module.exports = router;
