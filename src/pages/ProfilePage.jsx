import React from "react";
import Navbar from "../components/Navbar.jsx";
import CustomerDetails from "../components/CustomerDetails.jsx";
import CustomerSecurity from "../components/CustomerSecurity.jsx";
import ActivityProfile from "../components/ActivityProfile.jsx";
import OverviewProfile from "../components/OverviewProfile.jsx";
import "../styles/pages/profilePage.css";
import "../styles/main.css";
import AvatarProfile from "../components/AvatarProfile.jsx";

export default function ProfilePage() {
  return (
    <div className="profile-page">
      <Navbar background={true} />
      <AvatarProfile />
      <div className="profile-page-container d-flex justify-content-between align-content-center px-4">
        <div className="customer-info">
          <CustomerDetails />
          <CustomerSecurity />
        </div>
        <div className="overview-info">
          <OverviewProfile />
        </div>
        <ActivityProfile />
      </div>
    </div>
  );
}
