const express  = require('express')
const mongoose = require('mongoose')
const db       = require('./models/db')
const ejs      = require('ejs')
const path     = require('path')

const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
const Employee = mongoose.model('Employee')

const employee = new Employee({
  name: 'Test User'
})

employee.save((err, emp) => {
  if (!err) {
    console.log('New employee created:', emp)
  }
})

app.get('/', (req, res) => {
  res.render('index.ejs')
})


app.listen(3000, () => console.log('Listening on port 3000.'))
