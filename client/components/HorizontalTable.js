import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Seat from './Seat'
import colors from './colors'

const tableStyle = {
  display: 'grid',
  gridTemplateColumns: '50px 50px 50px 50px 50px 50px 50px 50px 50px 50px',
  gridGap: '1px',
  color: colors.WHITE 
}

class HorizontalTable extends Component {
  render() {
    const {seats} = this.props
    return (
      <div style={tableStyle}>
        { seats.map(seat =>
          <Seat seat={seat} key={seat.id} />
        ) }
      </div>
    )
  }
}

HorizontalTable.propTypes = {
  seats: PropTypes.array.isRequired
}
export default HorizontalTable
