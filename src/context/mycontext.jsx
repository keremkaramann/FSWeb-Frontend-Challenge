import { createContext, useEffect, useState } from "react";

export const DarkMode = createContext();
export const DarkProvider = ({ children }) => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;

  const [toggleDarkMode, setToggleDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" || prefersDarkMode
  );

  function handleNight() {
    setToggleDarkMode(!toggleDarkMode);
  }

  useEffect(() => {
    localStorage.setItem("darkMode", toggleDarkMode);
  }, [toggleDarkMode]);

  return (
    <DarkMode.Provider value={{ toggleDarkMode, handleNight }}>
      {children}
    </DarkMode.Provider>
  );
};
