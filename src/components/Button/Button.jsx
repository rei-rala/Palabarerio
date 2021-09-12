import React, { useContext } from 'react'
import { Theme } from '../../contexts/Theme'
import ButtonStyled from './ButtonStyled'


const Button = ({ children, onClick }) => {
  const { isDarkMode } = useContext(Theme)

  return (
    <ButtonStyled isDarkMode={isDarkMode} onClick={onClick && onClick}>
      {children}
    </ButtonStyled>
  )
}

export default Button