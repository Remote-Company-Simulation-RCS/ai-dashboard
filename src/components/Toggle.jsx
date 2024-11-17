import React, { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import Pfp from "../assets/images/pfp.svg";
import "../styles/components/navbar.css";

function Toggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Retrieve theme preference from localStorage
    const storedTheme = localStorage.getItem("preferredColorScheme");
    if (storedTheme === "dark-mode") {
      setIsDarkMode(true);
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      setIsDarkMode(false);
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? "dark-mode" : "light-mode";
    setIsDarkMode(!isDarkMode);

    // Update body class
    document.body.classList.add(newTheme);
    document.body.classList.remove(isDarkMode ? "dark-mode" : "light-mode");

    // Save the preference to localStorage
    localStorage.setItem("preferredColorScheme", newTheme);
  };

  return (
    <div
      className="toggle position-relative d-flex align-items-center justify-content-between rounded-5"
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <IoSunnyOutline className="text-white tIcon" />
      ) : (
        <FaMoon className="tIcon" />
      )}
      <img src={Pfp} alt="Profile Photo" className="pfp" />
    </div>
  );
}

export default Toggle;
