// Code CoordinatesButton Component Here
import React, { Component } from "react";

export default class CoordinatesButton extends Component {
  handleOnClick = (event) => {
    // event.persist();
    // need to use event.persist to see what is inside of event
    // console.log(event);
    let cordArray = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(cordArray);
    //use this.props to pass down the function. and send back up the cordArray.
  };
  render() {
    return (
      <div>
        <button onClick={this.handleOnClick}>CButton</button>
      </div>
    );
  }
}
