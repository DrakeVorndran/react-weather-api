import React, { Component } from 'react'

class Display extends Component {
  constructor(props) {
    super(props)

    this.state = {
      weather: this.props.weatherData
    }
  }

  render() {
    return(
      <div className="container">
        <h1>Weather</h1>
        <p>Weather: {this.state.weather.weather[0].main}</p>
        <p>Tempature: {parseInt((this.state.weather.main.temp - 273.15) * 9 / 5 + 32)}°</p>
      </div>
    )
  }
}

export default Display