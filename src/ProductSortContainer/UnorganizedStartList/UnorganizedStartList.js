import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import ListChild from "../../Utilities/ListChild";
import FormikControl from "../../Utilities/Formik/FormikControl";

import "./UnorganizedStartList.css";

function UnorganizedStartList(props) {
  const { list, onSubmit, setList } = props;

  const initialValues = {
    productName: "",
    productQty: "",
  };

  const validationSchema = Yup.object({
    productName: Yup.string().required("Required"),
    productQty: Yup.number().required("Required").positive(),
  });

  /* function handleEdit(id) {} */

  function handleDelete(id) {
    const newList = list.filter((item, index) => id !== index);
    setList(newList);
  }

  function clearList() {
    setList([]);
  }

  return (
    <div className="start-list-container">
      <ul className="ul-start-list">
        <div className="ul-labels">
          <span className="item-label-span">{list.length < 2 ? "ITEM" : "ITEMS"}</span>
          <span>QTY</span>
        </div>
        {list.map((product, index) => (
          <ListChild
            key={index}
            id={index}
            btnId="ul"
            liClassName="ul-li-container"
            prodClass="ul-product"
            qtyClass="ul-qty"
            productName={product.productName}
            productQty={product.productQty}
            handleDelete={handleDelete}
          />
        ))}
      </ul>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form className="input-container">
          <FormikControl control="input" name="productName" placeholder="Add new item here" />
          <FormikControl control="input" name="productQty" placeholder="Add amount here" />
          <button
            onClick={() => {
              clearList();
            }}
            className="ul-btn-clearAll"
          >
            CLEAR ALL
          </button>
          <div className="form-btns">
            <button type="reset" className="ul-btn-clear">
              CLEAR
            </button>
            <button type="submit" className="ul-btn-add">
              ADD
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default UnorganizedStartList;
