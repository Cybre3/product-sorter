import React from "react";
import "./OrganizedList.css";

function OrganizedList(props) {
  const { sortedList, clicked } = props;
  const sortedListArr = Array.from(sortedList());
  console.log(sortedListArr);
  return (
    <div className="final-list-container">
      <ul className="ol-start-list">
        {clicked
          ? sortedListArr.map((key, index) => (
              <div key={index}>
                <span>{key[0]}</span>
                {key[1].map((item, index) => (
                  <div key={index}>
                    <span>
                      {item.productName}:{item.productQty}
                    </span>
                  </div>
                ))}
              </div>
            ))
          : null}
      </ul>
    </div>
  );
}

export default OrganizedList;
