import React, {Component} from 'react'
import HorizontalTable from './HorizontalTable'

class Lunchroom extends Component {
  seats () {
    let arr = new Array(100).fill()
    return arr.map((seat, index) => { 
      return { 
        id: index + 1, name: `#${index + 1}` 
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
