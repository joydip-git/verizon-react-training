const redux = require("redux");
const axios = require("axios");
const thunk = require("redux-thunk");
const reduxLogger = require("redux-logger");

//1. store --> JS object
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

//2. action(s) --> JS object and action creator
const GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST";
const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE";

//const ADD_PRODUCT = "ADD_PRODUCT";
const getProductsRequestAction = () => {
  return {
    type: GET_PRODUCTS_REQUEST,
  };
};

const getProductsSuccessAction = (products) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: products,
  };
};

const getProductsFailureAction = (error) => {
  return {
    type: GET_PRODUCTS_FAILURE,
    payload: error,
  };
};

const fetchProductsAsync = () => {
  return (dispatch) => {
    dispatch(getProductsRequestAction());
    axios
      .get("http://127.0.0.1:8081/productservice")
      .then((response) => {
        const act = getProductsSuccessAction(response.data);
        dispatch(act);
      })
      .catch((err) => dispatch(getProductsFailureAction(err.message)));
  };
};

//3. reducer --> function
const initialState = {
  loading: false,
  products: [],
  error: "",
};
const productGetReducer = (state = initialState, action) => {
  let newState = null;
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      console.log("reque");
      newState = {
        ...state,
        loading: true,
      };
      break;

    case GET_PRODUCTS_SUCCESS:
      console.log("success");
      newState = {
        loading: false,
        products: action.payload,
        error: "",
      };
      break;
    case GET_PRODUCTS_FAILURE:
      console.log("failure");
      newState = {
        loading: false,
        products: [],
        error: action.payload,
      };
      break;
    default:
      console.log("default");
      newState = {
        ...state,
      };
      break;
  }
  return newState;
};

const store = createStore(productGetReducer, applyMiddleware(thunk.default));
const unsubscribe = store.subscribe((newState) => console.log(newState));

// const getProductReqActionObect = getProductsRequestAction();
// store.dispatch(getProductReqActionObect);
store.dispatch(fetchProductsAsync());

unsubscribe();

//4. subscription
