import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Toggle from "./Toggle";
import logo from "../assets/icons/logoNoBg.png";
import UseToggle from "../hooks/UseToggle";
import { IoClose } from "react-icons/io5";
import "../styles/components/navbar.css";
import { BsCursor } from "react-icons/bs";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleSidebar = () => {
    setIsVisible((prevState) => !prevState);
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? `active nav-item text-decoration-none d-flex align-items-center px-4 rounded-5`
      : "nav-item text-decoration-none d-flex align-items-center px-4 rounded-5";

  return (
    <>
      <header className="navbar px-3 px-sm-5 d-flex justify-content-between">
        <div className="logo-name d-flex gap-2 align-items-center px-3 py-2 rounded-5">
          <img src={logo} alt="Quickit Logo" className="quickit-logo" />
          <h3 className=" fw-bold fst-italic m-0">Quickit</h3>
        </div>
        <nav className="nav-links d-none d-lg-flex justify-content-center align-items-center text-white rounded-5">
          <NavLink to="/" className={linkClass}>
            Dashboard
          </NavLink>
          <NavLink to="/assistant" className={linkClass}>
            AI Assistant
          </NavLink>
          <NavLink to="/" className={linkClass}>
            News & Updates
          </NavLink>
          <NavLink to="/subscription" className={linkClass}>
            Subscription
          </NavLink>
        </nav>
        <div className="d-flex align-items-center gap-3">
          <Toggle className="d-none d-lg-flex" toggleSidebar={toggleSidebar} />
        </div>
      </header>
      <nav
        className={`vertical-nav ${
          isVisible ? "show" : ""
        } nav flex-column d-lg-none align-items-end gap-3 pe-5 pt-4 position-fixed `}
      >
        <IoClose className={`x-icon fs-3`} onClick={toggleSidebar} />
        <NavLink
          to="/"
          className="fs-5 nav-item py-2 text-black text-decoration-none bg-transparent"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/assistant"
          className="fs-5 nav-item py-2 text-black text-decoration-none bg-transparent"
        >
          AI Assistant
        </NavLink>
        <NavLink
          to="/"
          className="fs-5 nav-item py-2 text-black text-decoration-none bg-transparent"
        >
          News & Updates
        </NavLink>
        <NavLink
          to="/subscription"
          className="fs-5 nav-item py-2 text-black text-decoration-none bg-transparent"
        >
          Subscription
        </NavLink>
        <UseToggle
          moon="Light"
          sun="Dark"
          styleM={{
            border: "1px solid black",
            borderRadius: "30px",
            padding: "5px 10px",
            fontSize: "20px",
            cursor: "pointer",
          }}
          styleS={{
            border: "1px solid white",
            borderRadius: "30px",
            padding: "5px 10px",
            fontSize: "20px",
            cursor: "pointer",
          }}
        />
      </nav>
    </>
  );
}

export default Navbar;
