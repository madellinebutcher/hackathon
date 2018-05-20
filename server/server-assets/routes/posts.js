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

router.get('/api/posts/:id', (req, res, next) => {
  Posts.findById(req.params.id)
    .then(posts => {
      res.status(200).send(posts)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.put('/api/posts/:id', (req, res, next) => {
  Posts.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    .then(post => {
      res.status(200).send({
        message: "Successfully Updated",
        post
      })
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.post('/api/posts', (req, res, next) => {
  var post = req.body
  Posts.create(post)
    .then(newPost => {
      res.status(200).send(newPost)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.delete('/api/posts/:id', (req, res, next) => {
  Posts.findByIdAndRemove(req.params.id)
    .then(data => {
      res.send("Successfully Removed")
    })
    .catch(err => {
      res.status(400).send(err)
    })
})


module.exports = {
  router
}