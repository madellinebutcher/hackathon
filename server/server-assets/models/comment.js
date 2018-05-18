var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId
var schemaName = 'Comment'


var schema = new Schema({
  message: {type: String},
  comment: {
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
    },
    postId: {
      type: ObjectId,
      ref: 'Post',
      required: true
    }
  }
})

module.exports = mongoose.model(schemaName, schema)