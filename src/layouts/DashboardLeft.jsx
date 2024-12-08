import React from "react";
import GrowingChart from "../components/GrowingChart";
import NewUpdates from "../components/NewUpdates";
import DashAcievements from "../components/DashAcievements";

function DashboardLeft() {
  return (
    <div className="dashboard-left d-flex flex-column justify-content-between">
      <GrowingChart />
      <NewUpdates />
      <DashAcievements />
    </div>
  );
}

export default DashboardLeft;
