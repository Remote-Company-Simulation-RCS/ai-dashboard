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
      <div className="mx-3" >
      <AvatarProfile />
      </div>
      <div className="row mx-3 my-2">
        <div className="col-xl-3 col-lg-6 ">
        <CustomerData     />
        </div>
        <div className="col-xl-3 col-lg-6">
        <OverviewProfile  />
       </div>
        <div className="col-xl-6 col-lg-12">
        <ActivityProfile  />
        </div>
      </div>
    </div>
  );
}
