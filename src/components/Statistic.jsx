import React from "react";
import CountUp from "react-countup";
import Button from "./Button.jsx";
import { Col, Row, Statistic } from "antd";
import { FaPencilRuler } from "react-icons/fa";
import AreaChart from "./AreaChart.jsx";
import "../styles/components/statistic.css";

const formatter = (value) => <CountUp end={value} separator="," />;
export default function Satatistic() {
  return (
    <div className="statistic p-3 gap-3 d-flex flex-column ">
      <div className="statistic-top d-flex flex-column gap-1">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="fw-bold fs-5">Statistics of API requests</h3>
          <Button type="submit" className="btn rounded-pill btn-primary">
            <FaPencilRuler /> Setting
          </Button>
        </div>
        <div>
          <Row className="d-flex gap-5">
            <Col className="p-1">
              <Statistic
                title="the months"
                value={156800}
                formatter={formatter}
              />
            </Col>
            <Col className="p-1">
              <Statistic
                title="this week"
                value={76500}
                precision={2}
                formatter={formatter}
              />
            </Col>
            <Col className="p-1">
              <Statistic
                title="today"
                value={12300}
                precision={2}
                formatter={formatter}
              />
            </Col>
          </Row>
        </div>
      </div>
      <div className="statistic-bottom d-flex flex-column   ">
        <AreaChart />
      </div>
    </div>
  );
}
