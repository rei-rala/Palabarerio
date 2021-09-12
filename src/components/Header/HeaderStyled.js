import styled from "styled-components";


const HeaderStyled = styled.header`
  background-color: ${props => props.isDarkMode ? 'black' : 'gray'};
  color: white;
`

export default HeaderStyled