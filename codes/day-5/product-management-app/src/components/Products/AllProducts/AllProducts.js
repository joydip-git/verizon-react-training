import React, { Component } from "react";
import ProductTable from "../ProductTable/ProductTable";
import withProductService from "../../../withProductService";
//import ProductService from "../../../service/productService";

class AllProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    if (this.props.productServiceRef !== null && this.props.productServiceRef) {
      this.props.productServiceRef
        .getProducts()
        .then((response) => {
          console.log(response.data);
          this.setState({ products: response.data });
        })
        .catch((err) => console.log(err));
    }
  }
  render() {
    let design = null;
    if (
      this.state.products !== null &&
      this.state.products &&
      this.state.products.length > 0
    ) {
      design = (
        <>
          {this.props.title}
          <ProductTable productArray={this.state.products} />
        </>
      );
    } else {
      design = <span>No Products</span>;
    }
    return design;
  }
}
export default withProductService(AllProducts);
