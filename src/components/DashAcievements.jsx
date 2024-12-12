import React from "react";
import CountUp from "react-countup";
import "../styles/components/achievements.css";

function DashAcievements() {
  return (
    <div className="achievements on-dashboard rounded-5 p-2">
      <div className="d-flex flex-column py-3 px-4 align-items-start">
        <span className="fw-medium">
          <CountUp end={754588} separator="," />
        </span>
        <p className="text-secondary-50 mb-0">successfully resolved issues</p>
      </div>
      <div className="answers d-flex flex-column rounded-5 py-3 px-4 align-items-start">
        <span className="fw-medium">
          <CountUp end={95} separator="," />%
        </span>
        <p className="text-secondary-50 mb-0">answers have 5-star</p>
      </div>
      <div className="d-flex flex-column py-3 px-4 align-items-start">
        <span className="fw-medium">
          <CountUp end={87580} separator="," />
        </span>
        <p className="text-secondary-50 mb-0">new topics learned</p>
      </div>
    </div>
  );
}

export default DashAcievements;
