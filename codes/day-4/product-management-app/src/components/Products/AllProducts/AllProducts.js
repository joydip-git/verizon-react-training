import React, { Component } from "react";
import ProductTable from "../ProductTable/ProductTable";

export default class AllProducts extends Component {
  state = {
    products: [
      {
        productId: 1,
        productName: "Leaf Rake",
        productCode: "GDN-0011",
        releaseDate: "March 19, 2016",
        description: "Leaf rake with 48-inch wooden handle.",
        price: 19.95,
        starRating: 4,
        imageUrl:
          "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png",
      },
      {
        productId: 2,
        price: "50",
        productName: "Garden Cart",
        description: "15 gallon capacity rolling garden cart",
        productCode: "GDN-0023",
        releaseDate: "March 18, 2019",
        starRating: "4",
        imageUrl:
          "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png",
      },
    ],
  };
  render() {
    return <ProductTable productArray={this.state.products} />;
  }
}
