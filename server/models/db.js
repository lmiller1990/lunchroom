const mongoose = require('mongoose')
const dbURI = 'mongodb://localhost:27017/lunchroom'

mongoose.connect(dbURI)

const employeeSchema = new mongoose.Schema({
  name: {type: String, unique: true},
  createdOn: {type: Date, default: Date.now}
})

const seatSchema = new mongoose.Schema({
  seatNumber: {type: Number, unique: true}
})

const tableSchema = new mongoose.Schema({
  tableNumber: {type: Number, unique: true},
  seats: [seatSchema]
})

mongoose.model('Employee', employeeSchema)
mongoose.model('Seat', seatSchema)
mongoose.model('Table', tableSchema)
