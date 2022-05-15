import React from "react";

function ListChild(props) {
  return (
    <li className={props.liClass}>
      <span className={props.prodClass}>{props.productName}</span>
      <span className={props.qtyClass}>{props.productQty}</span>
      {/*  <button
        onClick={() => {
          props.handleEdit();
        }}
      >
        Edit
      </button> */}
      <button
        id={props.btnId}
        onClick={() => {
          props.handleDelete(props.id, props.liClass, props.btnId);
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default ListChild;
