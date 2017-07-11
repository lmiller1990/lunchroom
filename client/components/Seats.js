import React from 'react'
import Seat from './Seat'
import colors from './colors'

const tableStyle = {
  display: 'inline-grid',
  gridTemplateColumns: '50px 50px 50px 50px 50px 50px 50px 50px 50px 50px',
  gridGap: '1px',
  color: colors.WHITE,
}

const Seats = ({seats}) => 
  <div style={tableStyle}>
    { seats.map(seat =>
      <Seat seat={seat} key={seat.id} />
    ) }
  </div>

export default Seats
