import * as actions from "./productGetActions";
import axios from "axios";

const fetchProductsAsync = () => {
  return function (dispatch) {
    console.log("in async");
    dispatch(actions.getProductsRequestAction());
    axios
      .get("http://127.0.0.1:8081/productservice")
      .then((response) => {
        console.log(response.data);
        dispatch(actions.getProductsSuccessAction(response.data));
      })
      .catch((err) => dispatch(actions.getProductsFailureAction(err.message)));
  };
};
export default fetchProductsAsync;
