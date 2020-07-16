// import ProductService from "./service/productService";
import React from "react";
// import Axios from "axios";
import ProductService from "./service/productService";

const withProductService = (WrappedCommponent) => {
  class WithProductService extends React.Component {
    constructor() {
      super();
      this.productService = new ProductService();
    }
    render() {
      return (
        <WrappedCommponent
          {...this.props}
          productServiceRef={this.productService}
        />
      );
    }
  }
  return WithProductService;
};

export default withProductService;
