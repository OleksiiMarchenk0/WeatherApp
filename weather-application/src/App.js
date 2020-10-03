 /** Background image from https://www.pexels.com/photo/unrecognizable-couple-embracing-while-walking-on-pathway-near-mountains-4974917/ */
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";
import "./App.css";
import Weather from "./app_component/weather/weather.component.jsx";
import Form from "./app_component/input.town.form/input.town.form.component.jsx";
import CogButton from "./app_component/cog.button/cog.button.component";

const API_key = "29dce02c8a2f97ff423e9f733810cfa7";

class App extends Component {
  getSettingsFunction = (settingsData) => {
    this.setState({
      city: settingsData[0],
      country: settingsData[1],
      temperature: settingsData[2],
      precipitation: settingsData[3]
    });
  };
  constructor() {
    super();
    this.state = {
      city: '',
      country: '',
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false,
      isSaveProperiesComponent: false,
    };
    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog",
    };
  }

  getWeatherIcon(icon, rangeID) {
    switch (true) {
      /* Thunderstorm */
      case rangeID >= 200 && rangeID <= 232:
        this.setState({ icon: icon.Thunderstorm });
        break;
      /**Drizzle */
      case rangeID >= 300 && rangeID <= 321:
        this.setState({ icon: icon.Drizzle });
        break;
      /**Rain */
      case rangeID >= 500 && rangeID <= 531:
        this.setState({ icon: icon.Rain });
        break;
      /**Snow */
      case rangeID >= 600 && rangeID <= 622:
        this.setState({ icon: icon.Snow });
        break;
      /*Atmosphere */
      case rangeID >= 700 && rangeID <= 781:
        this.setState({ icon: icon.Atmosphere });
        break;
      /*Clear*/
      case rangeID === 800:
        this.setState({ icon: icon.Clear });
        break;
      /**Clouds */
      case rangeID >= 801 && rangeID <= 804:
        this.setState({ icon: icon.Clouds });
        break;
      default:
        this.setState({ icon: icon.Clouds });
        break;
    }
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    if (city) {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`
      );
      const response = await api_call.json();
      this.setState({
        error: false,
        city: `${response.name} ,${response.sys.country}`,
        celsius: this.calcCelsius(response.main.temp),
        temp_max: this.calcCelsius(response.main.temp_max),
        temp_min: this.calcCelsius(response.main.temp_min),
        description: response.weather[0].description,
      });
      this.getWeatherIcon(this.weatherIcon, response.weather[0].id);
    } else {
      this.setState({ error: true });
    }
  };
  calcCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }
  render() {
    return (
      <div className="App">
        <CogButton CogCallback={this.getSettingsFunction} />
        <Form
          city={this.state.city}
          country={this.state.country}
          loadWeather={this.getWeather}
          error={this.state.error}
        />
        <Weather
          city={this.state.city}
          country={this.state.country}
          temp_celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
          weathericon={this.state.icon}
        />
      </div>
    );
  }
}

export default App;
