import React from "react";
import "../styles/components/growingChart.css";

function FillBar({ fillHeight, background, extraClass }) {
  return (
    <div className={`outer-bar ${extraClass}`}>
      <div
        className={`inner-bar ${background && "last-bar"} ${extraClass} d-flex`}
        style={{ height: fillHeight }}
      ></div>
    </div>
  );
}

export default FillBar;
