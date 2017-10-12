const Reviews = require('../../models/reviews')
const Albums = require('../../models/albums')
const methodOverride = require('method-override');

const router = require('express').Router()


router.post('/',(request, response) => {

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

  response.render('reviews',{albums:albumName, reviews:reviews})
  })
});

router.use((request, response, next) => {
  if (request.user) {
    response.locals.loggedin = true;
    next()
  } else {
    response.redirect('/')
  }
})
router.get('/new/:id',(request,response) => {
  const id = request.params.id
  Albums.findById(id)
  .then(albumReview => {
    response.render('newReview',{albums:albumReview})
  })
});

router.put('/:id', (request, response) => {

});

router.delete('/:id/delete',(request, response) => {
  const id = request.params.id;
    Reviews.destroy(id)
      .then(() => {
        response.render('profile');
      });
  });

module.exports = router;
