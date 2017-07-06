import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './HorizontalTable.css'

const WHITE = '#FFF'
const GREY = '#444'

const tableStyle = {
  display: 'grid',
  gridTemplateColumns: '60px 60px 60px 60px 60px 60px 60px 60px 60px 60px',
  gridGap: '1px',
  color: WHITE 
}

const seatStyle = {
  backgroundColor: GREY,
  color: WHITE,
  borderRadius: '5px',
  padding: '5px'
}

class HorizontalTable extends Component {
  render() {
    const {seats} = this.props
    return (
      <div style={tableStyle}>
        { seats.map(seat =>
          <div 
            style={seatStyle} 
            className={seat.sittable ? '': 'unsittable'} 
            key={seat.id}
          >
            {seat.name}
          </div>
        ) }
      </div>
    )
  }
}

HorizontalTable.propTypes = {
  seats: PropTypes.array.isRequired
}
export default HorizontalTable
