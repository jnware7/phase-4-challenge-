const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt');
const User = require('../models/users');

passport.use('local', new LocalStrategy({
  usernameField:'email'
},
(email, password, done)=> {
  User.findByEmail(email)
  .then(user => {
    if(!user) {done(null, false)}
    bcrypt.compare(password, user.password,(error, result) => {
        if (error) {
          return done(error)
        }
        if (!result) {
          return done(null, false)
        }
        return done(null, user)
      })
    })
    .catch(error => {
      return done(null, false, { message: 'Incorrect useremail.' })
    })
  })
)
//      .then(result => {
//        (result) ? done(null, user) : done(null, false)
//      })
//      .catch(error => done(error))
//   })
//   .catch(error => done(error))
// }))

passport.serializeUser((user,done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user))
    .catch(error => done(error))
})

module.exports = passport
