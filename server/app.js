const express  = require('express')
const mongoose = require('mongoose')
const db       = require('./models/db')
const ejs      = require('ejs')
const path     = require('path')
const cors     = require('cors')
const seats    = require('./routes/seats')
const tables   = require('./routes/tables')

const app = express()
app.use(cors())
app.use('/seats', seats)
app.use('/tables', tables)

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.listen(3000, () => console.log('Listening on port 3000.'))
