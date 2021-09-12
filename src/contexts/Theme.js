import React, { createContext, useState } from "react";


const Theme = createContext();

const ThemeContext = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => setDarkMode(!isDarkMode)

  return <Theme.Provider value={{
    isDarkMode,
    setDarkMode,
    toggleDarkMode
  }}>
    {children}
  </Theme.Provider>
}

export { Theme }
export default ThemeContext