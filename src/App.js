import React, { useState } from "react";
import ProductSortContainer from "./ProductSortContainer/ProductSortContainer";
import "./App.css";
import ModalContainer from "./ModalContainer/ModalContainer";

function App() {
  const [modalClick, setModalClick] = useState("");
  const [modalVisible, setModalVisible] = useState(true);

  const childToParent = (data) => {
    setModalClick(data.modalStartListOption);
    if (data.hide.includes("fadeout")) {
      setModalVisible(false);
    }
  };

  return (
    <div className="App">
      {modalVisible ? <ModalContainer childToParent={childToParent} /> : null}

      <ProductSortContainer modalClick={modalClick} />
    </div>
  );
}

export default App;
