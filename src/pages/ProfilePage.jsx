import React from "react";
import "../styles/pages/profilePage.css";
import "../styles/main.css";
import Navbar from "../components/Navbar.jsx";

export default function ProfilePage() {
  return (
    <div className="profile-page">
      <Navbar background={true} />
    </div>
  );
}