import React, { useState, useEffect } from "react";
import SignInDark from "../components/Auth/SignInDark.jsx";
import SignInLight from "../components/Auth/SignInLight.jsx";

function SignInComponent() {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => setIsDarkMode(e.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isDarkMode ? <SignInDark /> : <SignInLight />;
}

export default SignInComponent;
