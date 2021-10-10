import React, { useContext } from 'react'
import { Theme } from '../../contexts/Theme'
import HeaderStyled from './HeaderStyled'
import Logo from './Logo/Logo'
import Nav from './Nav/Nav'

const Header = () => {
  const { theme } = useContext(Theme)

  return (
    <HeaderStyled theme={theme}>
      <Logo />
      <Nav />
    </HeaderStyled>
  )
}

export default Header