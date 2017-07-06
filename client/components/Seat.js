import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './HorizontalTable.css'
import colors from './colors'
import sittable from './sittableTables'

const seatStyle = {
  backgroundColor: colors.GREY,
  color: colors.WHITE,
  borderRadius: '5px',
  padding: '5px'
}

class Seat extends Component {
  render() {
    const {seat} = this.props
    return (
      <div
        style={seatStyle} 
        className={seat.sittable ? '': 'unsittable'} 
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
