import React from "react";
import Toggle from "./Toggle";
import logo from "../assets/icons/logoNoBg.png";
import "../styles/components/navbar.css";

function Navbar() {
  return (
    <nav className="navbar px-4 d-flex justify-content-between">
      <div className="logo-name d-flex gap-2 align-items-center px-3 py-2 rounded-5">
        <img src={logo} alt="Quickit Logo" />
        <h3 className=" fw-bold fst-italic m-0">Quickit</h3>
      </div>
      <div className="nav-links d-flex align-items-center text-white rounded-5">
        <a className="nav-item text-decoration-none d-flex align-items-center px-4 rounded-5">
          Dashboard
        </a>
        <a className="nav-item active text-decoration-none d-flex align-items-center px-4 rounded-5">
          AI Assistant
        </a>
        <a className="nav-item text-decoration-none d-flex align-items-center px-4 rounded-5">
          News & Updates
        </a>
        <a className="nav-item text-decoration-none d-flex align-items-center px-4 rounded-5">
          Subscription
        </a>
      </div>
      <Toggle />
    </nav>
  );
}

export default Navbar;
