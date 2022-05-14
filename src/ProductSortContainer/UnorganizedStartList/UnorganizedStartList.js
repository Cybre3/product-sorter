import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import ListChild from "../../Utilities/ListChild";
import FormikControl from "../../Utilities/Formik/FormikControl";

import "./UnorganizedStartList.css";

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


function UnorganizedStartList(props) {
  const [list, setList] = useState(startList);

  const initialValues = {
    productName: "",
    productQty: "",
  };
  
  const validationSchema = Yup.object({
    productName: Yup.string().required("Required"),
    productQty: Yup.number().required("Required").positive(),
  });
  
  function onSubmit(values) {
    values.productQty = Number(values.productQty);
    setList((list) => [...list, values]);
  }
    
  function handleDelete(id) {
    const newList = list.filter((item, index) => id !== index)
    setList(newList);
  }
  function handleEdit(id) {
    
  }

  return (
    <div className="start-list-container">
      <ul className="ul-start-list">
        {list.map((product, index) => (
          <ListChild 
            key={index}
            id={index}
            liClass='ul-list-container'
            prodClass='ul-product'
            qtyClass='ul-qty'
            productName={product.productName}
            productQty={product.productQty}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </ul>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form className="input-container">
          <FormikControl control="input" name="productName" placeholder="Add new item here" />
          <FormikControl control="input" name="productQty" placeholder="Add amount here" />
          <button type="reset" className="ul-btn-clear">
            CLEAR
          </button>
          <button type="submit" className="ul-btn-add">
            ADD
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default UnorganizedStartList;
