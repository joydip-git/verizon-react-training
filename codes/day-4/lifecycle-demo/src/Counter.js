//lifting state NOT good...not able to maintain state of
//counter by individual components

import React, { Component } from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  changeCounterHandler = () => {
    this.setState((prevstate) => {
      return {
        counter: prevstate.counter + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <ClickCounter
          changeCounter={this.changeCounterHandler}
          counterValue={this.state.counter}
        />
        <HoverCounter
          changeCounter={this.changeCounterHandler}
          counterValue={this.state.counter}
        />
      </div>
    );
  }
}
