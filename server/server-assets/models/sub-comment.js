var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId
var schemaName = 'SubComment'


var schema = new Schema({
    title: {type: String, required: true},//required
    body: {type: String, required: true},//required
    img: {type: String},
    userUpVotes: [{type: String}],
    userDownVotes: [{type: String}],
    author: {type: String, required: true},
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
    },
    commentId: {
      type: ObjectId,
      ref: 'Comment',
      required: true
    }
  })

module.exports = mongoose.model(schemaName, schema)