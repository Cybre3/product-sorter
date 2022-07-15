import React, { useState } from "react";
import ProductSortContainer from "./ProductSortContainer/ProductSortContainer";
import "./App.css";
import ModalContainer from "./ModalContainer/ModalContainer";

function App() {
  const [modalClick, setModalClick] = useState("");

  const childToParent = (data) => {
    setModalClick(data);
  };

  return (
    <div className="App">
      <ModalContainer childToParent={childToParent}/>
      <ProductSortContainer modalClick={modalClick}/>
    </div>
  );
}

export default App;
