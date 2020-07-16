import React, { Component } from "react";

export default class User extends Component {
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
    //   return <div>{props.value}</div>;
    return (
      <div>
        {this.props.value(this.state.counter, this.changeCounterHandler)}
      </div>
    );
  }
}
