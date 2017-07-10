import React, {Component} from 'react'
import HorizontalTable from './HorizontalTable'
import Seat from './Seat'
import colors from './colors'
import axios from 'axios'

const tableStyle = {
  display: 'grid',
  gridTemplateColumns: '50px 50px 50px 50px 50px 50px 50px 50px 50px 50px',
  gridGap: '1px',
  color: colors.WHITE 
}

class Lunchroom extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tables: []
    }
  }

  componentDidMount () {
    axios.get('http://localhost:3000/tables/')
      .then(response => 
        this.setState({tables: response.data})
      )
  }

  sittable () {
    let arr = []
    for (let t in this.state.tables) {
      for (let s in this.state.tables[t].seats) {
        arr.push(this.state.tables[t].seats[s].seatNumber)
      }
    }
    return arr
  }

  seats () {
    let canSit = this.sittable()
    let arr = new Array(120).fill()
    return arr.map((seat, index) => { 
      return { 
        id: index + 1, name: `#${index + 1}`, sittable: canSit.includes(index + 1)
      }
    })
  }

  render() {
    return (
      <div style={tableStyle}>
        { this.seats().map(seat =>
          <Seat seat={seat} key={seat.id} />
        ) }
      </div>
    )
  }
}

export default Lunchroom
