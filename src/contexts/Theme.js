import React, { createContext, useContext, useState, useEffect } from "react";
import { UserSession } from "./UserSession";


const Theme = createContext();

const ThemeContext = ({ children }) => {
  const { userInfo, setUserInfo } = useContext(UserSession)

  const [isDarkMode, setDarkMode] = useState(userInfo.theme.darkTheme || false)

  const changeUserTheme = (newColor = userInfo.theme.color, newFontFamily = userInfo.theme['font-family'], newFontSize = userInfo.theme['font-size'], newDarkTheme = userInfo.theme.darkTheme) => {
    setUserInfo(
      {
        ...userInfo,
        theme: {
          color: newColor,
          'font-family': newFontFamily,
          'font-size': newFontSize,
          darkTheme: newDarkTheme
        }
      }
    )
  }

  useEffect(() => {
    typeof userInfo.theme.darkTheme !== 'undefined' && setDarkMode(userInfo.theme.darkTheme)
  }, [userInfo.theme.darkTheme])

  return <Theme.Provider value={{
    isDarkMode,
    changeUserTheme
  }}>
    {children}
  </Theme.Provider>
}

export { Theme }
export default ThemeContext