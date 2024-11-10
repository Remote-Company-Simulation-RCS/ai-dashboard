import React, { useState, useEffect } from "react";
import SignUpDark from "../components/Auth/SignUpDark.jsx";
import SignUpLight from "../components/Auth/SignUpLight.jsx";

function SignUpComponent() {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => setIsDarkMode(e.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isDarkMode ? <SignUpDark /> : <SignUpLight />;
}

export default SignUpComponent;
