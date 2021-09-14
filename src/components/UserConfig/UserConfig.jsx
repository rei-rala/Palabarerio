import React, { useContext, useState } from 'react'
import { UserSession } from '../../contexts/UserSession'

import ConfigPreview from './ConfigPreview/ConfigPreview'
import ConfigForm from './ConfigForm/ConfigForm'
import { Theme } from '../../contexts/Theme'

const UserConfig = () => {
  const { userInfo: { theme } } = useContext(UserSession)
  const { changeUserTheme } = useContext(Theme)

  const [fontPreview, setFontPreview] = useState('consolas')
  const [fontSizePreview, setSizeFontPreview] = useState(1)
  const [colorPreview, setColorPreview] = useState('red')
  const [darkThemePreview, setDarkThemePreview] = useState(theme.darkTheme || false)



  return (
    <div className="asd">
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
        defaultDT={theme['darkTheme']}

        changeUserTheme={changeUserTheme}
        setFontPreview={setFontPreview}
        setColorPreview={setColorPreview}
        setSizeFontPreview={setSizeFontPreview}
        setDarkThemePreview={setDarkThemePreview}
      />
    </div>
  )
}

export default UserConfig