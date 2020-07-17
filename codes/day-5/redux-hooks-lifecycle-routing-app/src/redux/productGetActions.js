import * as actionTypes from "./productGetActionTypes";

export const getProductsRequestAction = () => {
  return {
    type: actionTypes.GET_PRODUCTS_REQUEST,
  };
};

export const getProductsSuccessAction = (products) => {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const getProductsFailureAction = (error) => {
  return {
    type: actionTypes.GET_PRODUCTS_FAILURE,
    payload: error,
  };
};
