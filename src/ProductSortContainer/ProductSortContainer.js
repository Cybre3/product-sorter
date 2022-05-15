import React, { useState } from "react";
import OrganizedList from "./OrganizedList/OrganizedList";
import UnorganizedStartList from "./UnorganizedStartList/UnorganizedStartList";
import "./ProductSortContainer.css";

const startList = [
  {
    productName: "Appricot",
    productQty: 20.4,
  },
  {
    productName: "Fridge",
    productQty: 1500,
  },
  {
    productName: "TV",
    productQty: 1499,
  },
  {
    productName: "Deodorant",
    productQty: 10,
  },
  {
    productName: "Boiler",
    productQty: 300,
  },
  {
    productName: "Apple",
    productQty: 1.25,
  },
  {
    productName: "Anti-bug spray",
    productQty: 15,
  },
  {
    productName: "T-Shirt",
    productQty: 10,
  },
];

function ProductSortContainer(props) {
  const [list, setList] = useState(startList);
  const [clickTrue, setClickTrue] = useState(false);
  const [sortedList, setSortedList] = useState({});

  function onSubmit(values) {
    values.productQty = Number(values.productQty);
    setList((list) => [...list, values]);
  }

  function handleSort() {
    let productsMap = new Map();
    const tempList = [...list];
    const sortedList = tempList.sort((a, b) => a.productName.localeCompare(b.productName));
    /*  console.log('sorted list', sortedList); */

    for (let item of sortedList) {
      /*  console.log('inside for loop', sortedList[key]) */
      const { productName } = item;
      let firstLetter = productName[0].toUpperCase();

      if (!productsMap.has(firstLetter)) {
        productsMap.set(firstLetter, []);
      }

      productsMap.get(firstLetter).push(item);
    }

    setSortedList(productsMap);
    setClickTrue(true)
  };

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
