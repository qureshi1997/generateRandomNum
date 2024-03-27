import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {
    randomNum: 0,
  }

  generateRandomNum = () => {
    const randNum = Math.random()
    const randNumInRange = randNum * 100
    const ceiledRandNum = Math.ceil(randNumInRange)
    this.setState({randomNum: {ceiledRandNum}})
  }

  render() {
    const {randomNum} = this.state
    return (
      <div>
        <h1>Random Number</h1>
        <p>Generate a random number in the range of 0 to 100</p>
        <button onClick={this.generateRandomNum}>Generate</button>
        <p>{randomNum}</p>
      </div>
    )
  }
}

export default RandomNumberGenerator
