var router = require('express').Router()
var Posts = require('../models/post')

router.get('/api/posts', (req, res, next) => {
  Posts.find(req.query)
    .then(posts => {
      res.status(200).send(posts)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})


module.exports = {
  router
}