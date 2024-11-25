import React from "react";
import { NavLink } from "react-router-dom";
import Toggle from "./Toggle";
import logo from "../assets/icons/logoNoBg.png";
import "../styles/components/navbar.css";

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? `active nav-item text-decoration-none d-flex align-items-center px-4 rounded-5`
      : "nav-item text-decoration-none d-flex align-items-center px-4 rounded-5";

  return (
    <nav className="navbar px-5 d-flex justify-content-between">
      <div className="logo-name d-flex gap-2 align-items-center px-3 py-2 rounded-5">
        <img src={logo} alt="Quickit Logo" className="quickit-logo" />
        <h3 className=" fw-bold fst-italic m-0">Quickit</h3>
      </div>
      <div className="nav-links d-flex justify-content-center align-items-center text-white rounded-5">
        <NavLink to="/" className={linkClass}>
          Dashboard
        </NavLink>
        <NavLink to="assistant" className={linkClass}>
          AI Assistant
        </NavLink>
        <NavLink to="/" className={linkClass}>
          News & Updates
        </NavLink>
        <NavLink to="/subscription" className={linkClass}>
          Subscription
        </NavLink>
      </div>
      <Toggle />
    </nav>
  );
}

export default Navbar;
