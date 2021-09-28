import styled from "styled-components";


const HeaderStyled = styled.header`
  display:flex;

  justify-content:space-between;
  width:100%;
  padding:0.25rem;
  height:2.5rem;
  background-color: ${props => props.theme.darkTheme ? 'black' : 'gray'};
  color: white;

  .logoC {
    display:grid;
    place-content:center;
    font-family: ${props => props.theme['font-family'] ? props.theme['font-family'] : 'consolas, monospace'};
    color: ${props => props.theme['color'] ? props.theme['color'] : 'white'};
    height:100%;
  }

  ul {
    height:100%;
  }
  
  li {
    display:grid;
    place-content:center;
    width:7rem;
    height:100%;

    text-align:center;
  }
  
  a {
    text-decoration:none;
    &:hover {
      font-weight:bold;
    }
    &:visited {
      color:white; 
    }
  };
`

export default HeaderStyled