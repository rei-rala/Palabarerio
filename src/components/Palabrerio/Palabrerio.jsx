import React, { useContext, useState, useEffect } from "react";
import { Theme } from "../../contexts/Theme";
import SectionStyled from "../Sections/SectionStyled";

import PalabrerioSummary from './PalabrerioSummary/PalabrerioSummary'
import PalabrerioWordWindow from "./PalabrerioWordWindow/PalabrerioWordWindow";
import PalabrerioField from "./PalabrerioField/PalabrerioField";
import PalabrerioCurrentChar from "./PalabrerioCurrentChar/PalabrerioCurrentChar"
import { arrRandomItem } from "../../Helpers/Helpers";


const Palabrerio = () => {
  const { isDarkMode } = useContext(Theme);

  const DEFAULT_WORDS = ["pri", "seg", "ter", 'cuar', 'qui', 'sex'].map(w => `${w} `);
  const SEGMENTED_WORDS = DEFAULT_WORDS.map((w) => w.split(""));

  const [seriesWords, setSeriesWords] = useState(SEGMENTED_WORDS);
  const [prevWords, setPrevWords] = useState([]);
  const [nextWords, setNextWords] = useState([]);
  const [currentWord, setCurrentWord] = useState([])

  const [order, setOrder] = useState({ wordNo: 0, charNo: 0, });
  const addNewWord = () => setSeriesWords([...seriesWords, arrRandomItem(DEFAULT_WORDS).split("")]);

  const [currentCharacter, setCurrentCharacter] = useState(seriesWords[order.wordNo][order.charNo]);
  const nextCharacter = () => {
    if (!!seriesWords[order.wordNo][order.charNo + 1]) {
      setOrder({ wordNo: order.wordNo, charNo: order.charNo + 1 });
    } else {
      setOrder({ wordNo: order.wordNo + 1, charNo: 0 });
      addCharCount()
      addNewWord();
    }
  };

  const [partialCharCount, setPartialCharCount] = useState(0)
  const addPartialCharCount = () => setPartialCharCount(partialCharCount + 1)

  const [charCount, setCharCount] = useState(0);
  const addCharCount = () => {
    setCharCount(charCount + partialCharCount)
    setPartialCharCount(0)
  };

  const [errors, setErrors] = useState([]);
  const addError = (newError) =>
    setErrors([
      ...errors,
      {
        typed: newError.typed,
        expected: newError.expected,
        word: newError.currentWord,
        wordIndex: newError.wordIndex
      },
    ]);

  const [indexOfErrors, setIndexOfErrors] = useState([])
  const [animOnError, setAnimOnError] = useState(false)


  useEffect(() => {
    setCurrentCharacter(seriesWords[order.wordNo][order.charNo]);
    setCurrentWord(seriesWords[order.wordNo].join(''))
    seriesWords[order.wordNo - 1] && setPrevWords(seriesWords.slice(0, order.wordNo))
    seriesWords[order.wordNo + 1] && setNextWords(seriesWords.slice(order.wordNo + 1))
  }, [order, seriesWords]);

  useEffect(() => {
    const indexList = Array.from(new Set(errors.map(e => e.wordIndex)))
    setIndexOfErrors(indexList)
    setAnimOnError(true)

    const desactiva_anim = setTimeout(() => {
      setAnimOnError(false)
    }, 500)
    return () => {
      clearTimeout(desactiva_anim)
    }
  }, [errors])

  return (

    <SectionStyled isDarkMode={isDarkMode}>
      <PalabrerioSummary
        partialCharCount={partialCharCount}
        charCount={charCount}
        prevWordsCount={prevWords.length}
        errorCount={errors.length}
      />

      <PalabrerioWordWindow
        order={order}
        currentCharacter={currentCharacter}
        currentWord={currentWord}
        prevWords={prevWords}
        nextWords={nextWords}
        indexOfErrors={indexOfErrors}
        animOnError={animOnError}
      />
      <PalabrerioField
        order={order}
        currentCharacter={currentCharacter}
        nextCharacter={nextCharacter}
        currentWord={currentWord}
        addPartialCharCount={addPartialCharCount}
        addError={addError}
        animOnError={animOnError}
      />
      <PalabrerioCurrentChar currentCharacter={currentCharacter} />
    </SectionStyled>
  );
};

export default Palabrerio;
