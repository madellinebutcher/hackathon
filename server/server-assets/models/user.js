var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId
var schemaName = 'User'


var schema = new Schema({
    name: {type: String, required: true, unique: true, minlength: 3, maxlength: 10},//required
    img: {type: String, required: false},//required
    userClass: {type: String, required: false},//required
    userRace: {type: String, required: false},//required,
    favorites: [{ type : ObjectId, ref: 'Post' }]
})

module.exports = mongoose.model(schemaName, schema)