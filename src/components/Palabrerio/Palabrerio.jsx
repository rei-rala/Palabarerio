import React, { useContext, useState, useEffect } from "react";
import { Theme } from "../../contexts/Theme";
import SectionStyled from "../Sections/SectionStyled";
import PalabrerioWordWindow from "./PalabrerioWordWindow/PalabrerioWordWindow";
import PalabrerioField from "./PalabrerioField/PalabrerioField";
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
      addNewWord();
    }
  };

  const [charCount, setCharCount] = useState(0);
  const addCharCount = () => setCharCount(charCount + 1);

  const [errors, setErrors] = useState([]);
  const addError = (newError) =>
    setErrors([
      ...errors,
      {
        typed: newError.typed,
        expected: newError.expected,
        word: newError.currentWord,
      },
    ]);

  useEffect(() => {
    setCurrentCharacter(seriesWords[order.wordNo][order.charNo]);
    setCurrentWord(seriesWords[order.wordNo].join(''))
    seriesWords[order.wordNo - 1] && setPrevWords(seriesWords.slice(0, order.wordNo))
    seriesWords[order.wordNo + 1] && setNextWords(seriesWords.slice(order.wordNo + 1))
  }, [order, seriesWords]);


  return (
    <SectionStyled isDarkMode={isDarkMode}>
      Cantidad Palabras: {prevWords.length}
      Errores: {errors.length}
      <PalabrerioWordWindow
        seriesWords={seriesWords}
        currentWord={currentWord}
        prevWords={prevWords}
        nextWords={nextWords}
        order={order}
        currentCharacter={currentCharacter}
      />
      <PalabrerioField
        seriesWords={seriesWords}
        order={order}
        currentCharacter={currentCharacter}
        nextCharacter={nextCharacter}
        charCount={charCount}
        addCharCount={addCharCount}
        currentWord={currentWord}
        addError={addError}
      />
    </SectionStyled>
  );
};

export default Palabrerio;
