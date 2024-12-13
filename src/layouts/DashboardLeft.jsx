import React from "react";
import GrowingChart from "../components/GrowingChart";
import NewUpdates from "../components/NewUpdates";
import DashAcievements from "../components/DashAcievements";

function DashboardLeft() {
  return (
    <div className="d-flex flex-column justify-content-lg-between ">
      <div className="d-flex flex-column flex-sm-row flex-lg-column   gap-3">
        <GrowingChart />
        <NewUpdates />
      </div>
      <DashAcievements />
    </div>
  );
}

export default DashboardLeft;
