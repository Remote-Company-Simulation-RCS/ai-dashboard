import React from "react";
import Navbar from "../components/Navbar.jsx";
import ActivityProfile from "../components/ActivityProfile.jsx";
import CustomerDetails from "../components/CustomerDetails.jsx";
import CustomerSecurity from "../components/CustomerSecurity.jsx";
import "../styles/pages/profilePage.css";
import "../styles/main.css";
import AvatarProfile from "../components/AvatarProfile.jsx";

export default function ProfilePage() {
  return (
    <div className="profile-page">
      <Navbar background={true} />
      <AvatarProfile />
      <ActivityProfile />
      <CustomerDetails  />
      <CustomerSecurity />
    </div>
  );
}
