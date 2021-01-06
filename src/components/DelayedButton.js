// Code DelayedButton Component Here
import React, { Component } from "react";

export default class CoordinatesButton extends Component {
  handleClick = (event) => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Delay Button</button>
      </div>
    );
  }
}
