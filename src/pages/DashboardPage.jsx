import React from "react";
import Navbar from "../components/Navbar";
import DashboardRight from "../layouts/DashboardRight";
import DashboardLeft from "../layouts/DashboardLeft";

import "../styles/main.css";
import "../styles/pages/dashboardPage.css";

function DashboardPage() {
  return (
    <>
      <Navbar />
    <div className="px-3 w-100 d-flex">
      <DashboardLeft />
      <DashboardRight />
    </div>
    </>
  );
}

export default DashboardPage;
