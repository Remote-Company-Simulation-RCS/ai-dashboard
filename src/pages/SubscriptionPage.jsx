import React from "react";
import PlanCards from "../layouts/PlanCards.jsx";
import Navbar from "../components/Navbar.jsx";
import SubTable from "../layouts/SubTable.jsx";
import "../styles/pages/subscription.css";

function SubscriptionPage() {
  return (
    <div className="subscription-page-container">
      <Navbar />
      <SubTable />
      <PlanCards />
    </div>
  );
}

export default SubscriptionPage;
