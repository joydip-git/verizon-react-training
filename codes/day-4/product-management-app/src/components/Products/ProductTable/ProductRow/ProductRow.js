import React from "react";
import ProductRowData from "./ProductRowData/ProductRowData";

export default function ProductRow(props) {
  return (
    <tr>
      {/* <ProductRowData {...props}>Details of: {props.name}</ProductRowData> */}
      <ProductRowData {...props} />
    </tr>
  );
}
