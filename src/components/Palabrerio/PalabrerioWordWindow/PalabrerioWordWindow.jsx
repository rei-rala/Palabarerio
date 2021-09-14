import React, { useContext, useState } from "react";
import { UserSession } from "../../../contexts/UserSession";
import PalabrerioWordWindowStyled from "./PalabrerioWordWindowStyled";
import Button from '../../Button/Button'

const PalabrerioWordWindow = ({
  order,
  currentWord,
  prevWords,
  nextWords,
  currentCharacter,
  indexOfErrors,
  animOnError,
}) => {
  const { userInfo: { theme }, } = useContext(UserSession);
  const [previewingNextWord, setPreviewNextWord] = useState(false)
  const togglePreviewNextWord = () => setPreviewNextWord(!previewingNextWord)

  return (
    <PalabrerioWordWindowStyled
      color={theme?.color || "red"}
      fontFamily={(theme && theme["font-family"]) || "consolas"}
      fontSize={(theme && theme["font-size"]) || 2}
      isDarkMode={theme?.darkTheme || false}
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
                ? <span />
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
