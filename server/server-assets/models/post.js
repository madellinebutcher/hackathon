var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId
var schemaName = 'Post'


var schema = new Schema({
    title: {type: String, required: true},//required
    body: {type: String, required: true},//required
    img: {type: String},
    userUpVotes: [{type: String}],
    userDownVotes: [{type: String}],
    //relationship
    userId: {
      type: ObjectId,
      ref: 'User',
      required: true
    }
})

module.exports = mongoose.model(schemaName, schema)