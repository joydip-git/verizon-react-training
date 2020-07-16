// import React, { Component } from "react";

/*
export default class ClickCounter extends Component {
  constructor(props) {
    super(props);

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
        <button onClick={this.changeCounterHandler}>
          Clicked {this.state.counter} times
        </button>
      </div>
    );
  }
}
*/
import React from "react";
import withCounter from "./withCounter";

function ClickCounter(props) {
  return (
    <div>
      <button onClick={props.changeCounter}>
        Clicked {props.counterValue} times
      </button>
    </div>
  );
}
export default ClickCounter;
//export default withCounter(ClickCounter);
