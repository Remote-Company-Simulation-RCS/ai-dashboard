import React from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import Pfp from "../assets/images/pfp.svg";
import style from '../styles/components/navbar.css'

function Toggle() {
  return (
    <div className="toggle position-relative d-flex align-items-center justify-content-between rounded-5">
      <FaMoon className="tIcon" />
      {/* <IoSunnyOutline className="text-white tIcon" /> */}
      <img src={Pfp} alt="Profile Photo" />
    </div>
  );
}

export default Toggle;
