import React from "react";
import "./input.town.form.style.css";
import LogError from "../log.error/log.error";

class Form extends React.Component {
  state = {
    city: '',
    country: '',
  };
  constructor(props) {
    super(props);
    this.cityInput = React.createRef();
    this.countryInput = React.createRef();
  }
  getDataFromCache = () => {
    let city = localStorage.getItem("city") || "";
    let country = localStorage.getItem("country") || "";
    let unit = localStorage.getItem("unit") || "";
    let precipitation = localStorage.getItem("precipitation") || "";
    let data = [city, country,unit, precipitation];
    console.log(unit)
    return data;
  };
  fillFields = () => {
    const cacheData = this.getDataFromCache();
    const cityInput = this.cityInput.current;
    const countryInput = this.countryInput.current;
    cityInput.value = cacheData[0];
    countryInput.value = cacheData[1];
  };
  handleChange = (event) => {
    const input = event.target;
    const value = input.type === "checkbox" ? input.checked : input.value;
    this.setState({ [input.name]: value });
  };
  render() {
    const err = 'City not found. Try again.';
    return (
      <div className="container">
        <div>
          {this.props.error ? ( <LogError errMessage={err} />) : null}
        </div>
        <div className="defaultButtonContainer">
          <button onClick={this.fillFields} className="btn btn-warning">
            Use Default Parameters
          </button>
        </div>
        <form onSubmit={this.props.loadWeather}>
          <div className="row">
            <div className="col-md-3 offset-md-2">
              <input
                ref={this.cityInput}
                type="text"
                className="form-control"
                name="city"
                placeholder="City"
                onChange={this.handleChange}
                value={this.state.city}
              />
            </div>
            <div className="col-md-3">
              <input
                ref={this.countryInput}
                type="text"
                className="form-control"
                name="country"
                placeholder="Country"
                onChange={this.handleChange}
                value={this.state.country}
              />
            </div>
            <div className="col-md-3 mt-md-0 text-md-left">
              <button className="btn btn-warning">Get Weather</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
