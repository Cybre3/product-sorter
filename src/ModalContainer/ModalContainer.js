import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import "./ModalContainer.css";

function ModalContainer(props) {
  const [hide, setHide] = useState("fadein .4s linear");
  const [modalStartListOption, setModalStartListOption] = useState("");
  const { childToParent } = props;

  function handleEmptyListRequest(e) {
    if (e.target.innerText === "Empty") {
      setModalStartListOption("empty");
    } else if (e.target.innerText === "Example") {
      setModalStartListOption("example");
    }
  }

  useEffect(() => {
    childToParent(modalStartListOption);
  }, [childToParent, modalStartListOption]);

  return (
    <div style={{ animation: hide }} className="modal-body">
      <h2 className="modal-title">Welcome to Product-Sorter!</h2>
      <hr />
      <h4 className="modal-subtitle">Visit other Small Coding Projects</h4>
      <p className="modal-descript">
        This{" "}
        <a
          href="#/"
          role="button"
          className="modal-popover-btn"
          data-bs-toggle="popover"
          title="Popover title"
          data-bs-content="Popover body content is set in this attribute."
        >
          button
        </a>{" "}
        allows you to view other projects.
      </p>
      <hr />
      <h4 className="modal-subtitle">Start list choices</h4>
      <p className="modal-descript">
        Would you like to start with an{" "}
        <button
          className="ul-list-choice"
          onClick={(e) => handleEmptyListRequest(e)}
        >
          Empty
        </button>{" "}
        or{" "}
        <button
          className="ul-list-choice"
          onClick={(e) => handleEmptyListRequest(e)}
        >
          Example
        </button>{" "}
        list?
      </p>
      <hr />
      <div className="modal-button-container">
        <button
          onClick={() => {
            setHide("fadeout .4s ease-out forwards");
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default ModalContainer;
