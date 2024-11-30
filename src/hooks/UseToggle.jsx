import React, { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import "../styles/components/navbar.css";

function ToggleHook(props) {
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
      const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );
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
    <div className={props.className}>
      {isDarkMode ? (
        <div style={props.styleS} onClick={toggleTheme}>
          <IoSunnyOutline className="text-white tIcon mb-1" />{" "}
          <span>{props.sun}</span>
        </div>
      ) : (
        <div style={props.styleM} onClick={toggleTheme}>
          <span>{props.moon}</span> <FaMoon className={`tIcon mb-1`} />
        </div>
      )}
    </div>
  );
}

export default ToggleHook;
