import * as actionTypes from "./productGetActionTypes";

const initialState = {
  loading: false,
  products: [],
  error: "",
};
const productGetReducer = (state = initialState, action) => {
  let newState = {};
  console.log(action);
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      console.log("reque");
      newState = {
        ...state,
        loading: true,
      };
      break;

    case actionTypes.GET_PRODUCTS_SUCCESS:
      console.log("success");
      newState = {
        loading: false,
        products: action.payload,
        error: "",
      };
      break;

    case actionTypes.GET_PRODUCTS_FAILURE:
      console.log("failure");
      newState = {
        loading: false,
        products: [],
        error: action.payload,
      };
      break;

    default:
      console.log("default");
      newState = { ...state };
      break;
  }
  return newState;
};

export default productGetReducer;
