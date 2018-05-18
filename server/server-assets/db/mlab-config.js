var mongoose = require('mongoose')
var connectionString = 'mongodb://user:user@ds123896.mlab.com:23896/wizardsoftheboast'
var connection = mongoose.connection


mongoose.connect(connectionString)

connection.on('error', err=>{
  console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', ()=>{
  console.log('Connected to Database')
})