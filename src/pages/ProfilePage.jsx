import React from "react";
import Navbar from "../components/Navbar.jsx";
import ActivityProfile from "../components/ActivityProfile.jsx";
import CustomerDetails from "../components/CustomerDetails.jsx";
import CustomerSecurity from "../components/CustomerSecurity.jsx";
import "../styles/pages/profilePage.css";
import "../styles/main.css";

export default function ProfilePage() {
  return (
    <div className="profile-page px-4">
      <Navbar background={true} />
      <ActivityProfile />
      <CustomerDetails />
      <CustomerSecurity />
    </div>
  );
}
