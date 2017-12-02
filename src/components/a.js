import React, {Component} from 'react'

class Abs extends Component {
  componentDidMount () {
    if (window) {
      console.log('didmount')
    }
  }

  render () {
    return (
      <div>name: a hah</div>
    )
  }
}

export default Abs
