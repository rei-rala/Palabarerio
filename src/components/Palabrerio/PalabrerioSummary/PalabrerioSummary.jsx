import React, { useContext } from 'react'
import { Theme } from '../../../contexts/Theme';
import PalabrerioSummaryStyled from './PalabrerioSummaryStyled'

const PalabrerioSummary = ({ partialCharCount, charCount, prevWordsCount, errorCount }) => {

  const theme = useContext(Theme);

  return (
    <PalabrerioSummaryStyled isPartial={partialCharCount > 0} color={theme.color}>
      <p>Cantidad Caracteres <strong> {partialCharCount ? charCount + partialCharCount : charCount}</strong></p>
      <p>Cantidad Palabras:  <strong> {prevWordsCount}</strong></p>
      <p>Errores:            <strong> {errorCount}</strong></p>
    </PalabrerioSummaryStyled>
  )
}

export default PalabrerioSummary