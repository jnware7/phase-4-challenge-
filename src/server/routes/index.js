const router = require('express').Router();
const reviewsRoutes = require('./reviews')
const albumsRoutes = require('./albums')
const usersRoutes = require('./users')
const authRoutes = require('./auth')
const auth2Routes = require('./auth2')
const {loggedIn} = require('../middlewares')

const Albums = require('../../models/albums')
const Reviews = require('../../models/reviews')

router.get('/', (request, response, next) => {

  Promise.all([
     Albums.findAll(),
     Reviews.findAll()
  ])
  .then(results => {
    const allAlbums = results[0]
    const recentReviews = results[1]

    response.render('home', {
          albums: allAlbums,
          reviews: recentReviews
        })
      }).catch(err => {
        console.error(err)
      })
    })
router.use('/reviews', reviewsRoutes);
router.use('/albums', albumsRoutes);
router.use('/auth', authRoutes);
router.use('/auth2', auth2Routes);

router.use((request, response, next) => {
  if (request.user) {
    next()
  } else {
    response.redirect('/')
  }
})

router.get('/delete',(request, response) => {
  request.logout();
  response.redirect('/');
});
router.use('/users', usersRoutes);

module.exports = router;
