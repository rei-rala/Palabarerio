import React, { useContext, useEffect, useState } from 'react'
import { UserSession } from '../../contexts/UserSession'

import ConfigPreview from './ConfigPreview/ConfigPreview'
import ConfigForm from './ConfigForm/ConfigForm'
import { Theme } from '../../contexts/Theme'
import SectionStyled from '../Sections/SectionStyled'

const UserConfig = () => {
  const { userInfo: { theme } } = useContext(UserSession)
  const { changeUserTheme } = useContext(Theme)

  const [fontPreview, setFontPreview] = useState('consolas')
  const [fontSizePreview, setSizeFontPreview] = useState(1)
  const [colorPreview, setColorPreview] = useState('red')
  const [darkThemePreview, setDarkThemePreview] = useState(false)

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
        defaultFF={theme['font-family']}
        defaultFS={theme['font-size']}
        defaultCo={theme['color']}
        defaultDT={darkThemePreview}

        changeUserTheme={changeUserTheme}
        setFontPreview={setFontPreview}
        setColorPreview={setColorPreview}
        setSizeFontPreview={setSizeFontPreview}
        setDarkThemePreview={setDarkThemePreview}
      />
    </SectionStyled>

  )
}

export default UserConfig