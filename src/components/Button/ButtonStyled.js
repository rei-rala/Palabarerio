import styled from "styled-components";


const ButtonStyled = styled.button`
  border: 2px outset  ${props => props.isDarkMode ? 'red' : 'gray'};
  border-radius: 0.5rem;
  background-color:  ${props => props.isDarkMode ? 'black' : 'white'};
  color: ${props => props.isDarkMode ? 'white' : 'gray'};
  cursor: pointer;
  margin: 5px;
  padding: 3px 8px;
  box-shadow: 2px 2px 3px ${props => props.isDarkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'};
  &:active {
    border-style:  inset;
  }
  `

export default ButtonStyled