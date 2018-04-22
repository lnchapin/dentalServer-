var express = require('express')
var app = express()
var knex = require('knex')
var cors = require('cors')
var bodyParser = require('body-parser')
var knexdb = require('./database/knex.js')
var questions = require('./routes/questionRoutes.js')
var port = process.env.PORT || 3030

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use("/api/v1/questions", questions)


app.listen(port, function() {
  console.log('Listening on port', port)
})

module.exports = app
