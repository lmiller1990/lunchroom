import React, {Component} from 'react'
import Lunchroom from './Lunchroom'
import EmployeeForm from './EmployeeForm'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newEmployee: {
        name: ''
      }
    }

    this.createEmployee = this.createEmployee.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    console.log('Handling change')
    const emp = Object.assign({}, this.state.newEmployee)
    emp.name = e.target.value

    this.setState({newEmployee: emp})
  }

  createEmployee () {
    console.log('Creating', this.state.newEmployee)
    axios.post('http://localhost:3000/employees/create', {
      employee: this.state.newEmployee,
    }).then(response => {
      console.log(response)
      let emp = {name: ''}
      this.setState({newEmployee: emp})
    }
  )
  }

  render () {
    return (
      <div>
        <Lunchroom />
        <EmployeeForm 
          newEmployee={this.state.newEmployee}
          createEmployee={this.createEmployee}
          handleChange={this.handleChange}
        />
      </div>
    )
  }
}

export default App
