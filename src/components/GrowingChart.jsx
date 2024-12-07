import React from "react";
import "../styles/components/growingChart.css";
import FillBar from "./FillBar";

const Chart = () => {
  return (
    <div className="chart-container rounded-5 p-4">
      <h6 className="">Successfully resolved issues</h6>
      <div className="progress-data"></div>
      <div className="average d-flex align-items-center gap-3">
        <span className="fs-1 fw-bolder">81%</span>
        <span className="lh-1 fw-bold">
          average
          <br /> last year
        </span>
      </div>
      <div className="progress-bars d-flex gap-3">
        <FillBar fillHeight="50%" />
        <FillBar fillHeight="55%" />
        <FillBar fillHeight="65%" />
        <FillBar fillHeight="75%" />
        <FillBar fillHeight="80%" />
        <FillBar fillHeight="100%" background={true} />
      </div>
      <div className="progress-data d-flex justify-content-between mt-3 fw-bold fs-6">
        <span>Oct 2023</span>
        <span>Dec 2023</span>
        <span>Apr 2023</span>
      </div>
    </div>
  );
};

export default Chart;
