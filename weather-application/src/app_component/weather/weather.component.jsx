import React from "react";
import "./weather.component.styles.css";

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
  }
  setUnitAttr(unit) {
    const imperialType = `{"event":{"value":"imperial","label":"F"}}`;
    const defaultType = `{"event":{"value":"default","label":"K"}}`;
    let unitAttr;
    if (unit === defaultType) unitAttr = "K";
    else if (unit === imperialType) unitAttr = "F";
    else unitAttr = "C";
    return <span>{unitAttr}</span>;
  }
  minmaxTemp(min, max) {
    return (
      <h3>
        {min ? (
          <span className="px-4">
            {min}&deg;{this.setUnitAttr(this.props.unitFull)}
          </span>
        ) : null}
        {max ? (
          <span className="px-4">
            {max}&deg;{this.setUnitAttr(this.props.unitFull)}
          </span>
        ) : null}
      </h3>
    );
  }
  render() {
    return (
      <div className="container">
        <div className="weatherInfo pt-4">
          <h1>{this.props.temp_celsius ? this.props.city : null}</h1>
          <h5 className="py-4">
            {this.props.isShowIcon ? (
              <i className={`wi ${this.props.weathericon} display-1 `}></i>
            ) : null}
          </h5>
          {this.props.temp_celsius ? (
            <h1 className="py-2">
              {this.props.temp_celsius}&deg;
              {this.setUnitAttr(this.props.unitFull)}
            </h1>
          ) : null}
          {this.minmaxTemp(this.props.temp_min, this.props.temp_max)}
          <h4 className="py-3">{this.props.description}</h4>
        </div>
      </div>
    );
  }
}
