import React, { Component } from "react";
class Error extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div className="my-3 alert alert-danger mx-5" role="alert">
        {this.props.errMessage}
      </div>
    );
  }
}
export default Error;
