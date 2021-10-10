import React, { createContext, useEffect, useState } from "react";


const Theme = createContext();

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem('themeConfig'))
    ?? {
      color: 'red',
      'font-family': 'consolas',
      'font-size': '1',
      darkTheme: false,
      previewNext: false
    }
  )

  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    setIsDarkMode(theme.darkTheme)
  }, [theme.darkTheme])

  useEffect(() => {
    try {
      const local = localStorage.getItem('themeConfig')
      local && setTheme(JSON.parse(local))
    } catch (err) {
      console.warn(err)
      localStorage.removeItem('themeConfig')
    }
  }, [setTheme])

  useEffect(() => {
    try {
      const local = localStorage.getItem('themeConfig') && JSON.parse(localStorage.getItem('themeConfig'))
      const hibridConfig = local && { ...local, ...theme }
      local && localStorage.setItem('themeConfig', JSON.stringify(hibridConfig))
    }
    catch (err) {
      console.log(err)
    }

  }, [theme])


  return <Theme.Provider value={{
    theme,
    setTheme,
    isDarkMode
  }}>
    {children}
  </Theme.Provider>
}

export { Theme }
export default ThemeContext