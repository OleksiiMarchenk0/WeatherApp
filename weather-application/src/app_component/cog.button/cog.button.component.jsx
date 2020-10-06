import React , {Component } from "react";
import SavePropertiesForm from '../save.poperties.form/save.properties.component.jsx';
import "./cog.button.style.css";
import"../../flaticon/flaticon.css";
export default class CogButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
         isSaveProperiesComponent: false
    };
  }
  handleToggle = () => {
    this.props.CogCallback();
    this.setState({
      isSaveProperiesComponent: !this.state.isSaveProperiesComponent
    });
  };
  render() {
    return (
      <div className="container">
          <div className="CogButtonContainer">
          <button className="CogButton" onClick={this.handleToggle}>
          <i class="flaticon-gear"></i>
        </button>
          </div>
        {this.state.isSaveProperiesComponent ? <SavePropertiesForm saveComponentTrigger= {this.handleToggle}  />: null }
      </div>
    );
  }
}
