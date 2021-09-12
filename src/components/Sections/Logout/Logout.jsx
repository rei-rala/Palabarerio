import React, { useContext } from 'react'
//import { Theme } from '../../../contexts/Theme'
import { UserSession } from '../../../contexts/UserSession'
import Button from '../../Button/Button'
//import SectionStyled from '../SectionStyled'

const Logout = () => {
  const { userInfo: { userTag }, setUserInfo } = useContext(UserSession)

  //const { isDarkMode } = useContext(Theme)
  return (
    // <SectionStyled isDarkMode={isDarkMode}>
    <div className="asd">

      Hola {userTag}!

      <Button onClick={() => setUserInfo({
        isUserLoggedIn: false,
        userTag: userTag === 'Guest' ? 'Usuario69420' : 'Guest'
      })}
      >
        Click para cerrar sesion
      </Button>
    </div>
    //</SectionStyled>
  )
}

export default Logout