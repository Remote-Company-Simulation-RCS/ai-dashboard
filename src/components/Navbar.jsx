import React from "react";
import logo from "../assets/icons/logoNoBg.png";
import style from "../styles/components/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-name d-flex gap-2 align-items-center border border-secondary px-3 py-2 rounded-5">
        <img src={logo} alt="Quickit Logo" />
        <h3 className=" fw-bold fst-italic text-white m-0">Quickit</h3>
      </div>
      <div className="nav-links "></div>
      <div className="pfp-toggle"></div>
    </nav>
  );
}

export default Navbar;
