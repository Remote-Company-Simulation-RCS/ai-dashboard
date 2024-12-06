import React from "react";
import Navbar from "../components/Navbar.jsx";
import AvatarProfile from "../components/AvatarProfile.jsx";
import CustomerData from "../layouts/CustomerData.jsx";
import ActivityProfile from "../components/ActivityProfile.jsx";
import OverviewProfile from "../components/OverviewProfile.jsx";
import "../styles/pages/profilePage.css";
import "../styles/main.css";

export default function ProfilePage() {
  return (
    <div className="profile-page">
      <Navbar background={true} />
      <AvatarProfile />
      <div className="profile-page-container row px-3">
        <CustomerData col="col-12 col-md-6 col-xl-3" />
        <OverviewProfile col="col-12 col-md-6 col-xl-3" />
        <ActivityProfile col="col-12 col-xl-6" />
      </div>
    </div>
  );
}
