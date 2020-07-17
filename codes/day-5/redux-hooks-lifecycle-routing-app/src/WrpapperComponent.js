import React, { Component } from "react";
import CompWithHook from "./CompWithHook";

export default class WrpapperComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      val: "joy",
      count: 0,
    };
  }
  change = (e) => {
    const val = e.target.value;
    this.setState({
      val: val,
    });
  };

  change1 = () => {
    this.setState((ps) => {
      return {
        count: ps.count + 1,
      };
    });
  };
  render() {
    return (
      <div>
        <CompWithHook
          value={this.state.val}
          handler={this.change}
          count={this.state.count}
          handler1={this.change1}
        />
      </div>
    );
  }
}
