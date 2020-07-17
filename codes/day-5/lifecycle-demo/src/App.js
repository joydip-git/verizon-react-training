import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
import User from "./User";
import withCounter from "./withCounter";
//import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      {/* <withCounter>
        <HoverCounter />
      </withCounter> */}
      {/* <User value={(x,y) => (x+y)} /> */}
      {/* <ClickCounter />
      <HoverCounter /> */}
      {/* <Counter /> */}

      <User
        value={(val, changeValueHandler) => {
          return (
            <ClickCounter
              counterValue={val}
              changeCounter={changeValueHandler}
            />
          );
        }}
      />
      <User
        value={(val, changeValueHandler) => {
          return (
            <HoverCounter
              counterValue={val}
              changeCounter={changeValueHandler}
            />
          );
        }}
      />
    </div>
  );
}

export default App;
