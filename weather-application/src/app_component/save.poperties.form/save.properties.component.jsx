import React, { Component } from "react";
import "./save.properties.form.style.css";
import Select from "react-select";
import { Switch } from "antd";
class SavePropertiesForm extends Component {
  constructor(props) {
    super(props);
    this.cityInput = React.createRef();
    this.countryInput = React.createRef();
    this.precipitationSwitch = React.createRef();
  }
  state = {
    city: '',
    country: '',
    unitEmbedInUrl:'metric',
    units: [
      { value: "metric", label: "C" },
      { value: "imperial", label: "F" },
      { value: "default", label: "K" },
    ],
    unitFull: {
      value: "metric",
      label: "C",
    },
    precipitation: false,
    isShowWeather:false
  };
  toggler = () => {
    this.state.precipitation = !this.state.precipitation;
    this.setState({ precipitation: this.state.precipitation });
  };
  // sendData = () => {
  //   const city = this.cityInput.current.value;
  //   console.log(city)
  //   const country = this.countryInput.current.value;
  //   const precipitation = this.state.precipitation;
  //   const actualUnit = JSON.stringify(this.state.actualUnit);
  //   const isShowWeather= false;
  //   const settings = [city, country, actualUnit,precipitation,isShowWeather];
  //   this.props.trigger(settings);
  // };
  handleChange = (event) => {
    const input = event.target;
    const value = input.type === "checkbox" ? input.checked : input.value;
    this.setState({ [input.name]: value });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    const { city, country,unitFull, unitEmbedInUrl, precipitation,isShowWeather } = this.state;
    localStorage.setItem("city", city);
    localStorage.setItem("country", country);
    localStorage.setItem("precipitation", precipitation);
    localStorage.setItem("unitEmbedInUrl", unitEmbedInUrl);
    localStorage.setItem("unitFull", JSON.stringify(unitFull));
    localStorage.setItem("isShowWeather", isShowWeather);
    this.props.saveComponentTrigger();
  
  };
  handleSelect = (event) => {
    let unitEmbedInUrl = event.value;
   this.setState({
    unitFull:{event},
    unitEmbedInUrl:unitEmbedInUrl
   })
  };
  render() {
    let { units,unitFull } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit} className="formCard">
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
          <label> Precipitation : </label>
          <Switch ref={this.precipitationSwitch} onClick={this.toggler} />
        </div>
        <div className="row">
          <Select
            defaultValue={unitFull}
            options={units}
            onChange={this.handleSelect}
          />
        </div>
        <button className="btn btn-warning" type="submit">
          Save
        </button>
      </form>
    );
  }
}
export default SavePropertiesForm;
