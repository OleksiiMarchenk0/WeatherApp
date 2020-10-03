import React from "react";
import "./input.town.form.style.css";

class Form extends React.Component {
  state = {
    city: "",
    country: "",
  };
  constructor(props) {
    super(props);
    this.cityInput = React.createRef();
    this.countryInput = React.createRef();
  }
  getDataFromCache = () => {
    let city = localStorage.getItem("city") || "";
    let country = localStorage.getItem("country") || "";
    let temperature = localStorage.getItem("temperature") || "";
    let precipitation = localStorage.getItem("precipitation") || "";
    let data = [city, country, temperature, precipitation];
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
    return (
      <div className="container">
        <div>{this.props.error ? error() : null}</div>
        <form onSubmit={this.props.loadWeather}>
          <div className="row">
            <div className="col-md-3 offset-md-2">
              <input
                ref={this.cityInput}
                type="text"
                className="form-control"
                name="city"
                placeholder="City"
                autoComplete="off"
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
                autoComplete="off"
                onChange={this.handleChange}
                value={this.state.country}
              />
            </div>
            <div className="col-md-3 mt-md-0 text-md-left">
              <button className="btn btn-warning">Get Weather</button>
            </div>
          </div>
        </form>
        <div className="col-md-3 mt-md-0 text-md-left">
          <button onClick={this.fillFields} className="btn btn-warning">
            Use Default Parameters
          </button>
        </div>
      </div>
    );
  }
}
function error() {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please enter values
    </div>
  );
}
export default Form;
