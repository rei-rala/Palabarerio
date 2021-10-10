import React, { useContext, useEffect, useState } from 'react'

import ConfigPreview from './ConfigPreview/ConfigPreview'
import ConfigForm from './ConfigForm/ConfigForm'

import SectionStyled from '../Sections/SectionStyled'
import { Theme } from '../../contexts/Theme'

const UserConfig = () => {
  const { theme, setTheme } = useContext(Theme)

  const [fontSizePreview, setSizeFontPreview] = useState(theme['font-size'])
  const [fontPreview, setFontPreview] = useState(theme['font-family'])
  const [colorPreview, setColorPreview] = useState(theme.color)
  const [darkThemePreview, setDarkThemePreview] = useState(theme.darkTheme)

  useEffect(() => {
    theme?.darkTheme && setDarkThemePreview(theme.darkTheme)
  }, [theme])


  return (
    <SectionStyled isDarkMode={theme?.darkTheme}>
      <h2>Configuracion del theme</h2>

      <ConfigPreview
        fontPreview={fontPreview}
        colorPreview={colorPreview}
        fontSizePreview={fontSizePreview}
        darkThemePreview={darkThemePreview}
      />
      <ConfigForm
        theme={theme}
        setTheme={setTheme}

        defaultFF={fontSizePreview}
        defaultFS={fontPreview}
        defaultCo={colorPreview}
        defaultDT={darkThemePreview}

        setFontPreview={setFontPreview}
        setColorPreview={setColorPreview}
        setSizeFontPreview={setSizeFontPreview}
        setDarkThemePreview={setDarkThemePreview}
      />
    </SectionStyled>

  )
}

export default UserConfig