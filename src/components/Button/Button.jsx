import React, { useContext } from 'react'
import { Theme } from '../../contexts/Theme'
import ButtonStyled from './ButtonStyled'


const Button = ({ children, onClick, customStyle = {} }) => {
  const { isDarkMode } = useContext(Theme)

  return (
    <ButtonStyled isDarkMode={isDarkMode} onClick={onClick && onClick} style={customStyle}>
      {children}
    </ButtonStyled>
  )
}

export default Button