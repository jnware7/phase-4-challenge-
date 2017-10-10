const router = require('express').Router();
const reviewsRoutes = require('./reviews')
const albumsRoutes = require('./albums')
const usersRoutes = require('./users')

router.get('/',(request, response, next) => {
  response.send('WELCOME TO HOME PAGE')
})

router.use('/reviews', reviewsRoutes);
router.use('/albums', albumsRoutes);
router.use('/users', usersRoutes);

module.exports = router;
