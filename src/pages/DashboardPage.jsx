import React from "react";
import Navbar from "../components/Navbar";
import DashboardRight from "../layouts/DashboardRight";
import DashboardLeft from "../layouts/DashboardLeft";
import DashboardCenter from "../layouts/DashboardCenter";

import "../styles/main.css";
import "../styles/pages/dashboardPage.css";

function DashboardPage() {
  return (
    <div className="overflow-hidden ">
      <Navbar />
      <div className="px-3 mb-3 gap-3 d-flex flex-column flex-lg-row  overflow-hidden">
        <DashboardLeft />
        <DashboardCenter />
        <DashboardRight />
      </div>
    </div>
  );
}

export default DashboardPage;
