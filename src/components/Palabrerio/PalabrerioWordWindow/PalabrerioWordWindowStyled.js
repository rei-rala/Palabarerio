import styled from "styled-components";

const PalabrerioWordWindowStyled = styled.div`

  font-family: consolas;

  .previousWordsGroup {
    background: ${props => props._0};
    background: -webkit-linear-gradient(to right, ${props => props._0} 0%, ${props => props._50} 15%);
    background: -moz-linear-gradient(to right, ${props => props._0} 0%, ${props => props._50} 15%);
    background: linear-gradient(to right, ${props => props._0} 0%, ${props => props._50} 15%);    
  }
  
  .nextWordsGroup {
    background: ${props => props._0};
    background: -webkit-linear-gradient(to left, ${props => props._0} 0%, ${props => props._50} 15%);
    background: -moz-linear-gradient(to left, ${props => props._0} 0%, ${props => props._50} 15%);
    background: linear-gradient(to left, ${props => props._0} 0%, ${props => props._50} 15%);
  }
  .previousWordsGroup, .nextWordsGroup {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  transition: background 0.5s;

  span.currentChar {
    color:red;
    font-weigth:bold;
  }
`


export default PalabrerioWordWindowStyled