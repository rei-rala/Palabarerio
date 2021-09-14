import styled from "styled-components";

const ConfigPreviewStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  font-family: ${(props) => props.font};
  font-size: ${props => props.fontSize || 2}rem;
  transition: all 1s;
  
  overflow-y:hidden;

  color: ${props => props.darkTheme ? 'black' : 'white'} !important;
  background-color: ${props => props.darkTheme ? 'white' : '#222'} !important;

  .wrongWordPreview {
    color: red;
  }
  .currentCharPreview {
    color: ${(props) => props.color};
  }

  & > div {
    flex: 1;
    display: flex;
    justify-content: center;
    flex-wrap:wrap;
    
    &:not(:nth-child(2)) {
      gap: ${props => props.fontSize / 3 || 2 / 3}rem;
      min-height: 5rem;
      overflow-y:scroll !important;  
      height: 5rem;
    }

    &:first-child {
      justify-content: end;
    }
    &:last-child {
      justify-content: start;
    }
  }
`;

export default ConfigPreviewStyled;
