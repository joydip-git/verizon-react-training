import React from "react";
import ProductRow from "./ProductRow/ProductRow";

export default function ProductTable(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Image</td>
            <td>Name</td>
            <td>Rating</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {props.productArray.map((p, index) => {
            return (
              <ProductRow
                name={p.productName}
                imagePath={p.imageUrl}
                price={p.price}
                rating={p.starRating}
                key={p.productId}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
