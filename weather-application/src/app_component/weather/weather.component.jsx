import React from "react";

import "./weather.component.styles.css";

const Weather = (props) => {
  return (
    <div className="container">
      <div className="weatherInfo pt-4">
        <h1>{props.temp_celsius ? props.city : null}</h1>
        <h5 className="py-4">
          {props.isShowIcon ? (
            <i className={`wi ${props.weathericon} display-1 `}></i>
          ) :null}
        </h5>
        {props.temp_celsius ? (
          <h1 className="py-2">
            {props.temp_celsius}&deg;
            {setUnitAttr(props.unitFull)}
          </h1>
        ) : null}
        {minmaxTemp(props.temp_min, props.temp_max)}
        <h4 className="py-3">{props.description}</h4>
      </div>
    </div>
  );
  function setUnitAttr(unit) {
    const imperialType = `{"event":{"value":"imperial","label":"F"}}`;
    const defaultType = `{"event":{"value":"default","label":"K"}}`;
    let unitAttr;
    if (unit === defaultType) unitAttr = "K";
    else if (unit === imperialType) unitAttr = "F";
    else unitAttr = "C";
    return <span>{unitAttr}</span>;
  }
  function minmaxTemp(min, max) {
    return (
      <h3>
        {min ? <span className="px-4">{min}&deg;</span> : null}
        {max ? <span className="px-4">{max}&deg;</span> : null}
      </h3>
    );
  }
};

export default Weather;
