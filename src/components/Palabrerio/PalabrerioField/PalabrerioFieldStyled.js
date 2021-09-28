import styled, { keyframes } from "styled-components";

const shakeOnError = keyframes`
  0% {
    border-color: ${props => props.isDarkMode ? 'white' : 'black'}
    transform: translate(1px, 1px) rotate(0deg); 
  }
  10% {
    border-color: red;
    transform: translate(-1px, -2px) rotate(-1deg); 
  }
  20% {
    border-color: red;
    transform: translate(-3px, 0px) rotate(1deg); 
  }
  30% {
    border-color: red;
    transform: translate(3px, 2px) rotate(0deg); 
  }
  40% {
    border-color: ${props => props.isDarkMode ? 'white' : 'black'}
    transform: translate(1px, -1px) rotate(1deg); 
  }
  50% {
    border-color: red;
    transform: translate(-1px, 2px) rotate(-1deg); 
  }
  60% {
    border-color: ${props => props.isDarkMode ? 'white' : 'black'}
    transform: translate(-3px, 1px) rotate(0deg); 
  }
  70% {
    border-color: red;
    transform: translate(3px, 1px) rotate(-1deg); 
  }
  80% {
    border-color: red;
    transform: translate(-1px, -1px) rotate(1deg); 
  }
  90% {
    border-color: red;
    transform: translate(1px, 2px) rotate(0deg); 
  }
  100% {
    border-color: ${props => props.isDarkMode ? 'white' : 'black'}
     transform: translate(1px, -2px) rotate(-1deg); 
     }
`

const PalabrerioFieldStyled = styled.input`
  position: fixed;
  width: 10rem;
  left: calc(50% - 5rem);
  bottom: 10%;
  
  padding: 5px 10px;
  text-align:center;

  color: ${props => props.color ? props.color : 'black'};
  background-color: ${props => props.isDarkMode ? 'black' : 'white'};
  border: 1px solid ${props => props.isDarkMode ? 'white' : 'black'};
  border-radius: 10px;

  &.error {
    animation: 0.5s ${shakeOnError} infinite;
  }
`

export default PalabrerioFieldStyled