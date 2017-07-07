import React, {Component} from 'react'
import HorizontalTable from './HorizontalTable'
import axios from 'axios'

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
      <div>
      Lunchroom
        <HorizontalTable seats={this.seats()} />
      </div>
    )
  }
}

export default Lunchroom
