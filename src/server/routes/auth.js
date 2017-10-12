const Reviews = require('../../models/reviews')
const Albums = require('../../models/albums')
const Users = require('../../models/users')

const passport = require('../../auth/passport')
const router = require('express').Router()
// const expressValidator = require('express-validator');


router.get('/new',(request,response) => {
  response.render('signup', {loggedIn: false})
});

router.post('/',(request, response, next) => {
 const username = request.body.username;
 const password = request.body.password;
 const email = request.body.email;
 console.log({username, password, email})
 Users.create(username, password, email)

 .then( user => {
   passport.authenticate('local', function (err, user, info) {

      if (err) { return next(err) }
      if (!user) { return request.render('signup', {message: 'Invalid Username or Password'}) }
      if (user.name === 'error') { return request.render('signup', {message: 'User already exists'}) }
      request.logIn(user, function (err) {
        if (err) { return next(err)
         }
        return response.redirect(`/users/${user.id}`)
      })
    })(request, response, next)
  })
})


router.get('/:id',(request, response) => {

});

router.put('/:id', (request, response) => {

});

router.delete('/:id',(request, response) => {

});

module.exports = router;
