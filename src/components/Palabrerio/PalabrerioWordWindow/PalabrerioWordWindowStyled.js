import styled, { keyframes } from "styled-components";

const midWordAnimation = keyframes`
  from {
    right:0%;
  }  
  to {
    right:50%;
  }
`;

const decorationOnError = keyframes`
  0% {
    text-decoration:underline red 2px;
  } 
  50% {
    text-decoration:underline transparent 0px;
  }
  100% {
    text-decoration:underline red 2px;
  }
`


const PalabrerioWordWindowStyled = styled.div`
.byWordPanel {


  display: flex;
  font-family: ${props => props.fontFamily || 'consolas'};
  font-size: ${props => props.fontSize || 2}rem;
  transition: background 0.5s;

  & > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex: 1;
    height: 5rem;
  }
  .previousWordsGroup {
    justify-content: end;
    ${props => props.indexOfErrors.map(e => `span:nth-child(${e.wordNo + 1}) { color: red; };`)}
  }
 
  
  .currentWordGroup {
    position: relative;

    .currentWord {
      position: absolute;
      margin: 5px;
      right: 50%;
      transform: translateX(50%);
      animation: 1s ${midWordAnimation} both;
    }
    .previewNextWord {
      position: absolute;
      left:50%;
      transform:translateX(80%);
      opacity:0.35;
    }

  }

  .nextWordsGroup {
    justify-content: start;

    & .nextWords:first-child {
      opacity: 0.5;
    }
  }
  .previousWordsGroup,
  .nextWordsGroup {
    gap: ${props => props.fontSize / 1.5 || 1}rem;
    overflow: hidden auto;
  }

  span.currentChar {
    color: ${props => props.color || 'red'};
    font-weight: bold;

    &.error  {
      animation: 0.15s ${decorationOnError} infinite;
    }
  }
}
`;

export default PalabrerioWordWindowStyled;
