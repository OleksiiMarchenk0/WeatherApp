import React, { Component } from "react";
import "./save.properties.form.style.css";
import { Switch } from "antd";
class SavePropertiesForm extends Component {
  constructor(props) {
    super(props);
    this.cityInput = React.createRef();
    this.countryInput = React.createRef();
    this.temperatureInput = React.createRef();
    this.precipitationInput = React.createRef();
  }
  state = {
    city: "",
    country: "",
    temperature: false,
    precipitation: false,
  };
  toggler = () => {
    let newTemperature = !this.state.temperature;
    this.setState(
      {
        temperature: newTemperature,
      },
      console.log(this.state.temperature)
    );
  };
  sendData = () => {
    const city = this.cityInput.current.value;
    const country = this.countryInput.current.value;
    const temperature = this.state.temperature;
    const precipitation = this.state.precipitation;
    const settings = [city, country, temperature, precipitation];
    this.props.trigger(settings);
  };
  handleChange = (event) => {
    const input = event.target;
    const value = input.type === "checkbox" ? input.checked : input.value;
    this.setState({ [input.name]: value });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    const { city, country, temperature, precipitation } = this.state;
    localStorage.setItem("city", city);
    localStorage.setItem("country", country);
    localStorage.setItem("temperature", temperature);
    localStorage.setItem("precipitation", precipitation);
    this.sendData();
  };
  componentDidMount() {
    const temperature = localStorage.getItem("temperature") === "true";
    const precipitation = localStorage.getItem("precipitation") === "true";
    const city = localStorage.getItem("city");
    const country = localStorage.getItem("country");
    this.setState({ city, country, temperature, precipitation });
  }
  render() {
    return (
      <form
        onSubmit={this.handleFormSubmit}
        className="card py-3 my-3 d-flex align-items-center alert alert-info"
      >
        <h3>Set default settings</h3>
        <div className="row">
          <label>City : </label>
          <input
            ref={this.cityInput}
            type="text"
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
            placeholder="Default city"
          />
        </div>
        <div className="row">
          <label>Country :</label>
          <input
            ref={this.countryInput}
            type="text"
            name="country"
            value={this.state.country}
            onChange={this.handleChange}
            placeholder="Default country"
          />
        </div>
        <div className="row">
          <label>Temperature :</label>
          <Switch enabled onClick={this.toggler} />
        </div>
        <div className="row">
          <label> Precipitation : </label>
          <Switch onClick={this.toggler} />
        </div>
        <button className="btn btn-warning" type="submit">
          Save
        </button>
      </form>
    );
  }
}
export default SavePropertiesForm;
