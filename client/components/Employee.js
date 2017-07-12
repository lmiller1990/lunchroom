import React, {Component} from 'react'
import {ItemTypes} from './Constants'
import {DragSource} from 'react-dnd'

const employeeSource = {
  beginDrag(props) {
    return {}
  }
}

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Employee extends Component {
  render() {
    const {employee, connectDragSource, isDragging} = this.props
    return connectDragSource(
      <div>{employee.name}</div>
    )
  }
}  

export default DragSource(ItemTypes.EMPLOYEE, employeeSource, collect)(Employee)

