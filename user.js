const express = require('express')
const mustache = require('mustache-express')
const app = express()
const data = require('./data.js')
app.use(express.static(__dirname + '/public'))

app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.set('views', __dirname + '/views')

app.get('/', function (req, res) {
  res.render('directory', {users: data.users})
})
app.get('/:user', function (req, res) {
  var user = req.params.user
  var index = -1
  for (var i = 0; i < data.users.length; i++) {
    if (data.users[i].name === user) {
      index = i
    }
  }

  res.render('user', {user: data.users[index]})
})
app.listen(3000, function () {
  console.log('it is listening')
})
