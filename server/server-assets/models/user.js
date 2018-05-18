var mongoose = require('mongoose')
var Schema = mongoose.Schema
var schemaName = 'User'


var schema = new Schema({
  message: {type: String},
  user: {
    name: {type: String, required: true, unique: true},//required
    img: {type: String, required: true},//required
    userClass: {type: String, required: true},//required
    userRace: {type: String, required: true},//required
  }
})

module.exports = mongoose.model(schemaName, schema)