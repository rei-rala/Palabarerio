import React, { useContext } from 'react'
import { UserSession } from '../../../contexts/UserSession'

//import { Theme } from '../../../contexts/Theme'
//import SectionStyled from '../SectionStyled'
import Button from '../../Button/Button'

const Login = () => {
  const { userInfo: { userTag, isUserLoggedIn }, setUserInfo } = useContext(UserSession)

  //const { isDarkMode } = useContext(Theme)
  return (
    //<SectionStyled isDarkMode={isDarkMode}>

    <Button onClick={() => setUserInfo({
      isUserLoggedIn: !isUserLoggedIn,
      userTag: userTag === 'Guest' ? 'Usuario69420' : 'Guest'
    })}
    >
      Click para iniciar sesion
    </Button>
    //</SectionStyled>
  )
}

export default Login