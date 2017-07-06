const mongoose = require('mongoose')
const dbURI = 'mongodb://localhost:27017/lunchroom'

mongoose.connect(dbURI)

const employeeSchema = new mongoose.Schema({
  name: {type: String, unique: true},
  createdOn: {type: Date, default: Date.now}
})

mongoose.model('Employee', employeeSchema)
