import React from "react";
import "./App.css";
import AllProducts from "../components/Products/AllProducts/AllProducts";

// new UpdatedComponent().render();
// return <div>{new AllProducts().render()}</div>;
function App() {
  return (
    <div>
      <AllProducts title="Product Data" />
    </div>
  );
}

export default App;
