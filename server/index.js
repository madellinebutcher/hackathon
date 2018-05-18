var express = require('express')
var bp = require('body-parser')
var app = express()
var cors = require('cors')
var port = 3000

app.use(cors())
//Fire up database connection
require('./server-assets/db/mlab-config')


//REGISTER MIDDLEWEAR
app.use(bp.json())
app.use(bp.urlencoded({extended: true}))









//catch all
app.get('*', (req, res, next)=>{
  res.status(404).send({error: 'No matching routes'})
})

//port listener
app.listen(port, ()=>{
  console.log('server running on port', port)
})