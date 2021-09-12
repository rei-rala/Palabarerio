import React, { useContext, useEffect } from "react";
import { Theme } from "../../../contexts/Theme";
import PalabrerioWordWindowStyled from './PalabrerioWordWindowStyled'

const PalabrerioWordWindow = ({ currentWord, prevWords, nextWords, order, currentCharacter }) => {
  const { isDarkMode } = useContext(Theme)

  useEffect(() => { })

  return (
    <PalabrerioWordWindowStyled isDarkMode={isDarkMode} _0={isDarkMode ? '#000000' : '#FFFFFF'} _50={isDarkMode ? '#FFFFFF' : '#000000'}>
      <div className="previousWordsGroup">
        {
          prevWords && prevWords.map((w, i) => <span className='prevWords' key={`passedWordNo${i}`}>{w}</span>)
        }
      </div>
      <div className="currentWordGroup">

        {
          currentWord[order.charNo - 1] && <span> {currentWord.slice(0, order.charNo)}</span>
        }
        <span className='currentChar'>{currentCharacter === ' ' ? '' : currentCharacter}</span>
        {
          currentWord[order.charNo + 1] && <span>{currentWord.slice(order.charNo + 1)}</span>
        }
      </div>
      <div className="nextWordsGroup">
        {
          nextWords && nextWords.map((w, i) => <span className='nextWords' key={`nextWordNo${i}`}>{w}</span>)
        }
      </div>
    </PalabrerioWordWindowStyled>
  )
}

export default PalabrerioWordWindow