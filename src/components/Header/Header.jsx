import React, { useContext } from 'react'
import { UserSession } from '../../contexts/UserSession'
import HeaderStyled from './HeaderStyled'
import Logo from './Logo/Logo'
import Nav from './Nav/Nav'

const Header = () => {
  const { userInfo: { theme } } = useContext(UserSession)

  return (
    <HeaderStyled theme={theme}>
      <Logo />
      <Nav />
    </HeaderStyled>
  )
}

export default Header