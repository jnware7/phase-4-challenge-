const loggedIn = (request, response, next) => {
  if (!request.user) {

    next()
  }
  else{
    response.locals.id = request.user.id
    response.locals.loggedIn = true
    next()
  }
}
module.exports = {loggedIn}
