import React, { Component, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import fetchProductsAsync from "./redux/fetchProductsAsync";

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, []);
  // componentDidMount() {
  //   this.props.getProducts();
  // }
  // render() {
  // const { products, loading, error } = { ...props };
  let design = null;
  if (loading) {
    design = <h1>Loading...</h1>;
  }
  if (error) {
    design = <h1>{error}</h1>;
  } else {
    design = (
      <ul style={{ listStyleType: "none" }}>
        {products.map((p, i) => {
          return <li key={p.productId}>{p.productName}</li>;
        })}
      </ul>
    );
  }
  return design;
  //}
};

//matchStateToProps => state:loading, products, error
//loading, products, error
// const matchStateToProps = (state) => {
//   return {
//     products: state.products,
//     loading: state.loading,
//     error: state.error,
//   };
// };
//dispatch: fetcProductsAsync
//getProducts <--connect-->dispatch(fetcProductsAsync())
// const matchDispatchToProps = (dispatch) => {
//   return {
//     getProducts: () => dispatch(fetchProductsAsync()),
//   };
// };

// const temp = connect(matchStateToProps, matchDispatchToProps);
// temp(ProductList);
//export default connect(matchStateToProps, matchDispatchToProps)(ProductList);
export default ProductList;
