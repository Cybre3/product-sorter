import React, { useState } from "react";

import OrganizedList from "./OrganizedList/OrganizedList";
import UnorganizedStartList from "./UnorganizedStartList/UnorganizedStartList";
import startList from "./startList.json";

import "./ProductSortContainer.css";

function ProductSortContainer(props) {
  const [list, setList] = useState(startList);
  const [clickTrue, setClickTrue] = useState(false);
  const [sortedList, setSortedList] = useState({});


  function onSubmit(values) {
    values.productQty = Number(values.productQty);
    setList((list) => [...list, values]);
    document.querySelector("Form").reset();
  }

  function handleSort() {
    let productsMap = new Map();
    const tempList = [...list];
    const sortedList = tempList.sort((a, b) => a.productName.localeCompare(b.productName));
    /*  console.log('sorted list', sortedList); */

    for (let item of sortedList) {
      const { productName } = item;
      let firstLetter = productName[0].toUpperCase();

      if (!productsMap.has(firstLetter)) {
        productsMap.set(firstLetter, []);
      }

      productsMap.get(firstLetter).push(item);
    }

    setSortedList(productsMap);
    setClickTrue(true);
  }

  return (
    <div className="product-sort-container">
      <UnorganizedStartList list={list} onSubmit={onSubmit} setList={setList} />
      <button className="sort-btn" onClick={handleSort}>
        SORT
      </button>
      <OrganizedList sortedList={sortedList} clicked={clickTrue} />
    </div>
  );
}

export default ProductSortContainer;
