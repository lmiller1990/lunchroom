const mongoose = require('mongoose')
const Employee = mongoose.model('Employee')  
const router = require('express').Router()

router.get('/', (req, res) => {
  Employee.find({}, (err, emps) => {
    if (!err)
      res.json(emps)
  })
})

router.post('/create', (req, res) => {
  const employee = new Employee(req.body.employee) 
  employee.save((err, emp) => {
    if (!err) 
      res.json(emp)
  })
})

module.exports = router


