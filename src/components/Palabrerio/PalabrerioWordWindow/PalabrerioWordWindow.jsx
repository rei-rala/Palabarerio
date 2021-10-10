import React, { useContext, useState } from "react";
import PalabrerioWordWindowStyled from "./PalabrerioWordWindowStyled";
import Button from '../../Button/Button'
import { Theme } from "../../../contexts/Theme";

const PalabrerioWordWindow = ({
  order,
  currentWord,
  prevWords,
  nextWords,
  currentCharacter,
  indexOfErrors,
  animOnError,
}) => {
  const { theme, setTheme } = useContext(Theme);
  const [previewingNextWord, setPreviewNextWord] = useState(theme.previewNext)

  const togglePreviewNextWord = () => {
    setTheme({ ...theme, previewNext: !theme.previewNext })
    setPreviewNextWord(!theme.previewNext)
  }

  return (
    <PalabrerioWordWindowStyled
      color={theme.color}
      fontFamily={theme["font-family"]}
      fontSize={theme["font-size"]}
      isDarkMode={theme.darkTheme}
      indexOfErrors={indexOfErrors}
    >
      <div className="options">
        <Button onClick={togglePreviewNextWord}>{previewingNextWord ? 'Previewing Next Word' : 'Not previewing next'}</Button>
      </div>

      <div className="byWordPanel">

        <div className="previousWordsGroup">
          {prevWords && prevWords.map((w, i) => (
            <span className="prevWords" key={`passedWordNo${i}`}>
              {w}
            </span>
          ))}
        </div>

        <div className="currentWordGroup">
          <span className="currentWord">

            {currentWord[order.charNo - 1] && (<span> {currentWord.slice(0, order.charNo)}</span>)}

            <span className={`currentChar ${animOnError ? "error" : ""}`}>
              {currentCharacter === " " ? "_" : currentCharacter}
            </span>
            {currentWord[order.charNo + 1] && (<span>{currentWord.slice(order.charNo + 1)}</span>)}

          </span>
          {previewingNextWord && <span className='previewNextWord'>{nextWords[0]}</span>}
        </div>
        <div className="nextWordsGroup">
          {nextWords &&
            nextWords.map((w, i) => (
              previewingNextWord && i === 0
                ? <span key={`notInmNextWord`} />
                : <span className="nextWords" key={`nextWordNo${i}`}>
                  {w}
                </span>
            ))}
        </div>

      </div>
    </PalabrerioWordWindowStyled>
  );
};

export default PalabrerioWordWindow;
