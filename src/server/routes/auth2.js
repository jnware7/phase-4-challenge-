const Reviews = require('../../models/reviews')
const Albums = require('../../models/albums')
const Users = require('../../models/users')

const passport = require('../../auth/passport')
const router = require('express').Router()
// const expressValidator = require('express-validator');


router.get('/new',(request,response) => {
  response.render('login')
});

router.post('/',(request, response, next) => {
  passport.authenticate('local', function (err, user, info) {
     if (err) { return next(err) }
     if (!user) { return res.render('login', {message: 'Invalid Username or Password'}) }
     request.logIn(user, function (err) {
       if (err) { return next(err) }
       return response.redirect(`/users/${user.id}`)
     })
   })(request, response, next)
 })


router.get('/:id',(request, response) => {

});

router.put('/:id', (request, response) => {

});

router.get('/:id/delete',(request, response) => {
  request.logout();
  response.redirect('/');
});

module.exports = router;
