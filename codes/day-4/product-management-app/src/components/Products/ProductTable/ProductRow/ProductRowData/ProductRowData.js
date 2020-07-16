import React, { Fragment } from "react";
import "./ProductRowData.css";

export default function ProductRowData(props) {
  const imgStyle = {
    width: "50px",
    margin: "2px",
  };

  return (
    <Fragment>
      <td>
        <img
          src={props.imagePath}
          alt="NA"
          className="imgStyle"
          style={imgStyle}
        />
      </td>
      <td>{props.name}</td>
      <td>{props.price}</td>
      <td>{props.rating}</td>
      {/* <td> {props.children} </td> */}
    </Fragment>
  );
}

// function Frag(props) {
//   return { ...props.children };
// }
