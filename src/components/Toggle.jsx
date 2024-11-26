import React from "react";
import Pfp from "../assets/images/pfp.svg";
import { FiAlignRight } from "react-icons/fi";
import UseToggle from "../hooks/UseToggle";
import "../styles/components/navbar.css";

function Toggle({ toggleSidebar }) {
  return (
    <div className="toggle position-relative d-flex align-items-center justify-content-between gap-3 rounded-5">
      <UseToggle className="d-none d-lg-block" />
      <img src={Pfp} alt="Profile Photo" className="pfp" />
      <FiAlignRight
        className="bars d-sm-block d-lg-none fs-3"
        onClick={toggleSidebar}
      />
    </div>
  );
}

export default Toggle;
