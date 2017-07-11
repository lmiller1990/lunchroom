import React from 'react'
import Employee from './Employee'

const employeeListStyle = {
  display: 'inline-block',
  position: 'absolute',
  marginLeft: '20px'
}

const EmployeeList = ({employees}) => 
  <div style={employeeListStyle}>
    { employees.map(employee =>
      <Employee employee={employee} key={employee._id} />
    ) }
  </div>

export default EmployeeList
