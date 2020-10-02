import React, { useState } from "react";
import "./save.properties.form.style.css";
import { Switch } from "antd";

const SavePropertiesForm = (props) => {
  const [toggle, setToggle ] = useState(false);

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };
  return (
    <div className="container">
     
      <form className="card py-3 my-3" action="">
        <div className="col">
          <h1>Save your settings</h1>
        </div>
        <div className="col-md-3 offset-md-5">
        <input
              type="text"
              className="form-control "
              name="city"
              placeholder="Default localization"
              autoComplete="off"
            />
        </div>
        <div className="col">
          <div className="row">
            <label htmlFor="">Temperature</label>
            <Switch onClick={toggler} />
          </div>
        </div>
        <div className="col">
          <div className="row">
            <label htmlFor="">Precipitation</label>
            <Switch onClick={toggler} />
          </div>
        </div>
        <div className="col">
          <button className="btn btn-default btn-warning">Save</button>
        </div>
      </form>
    </div>
  );
};

export default SavePropertiesForm;
