import React , {Component}from "react";
import { FaCog } from "react-icons/fa";
import SavePropertiesForm from '../save.poperties.form/save.properties.component.jsx';
import "./cog.button.style.css";
export default class CogButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isSaveProperiesComponent: false,
    };
  }
  handleShow = () => {
    this.setState({
      isSaveProperiesComponent: true
    });
  };
  render() {
    return (
      <div className="container">
          <div className="CogButtonContainer">
          <button className="CogButton" onClick={this.handleShow}>
          <FaCog />
        </button>
          </div>
       
        {this.state.isSaveProperiesComponent ? <SavePropertiesForm  />: null }
      </div>
    );
  }
}
