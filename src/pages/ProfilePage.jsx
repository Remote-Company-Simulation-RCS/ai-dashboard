import React from "react";
import Navbar from "../components/Navbar.jsx";
import "../styles/pages/profilePage.css";
import "../styles/main.css";
import ActivityProfile from "../components/ActivityProfile.jsx";

export default function ProfilePage() {
  return (
    <div className="profile-page">
      <Navbar background={true} />
      <ActivityProfile />
    </div>
  );
}
