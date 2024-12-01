import React from "react";
import Navbar from "../components/Navbar.jsx";
import ActivityProfile from "../components/ActivityProfile.jsx";
import CustomerDetails from "../components/CustomerDetails.jsx";
import CustomerSecurity from "../components/CustomerSecurity.jsx";
import "../styles/pages/profilePage.css";
import "../styles/main.css";

export default function ProfilePage() {
  return (
    <div className="profile-page">
      <Navbar background={true} />
      <div className="profile-page-container d-flex justify-content-between align-content-center px-4">
        <div className="customer-info">
          <CustomerDetails />
          <CustomerSecurity />
        </div>
        <div className="overview-info">
          <h2 className="fw-bold fs-5">Activity</h2>
        </div>
        <ActivityProfile />
      </div>
    </div>
  );
}
