import React, { useContext, useState } from "react";
import { Theme } from "../../../contexts/Theme";
import { UserSession } from "../../../contexts/UserSession";

import PalabrerioFieldStyled from "./PalabrerioFieldStyled";

const PalabrerioField = ({ order, currentCharacter, nextCharacter, currentWord, addPartialCharCount, addError, animOnError }) => {
  const { isDarkMode } = useContext(Theme);
  const userInfo = useContext(UserSession)


  const [inputValue, setInputValue] = useState('')

  const typeHandling = (e) => {
    e.preventDefault()
    const val = {
      typed: e.nativeEvent.data,
      expected: currentCharacter,
      prevChar: currentWord[order.charNo - 1] ?? ' ',
      currentWord,
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
    <PalabrerioFieldStyled
      className={animOnError && 'error'}
      type="text"
      onChange={typeHandling}
      isDarkMode={isDarkMode}
      color={userInfo?.theme?.color ?? 'white'}
      placeholder="Comience a escribir..."
      value={inputValue}
    />
  );
};

export default PalabrerioField;
