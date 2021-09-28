import React from "react";

const PalabrerioCurrentChar = ({ currentCharacter }) => {
  return (
    <h5>
      Current {currentCharacter === ' ' ? '[ espacio ]' : currentCharacter}
    </h5>
  )
}

export default PalabrerioCurrentChar