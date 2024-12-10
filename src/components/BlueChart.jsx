import React from "react";
import "../styles/components/blueChart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./Button.jsx";
import CountUp from "react-countup";
import BlueChartStick from "./BlueChartStick.jsx";

function BlueChart() {
  return (
    <div className="blue-chart p-4">
      <div className="blue-chart-top">
        <h6>Main topics of questions</h6>
        <div className="blue-chart-questions d-flex gap-3 flex-wrap mt-3">
          <Button className="btn rounded-pill chart-btn">All time</Button>
          <Button className="btn rounded-pill chart-btn">Last year</Button>
          <Button className="btn rounded-pill chart-btn">Last 6 months</Button>
          <Button className="btn rounded-pill chart-btn active-button">
            Last quarter
          </Button>
          <Button className="btn rounded-pill chart-btn d-md-flex d-lg-none d-xxl-flex">Custom</Button>
        </div>
      </div>
      <div className="blue-chart-middle mt-3">
        <div className="blue-chart-container d-flex justify-content-between flex-wrap">
          <BlueChartStick
            quantity={42000}
            subject="economic questions"
            height="80"
            order="1"
            extraClass="d-flex"
          />
          <BlueChartStick
            quantity={31650}
            subject="default chat with AI"
            height="60"
            order="2"
            extraClass="d-flex"
          />
          <BlueChartStick
            quantity={18905}
            subject="other questions"
            height="40"
            order="3"
            extraClass="d-none d-sm-flex "
          />
          <BlueChartStick
            quantity={12203}
            subject="questions about future"
            height="20"
            order="4"
            extraClass="d-none d-md-flex d-lg-none d-xxl-flex"
          />
        </div>
      </div>
      <div className="blue-chart-bottom mt-3">
        <div className="row">
          <div className="col-lg-6 d-flex flex-row gap-2 align-items-center">
            <h1 className="fw-bold mb-0 display-5">+<CountUp end={14} separator="," />%</h1>
            <p className="mb-0">
              overall issues <br /> growth
            </p>
          </div>
          <div className="col-lg-6 d-flex flex-row gap-2 align-items-center">
            <h1 className="fw-bold mb-0 display-5">+<CountUp end={4.5} decimal="." decimals={1}  />%</h1>
            <p className="mb-0">
              successfully resolved <br/> issues growth
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlueChart;
