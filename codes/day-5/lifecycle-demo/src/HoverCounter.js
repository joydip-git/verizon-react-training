/**import React, { Component } from "react";

export default class HoverCounter extends Component {
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
        <p onMouseOver={this.changeCounterHandler}>
          Hovered {this.state.counter} times
        </p>
      </div>
    );
  }
}
*/
import React from "react";
import withCounter from "./withCounter";

function HoverCounter(props) {
  return (
    <div>
      <p onMouseOver={props.changeCounter}>
        Hovered {props.counterValue} times
      </p>
    </div>
  );
}
export default HoverCounter;
//export default withCounter(HoverCounter);
