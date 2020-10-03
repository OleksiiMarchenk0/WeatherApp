import React , {Component } from "react";
import { FaCog } from "react-icons/fa";
import SavePropertiesForm from '../save.poperties.form/save.properties.component.jsx';
import "./cog.button.style.css";

export default class CogButton extends Component {
  sendData = (settingsData) => {
    //send data to cog.component
    this.props.CogCallback(settingsData);
    //hides save.properties component
    this.handleToggle();
}
  constructor(props) {
    super(props);
    this.state = {
         isSaveProperiesComponent: false,
         city:'',
         country:''
    };
  }
  handleToggle = () => {
    this.setState({
      isSaveProperiesComponent: !this.state.isSaveProperiesComponent
    });
  };
  render() {
    return (
      <div className="container">
          <div className="CogButtonContainer">
          <button className="CogButton" onClick={this.handleToggle}>
          <FaCog />
        </button>
          </div>
        {this.state.isSaveProperiesComponent ? <SavePropertiesForm trigger = {this.sendData}  />: null }
      </div>
    );
  }
}
