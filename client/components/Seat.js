import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {ItemTypes} from './Constants'
import {DropTarget}  from 'react-dnd'
import './HorizontalTable.css'
import colors from './colors'
import sittable from './sittableTables'
import axios from 'axios'

const seatTarget = {
  drop(props, monitor, component) {
    console.log(monitor)
    const seat = {...component.state.seat, name: 'e'}
    component.setState({seat: seat})
    return {}
  }
}

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

const seatStyle = {
  backgroundColor: colors.GREY,
  color: colors.WHITE,
  borderRadius: '5px',
  padding: '5px'
}

class Seat extends Component {
  constructor(props) {
    super(props)

    this.state = {
      seat: props.seat
    }
  }

  clickHandler (seat) {
    axios.post('http://localhost:3000/seats/create')
      .then(response => console.log(response))
  }

  render() {
    const {seat, isOver, connectDropTarget} = this.props
    
    {isOver === true ? console.log(`About to sit in seat ${seat.id} `) : null}
    return connectDropTarget(
      <div
        style={seatStyle} 
        className={seat.sittable ? '': 'unsittable'} 
        onClick={() => this.clickHandler()}
      >
        {this.state.seat.name}
      </div>
    )
  }
}

Seat.propTypes = {
  seat: PropTypes.object.isRequired
}
export default DropTarget(ItemTypes.EMPLOYEE, seatTarget, collect)(Seat)
