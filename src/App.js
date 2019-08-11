import React, { Component } from 'react';
import './App.css';
import Display from './display'
import Moods from './Moods'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zipCode: "",
      mood: "",
      weatherData: null,
      moods: []
    }
  }

  componentDidMount() {
    if (localStorage.getItem('moods')) {
      
      this.setState({ moods: JSON.parse(localStorage.getItem('moods')) })
    }
  }

  handleClick(e) {
    e.preventDefault()
    this.getWeather(this.state.zipCode)
  }

  handleMood(e) {
    e.preventDefault()
    const moods = this.state.moods
    moods.push({ mood: this.state.mood, weather: this.state.weatherData.weather[0].main })
    this.setState({ moods })
    localStorage.setItem('moods', JSON.stringify(moods))
  }



  getWeather(zip) {
    const apikey = "7602bf22c280996719107d67a1026fd0"
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apikey}`
    fetch(url).then(res => res.json()).then(json => {
      this.setState({ weatherData: json })
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <form>
            <input type="text" placeholder="zip code" value={this.state.zipCode} onChange={e => this.setState({ zipCode: e.target.value })} />
            <button onClick={e => this.handleClick(e)} >Get Weather</button>
          </form>
          <form>
            <input type="text" placeholder="Mood" value={this.state.mood} onChange={e => this.setState({ mood: e.target.value })} />
            <button onClick={e => this.handleMood(e)}>Submit Mood</button>
          </form>
        </div>
        {this.state.weatherData && (this.state.weatherData.cod !== "404" && <Display weatherData={this.state.weatherData} />)}
        <Moods moods={this.state.moods} />
      </div>
    );
  }


}

export default App;
