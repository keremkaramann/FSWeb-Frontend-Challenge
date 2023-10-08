import { createContext, useEffect, useState } from "react";

export const DarkMode = createContext();
export const DarkProvider = ({ children }) => {
  const [toggleDarkMode, setToggleDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
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
