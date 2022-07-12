import React from "react";
import "./OrganizedList.css";
import html2pdf from "html2pdf.js";

function OrganizedList(props) {
  const { sortedList, clicked } = props;
  const sortedListArr = Array.from(sortedList);

  function printList() {
    var divContents = document.getElementById("ol-print-download").innerHTML;
    var a = window.open("", "", "height=500, width=500");
    a.document.write(divContents);
    a.print();
  }

  function download() {
    var element = document.getElementById("ol-print-download");
    html2pdf(element);
  }

  return (
    <div className="final-list-container">
      {clicked ? (
        <div className="ol-btn-container">
          <button
            className="ol-print-list-btn"
            onClick={() => {
              printList();
            }}
          >
            Print
          </button>
          <button id="downloadPDF" onClick={download}>
            Download
          </button>
        </div>
      ) : null}
      <ul
        className="ol-start-list"
        style={{ textAlign: !clicked ? "center" : "left" }}
        id="ol-print-download"
      >
        {clicked ? (
          sortedListArr.map((letterGroup, index) => (
            <div key={index} id="ol" className="ol-group">
              <span>{letterGroup[0]}</span>
              {letterGroup[1].map((item, index) => (
                <div className="ol-item" key={index}>
                  <span className="ol-prod-name">{item.productName}</span>
                  <span className="ol-item-colon">:</span>
                  <span className="ol-prod-qty">{item.productQty}</span>
                </div>
              ))}
            </div>
          ))
        ) : (
          // eslint-disable-next-line
          <span>
            Click sort button to sort list 🙂
          </span>
        )}
      </ul>
      <div id="editor"></div>
    </div>
  );
}

export default OrganizedList;
