import React from "react";
import Pfp from "../assets/images/pfp.svg";
import { NavLink } from "react-router-dom";
import { FiAlignRight } from "react-icons/fi";
import UseToggle from "../hooks/UseToggle";
import "../styles/components/navbar.css";

function Toggle({ toggleSidebar, background }) {
  return (
    <div
      className={`toggle ${
        background ? "active-p" : ""
      } position-relative d-flex align-items-center justify-content-between gap-3 rounded-5`}
    >
      <UseToggle className="d-none d-lg-block" />
      <NavLink to="/profile">
        <img src={Pfp} alt="Profile Photo" className="pfp" />
      </NavLink>
      <FiAlignRight
        className="bars d-sm-block d-lg-none fs-3"
        onClick={toggleSidebar}
      />
    </div>
  );
}

export default Toggle;
