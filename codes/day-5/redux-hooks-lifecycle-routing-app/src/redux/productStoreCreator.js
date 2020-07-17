import { createStore, applyMiddleware, combineReducers } from "redux";
import productGetReducer from "./productGetReducer";
import thunk from "redux-thunk";
// import reduxLogger, { logger } from "redux-logger";

// const rootReducer = combineReducers({
//   pgr: productGetReducer.state,
//   addpr: someother.state,
// });
// const store = createStore(tootReducer, applyMiddleware(thunk));
const store = createStore(productGetReducer, applyMiddleware(thunk));
export default store;
/*

*/
