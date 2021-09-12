import React, { useContext } from 'react'
import { Theme } from '../../contexts/Theme'
import Button from '../Button/Button'
import HeaderStyled from './HeaderStyled'

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useContext(Theme)
  return (
    <HeaderStyled isDarkMode={isDarkMode}>
      Palabrerio!

      <Button onClick={toggleDarkMode}>
        Testeate el theme
      </Button>


    </HeaderStyled>
  )
}

export default Header