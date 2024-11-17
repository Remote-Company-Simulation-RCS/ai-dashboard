import React, { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import Pfp from "../assets/images/pfp.svg";
import "../styles/components/navbar.css";

function Toggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("preferredColorScheme");

    const applyTheme = (theme) => {
      setIsDarkMode(theme === "dark-mode");
      document.body.dataset.theme = theme;
    };

    if (storedTheme) {
      applyTheme(storedTheme);
    } else {
      const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
      applyTheme(prefersDarkScheme.matches ? "dark-mode" : "light-mode");

      const themeChangeListener = (e) => {
        applyTheme(e.matches ? "dark-mode" : "light-mode");
      };

      prefersDarkScheme.addEventListener("change", themeChangeListener);
      return () => {
        prefersDarkScheme.removeEventListener("change", themeChangeListener);
      };
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? "dark-mode" : "light-mode";
    setIsDarkMode(!isDarkMode);
    document.body.dataset.theme = newTheme;
    localStorage.setItem("preferredColorScheme", newTheme);
  };

  return (
    <div className="toggle position-relative d-flex align-items-center justify-content-between rounded-5">
      {isDarkMode ? (
        <IoSunnyOutline className="text-white tIcon" onClick={toggleTheme} />
      ) : (
        <FaMoon className="tIcon" onClick={toggleTheme} />
      )}
      <img src={Pfp} alt="Profile Photo" className="pfp" />
    </div>
  );
}

export default Toggle;
