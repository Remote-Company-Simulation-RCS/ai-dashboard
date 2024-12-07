import React from "react";
import Navbar from "../components/Navbar";
import GrowingChart from "../components/GrowingChart";
import "../styles/main.css";
import "../styles/pages/dashboardPage.css";

function DashboardPage() {
  return (
    <div className="px-3">
      <Navbar />
      <GrowingChart />
    </div>
  );
}

export default DashboardPage;
