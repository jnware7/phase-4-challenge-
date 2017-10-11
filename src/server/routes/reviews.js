const Reviews = require('../../models/reviews')
const Albums = require('../../models/albums')

const router = require('express').Router()


router.get('/new',(request,response) => {

});

router.post('/',(request, response) => {

});

router.get('/:id',(request, response) => {
  // const albumId = req.params.id
   id = request.params.id
  Promise.all([
     Albums.findById(id),
     Reviews.findAllByAlbumId(id)
  ])
  .then(results => {
    const albumName = results[0]
    const reviews = results[1]

    response.json(results)
  })
});

router.put('/:id', (request, response) => {

});

router.delete('/:id',(request, response) => {

});

module.exports = router;
