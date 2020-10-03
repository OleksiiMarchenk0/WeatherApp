import React, { Component } from "react";
import "./save.properties.form.style.css";
import { Switch } from "antd";
  class SavePropertiesForm extends Component {
  state = {
      
    city: "",
    country:'',
    temperature: false,
    precipitation: false,
    toggle: false,
    setToggle: false,
  };
  handleChange = (event) => {
    const input = event.target;
    const value = input.type === "checkbox" ? input.checked : input.value;
    this.setState({ [input.name]: value });
  };
  handleFormSubmit = (event) => {
    const { city, country, temperature, precipitation } = this.state;
    localStorage.setItem("city", city);
    localStorage.setItem("country", country);
    localStorage.setItem("temperature", temperature);
    localStorage.setItem("precipitation", precipitation);
  };
//    toggler = (event) => {
//        console.log("ok");
//        let [toggle,setToggle] = this.state;
//          toggle ? setToggle(false) : setToggle(true);
//       };
  componentDidMount() {
    const temperature = localStorage.getItem("temperature") === "true";
    const precipitation = localStorage.getItem("precipitation") === "true";
    const city = localStorage.getItem("city");
    const country = localStorage.getItem("country");
    this.setState({ city, country, temperature, precipitation });
  }
  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className="card py-3 my-3">
        <label>
          City :
          <input
            type="text"
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
            placeholder="Default city"
          />
        </label>
        <label>
          Country :
          <input
            type="text"
            name="country"
            value={this.state.country}
            onChange={this.handleChange}
            placeholder="Default country"
          />
        </label>
        <label>
          Temperature :
          {/* <Switch  act ={this.toggler} /> */}
          <input type="checked" name="temperature" value = {this.state.temperature} onChange={this.handleChange}/>
        </label>
        <label>
          Precipitation :
          <input
            type="checked"
            name="precipitation"
            value={this.state.precipitation}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    );
  }
}
export default SavePropertiesForm;
