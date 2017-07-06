import React, {Component} from 'react'
import PropTypes from 'prop-types'

const WHITE = '#FFF'
const GREY = '#444'

const tableStyle = {
  display: 'grid',
  gridTemplateColumns: '80px 80px 80px 80px 80px 80px',
  gridGap: '10px',
  backgroundColor: '#dadada',
  color: WHITE 
}

const seatStyle = {
  backgroundColor: GREY,
  color: WHITE,
  borderRadius: '5px',
  padding: '20px'
}

class HorizontalTable extends Component {
  render() {
    const {seats} = this.props
    return (
      <div style={tableStyle}>
        { seats.map(seat =>
          <div style={seatStyle} key={seat.id}>{seat.name}</div>
        ) }
      </div>
    )
  }
}

HorizontalTable.propTypes = {
  seats: PropTypes.array.isRequired
}
export default HorizontalTable
