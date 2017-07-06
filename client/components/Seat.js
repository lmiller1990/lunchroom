import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './HorizontalTable.css'
import colors from './colors'
import sittable from './sittableTables'
import axios from 'axios'

const seatStyle = {
  backgroundColor: colors.GREY,
  color: colors.WHITE,
  borderRadius: '5px',
  padding: '5px'
}

class Seat extends Component {
  clickHandler (seat) {
    console.log(this.props.seat)
    axios.post('http://localhost:3000/seats/create')
      .then(response => console.log(response))
  }

  render() {
    const {seat} = this.props
    return (
      <div
        style={seatStyle} 
        className={seat.sittable ? '': 'unsittable'} 
        onClick={() => this.clickHandler()}
      >
        {seat.name}
      </div>
    )
  }
}

Seat.propTypes = {
  seat: PropTypes.object.isRequired
}
export default Seat
