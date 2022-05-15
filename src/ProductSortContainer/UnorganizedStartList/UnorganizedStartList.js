import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import ListChild from "../../Utilities/ListChild";
import FormikControl from "../../Utilities/Formik/FormikControl";

import "./UnorganizedStartList.css";

function UnorganizedStartList(props) {
  const { list, onSubmit, handleDelete } = props;

  const initialValues = {
    productName: "",
    productQty: "",
  };

  const validationSchema = Yup.object({
    productName: Yup.string().required("Required"),
    productQty: Yup.number().required("Required").positive(),
  });

  function handleEdit(id) {}
  /* 
  const exportList = createContext();

  const capturedList = () => {
    return (
      <>
        <exportList.Provider value={list}>
          <OrganizedList />
        </exportList.Provider>
      </>
    );
  }; */

  return (
    <div className="start-list-container">
      <ul className="ul-start-list">
        {list.map((product, index) => (
          <ListChild
            key={index}
            id={index}
            btnId='ul'
            liClass="ul-list-container"
            prodClass="ul-product"
            qtyClass="ul-qty"
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
