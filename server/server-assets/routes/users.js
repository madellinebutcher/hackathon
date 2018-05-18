var router = require('express').Router()
var Users = require('../models/user')

router.get('/api/users', (req, res, next) => {
  Users.find(req.query)
    .then(users => {
      res.status(200).send(users)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})
//find users
router.post('/api/login', (req, res, next) => {
  var user = req.body
  Users.find(user)
    .then(findUser => {
      res.status(200).send(findUser)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})
//create users
router.post('/api/create', (req, res, next) => {
  var user = req.body
  Users.create(user)
    .then(newUser => {
      res.status(200).send(newUser)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})



module.exports = {
  router
}