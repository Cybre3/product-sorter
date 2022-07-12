import React from "react";

function ListChild(props) {
  return (
    <li className={props.liClassName}>
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
        onClick={() => {
          props.handleDelete(props.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default ListChild;
