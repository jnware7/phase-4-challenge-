const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const app = express()
const methodOverride = require('method-override');
const routes = require('./server/routes');
const expressValidator = require('express-validator');
const passport = require('./auth/passport');
const {loggedIn} = require('./server/middlewares')
const session = require('express-session');
const cookieParser = require('cookie-parser')

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

app.use(express.static('public'))
app.use(session({
  secret:'black cat',
  resave: false,
  saveUninitialized: false,
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(expressValidator());
app.use(methodOverride('_method'))

app.locals.isLoggedIn = loggedIn;


app.use('/', routes)

const port = process.env.PORT || 3000

app.listen(port, () => {
 console.log(`http://localhost:${port}`)
})
