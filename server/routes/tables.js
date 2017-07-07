const mongoose = require('mongoose')
const router = require('express').Router()

router.get('/', (req, res) => {
  const Table = mongoose.model('Table')  
  Table.find({}, (err, tables) => res.json(tables))
})

module.exports = router
