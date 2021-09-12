import styled from "styled-components";


const SectionStyled = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  color: ${props => props.isDarkMode ? 'white' : 'black'};
  background-color: ${props => props.isDarkMode ? '#222' : 'white'};
`

export default SectionStyled