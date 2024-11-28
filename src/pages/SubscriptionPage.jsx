import React from "react";
import PlanCards from "../layouts/PlanCards";
import Navbar from "../components/Navbar.jsx";
import SubTable from "../layouts/SubTable.jsx";
import SubSlider from "../components/SubSlider.jsx";
import "../styles/pages/subscription.css";

function SubscriptionPage() {
  return (
    <div className="subscription-page-container">
      <Navbar  />
      <SubTable />
      <SubSlider />
      <PlanCards className="mx-3" />
    </div>
  );
}

export default SubscriptionPage;
