import React from "react";

export default function ProductDetail(props) {
  return (
    <div>
      <article>
        <header>
          <p>{props.product.productName}</p>
        </header>
        <section>
          <div>{props.product.description}</div>
        </section>
      </article>
    </div>
  );
}
