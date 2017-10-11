const router = require('express').Router();
const reviewsRoutes = require('./reviews')
const albumsRoutes = require('./albums')
const usersRoutes = require('./users')

const Albums = require('../../models/albums')
const Reviews = require('../../models/reviews')

router.get('/',(request, response, next) => {
  Promise.all([
     Albums.findAll(),
     Reviews.findAll()
  ])
  .then(results => {
    const allAlbums = results[0]
    const recentReviews = results[1]

    response.json(results)
  })


})

router.use('/reviews', reviewsRoutes);
router.use('/albums', albumsRoutes);
router.use('/users', usersRoutes);

module.exports = router;
