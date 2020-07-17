import React from "react";

export default function Header(props) {
  console.log("header rendered");
  return (
    <div>
      <button onClick={props.remove}>Click</button>
      {props.shouldShow && <p>Hi</p>}
    </div>
  );
}
