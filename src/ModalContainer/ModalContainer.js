import React, { useEffect, useState } from "react";
import $ from "jquery";

import CodingChallengesContainer from "./CodingChallengesContainer/CodingChallengesContainer";

import "./ModalContainer.css";

function ModalContainer(props) {
  const [disabled, setDisabled] = useState(false);
  const [showProjectOptions, setShowProjectOptions] = useState(false);
  const [modalStartListOption, setModalStartListOption] = useState("");
  const [data, setData] = useState({ disabled, modalStartListOption });

  const { childToParent } = props;

  function handleEmptyListRequest(e) {
    if (e.target.innerText === "Empty") {
      setModalStartListOption("empty");
    } else if (e.target.innerText === "Example") {
      setModalStartListOption("example");
    }
  }

  function hideModal() {
    $(".modal-body").css({ animation: "fadeout .4s ease-out forwards" });
    setTimeout(() => {
      $(".modal-body").css("display", "none");
      setDisabled(true);
    }, 500);
  }

  useEffect(() => {
    setData({ disabled, modalStartListOption });
  }, [disabled, modalStartListOption]);

  useEffect(() => {
    childToParent(data);
  }, [childToParent, data]);

  function optionsToggle() {
    showProjectOptions === true ? setShowProjectOptions(false) : setShowProjectOptions(true);
  }

  if (disabled === false) {
    $("input").attr("disabled", "disabled");
    $(".start-list-container button").attr("disabled", "disabled");
  } else {
    $("input").removeAttr("disabled");
    $(".start-list-container button").removeAttr("disabled");
  }

  return (
    <div className="modal-body">
      <h2 className="modal-title">Welcome to Product-Sorter!</h2>
      <hr />
      <h4 className="modal-subtitle">Visit other Small Coding Projects</h4>
      <p className="modal-descript">
        This{" "}
        <button onClick={() => optionsToggle()} className="modal-popover-btn">
          button
        </button>
        {showProjectOptions ? <CodingChallengesContainer /> : null} allows you to view other Small
        Coding Challenge projects.
      </p>
      <hr />
      <h4 className="modal-subtitle">Start list choices</h4>
      <p className="modal-descript">
        Would you like to start with an{" "}
        <button className="ul-list-choice" onClick={(e) => handleEmptyListRequest(e)}>
          Empty
        </button>{" "}
        or{" "}
        <button className="ul-list-choice" onClick={(e) => handleEmptyListRequest(e)}>
          Example
        </button>{" "}
        list?
      </p>
      <hr />
      <div className="modal-button-container">
        <a href="http://starrika-mccloud-portfolio.herokuapp.com/">Back to portfolio</a>
        <button onClick={() => hideModal()}>Continue</button>
      </div>
    </div>
  );
}

export default ModalContainer;
