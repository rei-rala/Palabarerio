import React, { useContext, useState } from "react";
import { Theme } from "../../../contexts/Theme";

import PalabrerioFieldStyled from "./PalabrerioFieldStyled";

const PalabrerioField = ({ order, currentCharacter, nextCharacter, currentWord, addPartialCharCount, addCharCount, addError, animOnError }) => {
  const { isDarkMode } = useContext(Theme);


  const [inputValue, setInputValue] = useState('')


  const typeHandling = (e) => {
    e.preventDefault()
    const val = {
      typed: e.nativeEvent.data,
      expected: currentCharacter,
      currentWord: currentWord,
      wordIndex: order
    }

    //console.table(val)
    if (val.typed === val.expected) {
      if (val.expected === ' ') {
        setInputValue('')
      } else {
        setInputValue(inputValue + val.typed)
      }
      addPartialCharCount()
      nextCharacter()
    }
    else {
      addError(val)
    }
  };


  return (
    <>
      <PalabrerioFieldStyled
        className={animOnError && 'error'}
        type="text"
        onChange={typeHandling}
        isDarkMode={isDarkMode}
        placeholder="Comience a escribir..."
        value={inputValue}
      />
      Current {currentCharacter === ' ' ? '[ espacio ]' : currentCharacter}
    </>
  );
};

export default PalabrerioField;
