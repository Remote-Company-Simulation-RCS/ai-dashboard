import React from "react";
import "../styles/components/blueChart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./Button.jsx";
import BlueChartStick from "./BlueChartStick.jsx";

function BlueChart() {
  return (
    <div className="blue-chart p-4 mx-4">
      <div className="blue-chart-top">
        <h6>Main topics of questions</h6>
        <div className="blue-chart-questions d-flex gap-3 flex-wrap mt-3">
          <Button className="btn rounded-pill chart-btn">All time</Button>
          <Button className="btn rounded-pill chart-btn">Last year</Button>
          <Button className="btn rounded-pill chart-btn">Last 6 months</Button>
          <Button className="btn rounded-pill chart-btn active-button">
            Last quarter
          </Button>
          <Button className="btn rounded-pill chart-btn">Custom</Button>
        </div>
      </div>
      <div className="blue-chart-middle mt-3">
        <div className="blue-chart-container d-flex justify-content-between flex-wrap">
          <BlueChartStick
            quantity="42,000"
            subject="economic questions"
            height="80"
            order="1"
            extraClass="d-flex"
          />
          <BlueChartStick
            quantity="31,650"
            subject="default chat with AI"
            height="60"
            order="2"
            extraClass="d-none d-md-flex"
          />
          <BlueChartStick
            quantity="18,905"
            subject="other questions"
            height="40"
            order="3"
            extraClass="d-none d-lg-flex"
          />
          <BlueChartStick
            quantity="12,203"
            subject="questions about future"
            height="20"
            order="4"
            extraClass="d-none d-xl-flex"
          />
        </div>
      </div>
      <div className="blue-chart-bottom mt-3">
        <div className="row">
          <div className="col-lg-6 d-flex flex-row gap-2 align-items-center">
            <h1 className="fw-bold mb-0 display-5">+14%</h1>
            <p className="mb-0">
              overall issues <br /> growth
            </p>
          </div>
          <div className="col-lg-6 d-flex flex-row gap-2 align-items-center">
            <h1 className="fw-bold mb-0 display-5">+4.5%</h1>
            <p className="mb-0">
              successfully resolved <br /> issues growth
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlueChart;
