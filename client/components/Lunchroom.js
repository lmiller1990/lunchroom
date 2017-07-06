import React, {Component} from 'react'
import HorizontalTable from './HorizontalTable'

class Lunchroom extends Component {
  seats () {
    const sittable = [
      1, 2, 3, 4, 5, 6, // first table
      11, 12, 13, 14, 15, 16,
      31, 32, 33, 34, 35, 36, // second
      41, 42, 43, 44, 45, 46, 
      61, 62, 63, 64, 65, 66, // third
      71, 72, 73, 74, 75, 76, 
      91, 92, 93, 94, 95, 96, // fourth
      101, 102, 103, 104, 105, 106, 
      68, 69, 70,
      78, 79, 80,
      98, 99, 100,
      108, 109, 110,
      19, 20, 39, 40, 29, 30
    ]
    let arr = new Array(120).fill()
    return arr.map((seat, index) => { 
      return { 
        id: index + 1, name: `#${index + 1}`, sittable: sittable.includes(index + 1)
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
