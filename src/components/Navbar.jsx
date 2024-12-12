import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Toggle from "./Toggle.jsx";
import logo from "../assets/icons/logoNoBg.png";
import UseToggle from "../hooks/UseToggle.jsx";
import { IoClose } from "react-icons/io5";
import { FiAlignLeft } from "react-icons/fi";
import "../styles/components/navbar.css";

function Navbar({ chatHistoryToggle, phonePadding, toggleChat, background }) {
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
      <header
        className={`navbar px-3 ${
          phonePadding === "px-md-5" ? "px-md-5" : "px-sm-5"
        }  d-flex justify-content-between`}
      >
        {chatHistoryToggle ? (
          <div className="logo-name d-flex gap-3 align-items-center rounded-5">
            <FiAlignLeft className="bars fs-3 d-none" onClick={toggleChat} />
            <img src={logo} alt="Quickit Logo" className="quickit-logo" />
            <h3 className="fw-bold fst-italic m-0 d-none d-md-block">
              Quickit
            </h3>
          </div>
        ) : (
          <div className="logo-name d-flex gap-2 align-items-center px-3 py-2 py-md-2 rounded-5">
            <img src={logo} alt="Quickit Logo" className="quickit-logo" />
            <h3 className="fw-bold fst-italic m-0">Quickit</h3>
          </div>
        )}
        <nav className="nav-links d-none d-lg-flex justify-content-center align-items-center text-white rounded-5">
          <NavLink to="/dashboard" className={linkClass}>
            Dashboard
          </NavLink>
          <NavLink to="/assistant" className={linkClass}>
            AI Assistant
          </NavLink>
          <NavLink to="/news" className={linkClass}>
            News & Updates
          </NavLink>
          <NavLink to="/subscription" className={linkClass}>
            Subscription
          </NavLink>
        </nav>
        <div className="d-flex align-items-center gap-3 py-2">
          <Toggle
            className="d-none d-lg-flex"
            toggleSidebar={toggleSidebar}
            background={background}
          />
        </div>
      </header>
      <nav
        className={`vertical-nav ${
          isVisible ? "show" : ""
        } nav flex-column d-lg-none align-items-end gap-3 pe-5 pt-4 position-fixed `}
      >
        <IoClose className={`x-icon fs-3`} onClick={toggleSidebar} />
        <NavLink
          to="/dashboard"
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
          to="/news"
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
