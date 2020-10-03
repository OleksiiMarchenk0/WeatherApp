import React, { Component } from "react";
class Error extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div className="alert alert-danger mx-5" role="alert">
        {this.props.errMessage}
      </div>
    );
  }
}
export default Error;
