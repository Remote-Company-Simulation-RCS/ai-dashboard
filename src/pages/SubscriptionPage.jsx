import React from "react";
import Navbar from "../components/Navbar.jsx";
import SubTable from "../components/SubTable.jsx";
import SubSlider from "../components/SubSlider.jsx";
import "../styles/pages/subscription.css";

export default function SubscriptionPage() {
  return (
    <div className="subscription-page-container">
      <Navbar active="subscription" />
      <SubTable />
      <SubSlider />
    </div>
  );
}
