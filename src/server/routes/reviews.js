const Reviews = require('../../models/reviews')
const Albums = require('../../models/albums')
const methodOverride = require('method-override');

const router = require('express').Router()


router.post('/new/:id',(request, response) => {

    const review = request.body.body
    const userid = request.user[0].id
    const albumid = request.params.id

 Reviews.create(albumid, review, userid)

 .then(result => {

response.redirect('/')
 })
});

router.get('/:id',(request, response) => {
  // const albumId = req.params.id
   const id = request.params.id
  Promise.all([
     Albums.findById(id),
     Reviews.findAllByAlbumId(id)
  ])
  .then(results => {
    const albumName = results[0]
    const reviews = results[1]

  response.render('reviews',{albums:albumName, reviews:reviews, loggedIn: false})
  })
});

router.use((request, response, next) => {
  if (request.user) {
    response.locals.loggedin = true;
    next()
  } else {
    response.redirect('/auth2')
  }
})
router.get('/new/:id',(request,response) => {
  const id = request.params.id
  Albums.findById(id)
  .then(albumReview => {
    response.render('newReview',{albums:albumReview, loggedIn: true, user: id})
  })
});

router.put('/:id', (request, response) => {

});

router.get('/:id/delete',(request, response) => {
  const id = request.params.id;
    Reviews.destroy(id)
      .then(() => {
        response.redirect('profile');
      });
  });

module.exports = router;
