import React, { Component } from "react";

const withCounter = (WrappedComponent) => {
  class WithCounter extends Component {
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
      /**
       * { type:'div', props:{ title: , children: {type:'', props:{title}}}}
       */
      return (
        <div>
          <WrappedComponent
            {...this.props}
            changeCounter={this.changeCounterHandler}
            counterValue={this.state.counter}
          />
        </div>
      );
    }
  }
  return WithCounter;
};

export default withCounter;
