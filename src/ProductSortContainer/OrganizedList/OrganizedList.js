import React, { useEffect } from "react";
import "./OrganizedList.css";

function OrganizedList(props) {
  const { sortedList, clicked } = props;
  const sortedListArr = Array.from(sortedList);
  console.log(sortedList)
  useEffect(() => {
    console.log("re-rendered");
  });

  return (
    <div className="final-list-container">
      <ul className="ol-start-list">
        {clicked
          ? sortedListArr.map((letterGroup, index) => (
              <div key={index} id="ol">
                <span>{letterGroup[0]}</span>
                {letterGroup[1].map((item, index) => (
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
