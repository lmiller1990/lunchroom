import React, {Component} from 'react'

const employeeForm = ({newEmployee, createEmployee, handleChange}) => {
  return (
    <div>
      <form>
        <input type="text" onChange={handleChange} value={newEmployee.name} />
        <input type="button" value={'Create'} onClick={createEmployee} />
      </form>
    </div>
  )
}

export default employeeForm
