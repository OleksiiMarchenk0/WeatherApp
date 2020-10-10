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
  constructor() {
    super();
    this.state = {
      city: "",
      country: "",
      unitFull: {
        value: "metric",
        label: "C",
      },
      unitEmbedInUrl: "metric",
      precipitation: true,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false,
      isShowWeather: true,
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
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    let { unitEmbedInUrl, unitFull } = this.state;
    unitEmbedInUrl = localStorage.getItem("unitEmbedInUrl") || unitEmbedInUrl;
    unitFull = localStorage.getItem("unitFull") || this.state.unitFull;
   
    if (city) 
    {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=${unitEmbedInUrl}&appid=${API_key}`
      );
      try {
        const response = await api_call.json();
        this.setState({
          error: false,
          city: `${response.name},${response.sys.country}`,
          celsius: Math.floor(response.main.temp),
          isShowWeather: true,
          temp_max: Math.floor(response.main.temp_max),
          unitFull: unitFull,
          temp_min: Math.floor(response.main.temp_min),
          description: response.weather[0].description,
        });
        this.getWeatherIcon(this.weatherIcon, response.weather[0].id);
      } catch {
        this.setState({ error: true });
      }
    } else {
      this.setState({ error: true });
    }
  };
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
  getSettingsFunction = () => {
    let {
      city,
      country,
      precipitation,
      actualUnit,
      unitEmbedInUrl,
      isShowWeather,
    } = this.state;

    city = localStorage.getItem("city") || city;
    country = localStorage.getItem("country") || country;
    precipitation = localStorage.getItem("precipitation") || precipitation;
    actualUnit = localStorage.getItem("actualUnit") || actualUnit;
    isShowWeather = localStorage.getItem("isShowWeather") || isShowWeather;
    unitEmbedInUrl = localStorage.getItem("unitEmbedInUrl") || unitEmbedInUrl;
    this.setState({
      city: city,
      country: country,
      actualUnit: actualUnit,
      precipitation: precipitation,
      isShowWeather: false,
    });
  };
  render() {
    return (
      <div class="container">
        <CogButton CogCallback={this.getSettingsFunction} />
        <Form
          city={this.state.city}
          country={this.state.country}
          loadWeather={this.getWeather}
          error={this.state.error}
        />
        {this.state.isShowWeather ? (
          <Weather
            city={this.state.city}
            country={this.state.country}
            temp_celsius={this.state.celsius}
            temp_max={this.state.temp_max}
            temp_min={this.state.temp_min}
            description={this.state.description}
            precipitation={this.state.precipitation}
            weathericon={this.state.icon}
            isShowIcon={this.state.precipitation}
            unitFull={this.state.unitFull}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
