import React from "react";
import Navbar from "../components/Navbar.jsx";
import "../styles/pages/profilePage.css";
import "../styles/main.css";

export default function ProfilePage() {
  return (
    <div className="profile-page">
      <Navbar background={true} />
    </div>
  );
}
