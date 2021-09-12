import React, { useContext, useState } from "react";
import { Theme } from "../../../contexts/Theme";

import PalabrerioFieldStyled from "./PalabrerioFieldStyled";

const PalabrerioField = ({ seriesWords, order, currentCharacter, nextCharacter, currentWord, addError }) => {
  const { isDarkMode } = useContext(Theme);


  const [inputValue, setInputValue] = useState('')


  const typeHandling = (e) => {
    e.preventDefault()
    const val = {
      typed: e.nativeEvent.data,
      expected: currentCharacter,
      currentWord: currentWord
    }

    console.table(val)
    if (val.typed === val.expected) {
      if (val.expected === ' ') {
        setInputValue('')
      } else {
        setInputValue(inputValue + val.typed)
      }
      nextCharacter()
    }
    else {
      addError(val)
    }
  };


  return (
    <>
      <PalabrerioFieldStyled
        type="text"
        onChange={typeHandling}
        isDarkMode={isDarkMode}
        placeholder="Comience a escribir..."
        value={inputValue}
      />
      Current {seriesWords[order.wordNo][order.charNo]}
    </>
  );
};

export default PalabrerioField;
