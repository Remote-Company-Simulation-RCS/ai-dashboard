import React from "react";
import CountUp from "react-countup";

function BlueChartStick(props) {
  return (
    <div className={`blue-chart-stick d-flex flex-column justify-content-end ${props.extraClass}`}>
      <div className="blue-chart-info">
        <h3 className="fw-bold"><CountUp end={props.quantity} separator="," /></h3>
        <p className="text-white-50">{props.subject}</p>
      </div>
      <div className={`blue-chart-stick-background order-${props.order}`} style={{height: `${props.height}%`}}></div>
    </div>
  );
}

export default BlueChartStick;
