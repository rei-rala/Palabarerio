import styled from "styled-components";


const PalabrerioFieldStyled = styled.input`

  color: ${props => props.isDarkMode ? 'white' : 'black'};
  background-color: ${props => props.isDarkMode ? 'black' : 'white'};
`

export default PalabrerioFieldStyled