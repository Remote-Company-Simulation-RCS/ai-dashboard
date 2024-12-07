import React from "react";
import "../styles/components/growingChart.css";

function FillBar({ fillHeight, background }) {
  return (
    <div className="outer-bar">
      <div
        className={`inner-bar ${background && "last-bar"}`}
        style={{ height: fillHeight }}
      ></div>
    </div>
  );
}

export default FillBar;
