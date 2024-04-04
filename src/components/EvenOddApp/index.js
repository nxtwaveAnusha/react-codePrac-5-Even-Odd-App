import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, status: 'Even'}

  onStatusChange = () => {
    const {count, status} = this.state
    this.setState(prevState => {
      const newCount = prevState.count + Math.floor(Math.random() * 101)
      const newStatus = newCount % 2 === 0 ? 'Even' : 'Odd'
      return {count: newCount, status: newStatus}
    })
  }

  render() {
    const {count, status} = this.state
    return (
      <div className="bg-container">
        <h1 className="count-value">Count {count}</h1>
        <div className="increment-con">
          <p className="status-heading">Count is {status}</p>
          <button className="btn" onClick={this.onStatusChange}>
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
