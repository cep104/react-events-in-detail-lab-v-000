// Code DelayedButton Component Here
import React, { Component } from "react";

export default class CoordinatesButton extends Component {
  handleClick = (event) => {
    event.persist();
    //event.persist keeps the event information around instead of pooling it back into the 'pool' for future use.
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  };
  //when using set Timeout need anoynmous function then your function inside then , with whatever the time frame is.
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Delay Button</button>
      </div>
    );
  }
}
