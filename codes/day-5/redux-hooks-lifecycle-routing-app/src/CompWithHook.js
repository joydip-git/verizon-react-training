import React, { useEffect } from "react";

export default function CompWithHook(props) {
  useEffect(() => {
    console.log("always");
    return () => {
      console.log("always clean");
    };
  });
  useEffect(() => {
    console.log("only when dep changes");
  }, [props.count]);
  useEffect(() => {
    console.log("what will happen?");
    return () => {
      console.log("when?????");
    };
  }, []);
  return (
    <div>
      <p>{props.value}</p>
      <p>{props.count}</p>
      <input type="text" value={props.value} onChange={props.handler} />
      <button onClick={props.handler1}>Click</button>
    </div>
  );
}
