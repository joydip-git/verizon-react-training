// import Axios from "axios";
const Axios = require("axios");

export default class ProductService {
  constructor() {}
  baseUrl = "http://127.0.0.1:8081/productservice";
  getProducts() {
    return Axios.get(this.baseUrl);
  }
  getProductById(pid) {
    return Axios.get(`${this.baseUrl}/${pid}`);
  }
  addProduct(product) {
    return Axios.post(this.baseUrl, product);
  }
  deleteProduct(pid) {
    return Axios.delete(`${this.baseUrl}/${pid}`);
  }
  updateProduct(product) {
    return Axios.put(this.baseUrl, product);
  }
}
