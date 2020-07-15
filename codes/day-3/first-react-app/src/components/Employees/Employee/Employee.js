import React from "react";

export default function Employee(props) {
  return (
    <div>
      <p>Name: &nbsp;{props.name}</p>
      <p>Adress: &nbsp;{props.address}</p>
      <br />
      enter new name: &nbsp;
      <input
        type="text"
        onChange={props.nameChangeHandler.bind(this, props.id)}
        value={props.name}
      />
    </div>
  );
}
/**
 * onChange={(e) => {
          return props.nameChangeHandler(props.id, e.target.value);
        }}
 */
