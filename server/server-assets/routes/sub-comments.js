var router = require('express').Router()
var SubComments = require('../models/sub-comment')

router.get('/api/sub-comments', (req, res, next) => {
  SubComments.find(req.query)
    .then(subComments => {
      res.status(200).send(subComments)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.put('/api/sub-comments/:id', (req, res, next) => {
  SubComments.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    .then(subComment => {
      res.status(200).send({
        message: "Successfully Updated",
        subComment
      })
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.post('/api/sub-comments', (req, res, next) => {
  var subComment = req.body
  SubComments.create(subComment)
    .then(newComment => {
      res.status(200).send(newComment)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.delete('/api/sub-comments/:id', (req, res, next) => {
  SubComments.findByIdAndRemove(req.params.id)
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