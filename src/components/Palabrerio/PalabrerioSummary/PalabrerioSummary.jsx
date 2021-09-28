import React, { useContext } from 'react'
import { UserSession } from '../../../contexts/UserSession';
import PalabrerioSummaryStyled from './PalabrerioSummaryStyled'

const PalabrerioSummary = ({ partialCharCount, charCount, prevWordsCount, errorCount }) => {

  const { userInfo: { theme: { color } }, } = useContext(UserSession);

  return (
    <PalabrerioSummaryStyled isPartial={partialCharCount > 0} color={color}>
      <p>Cantidad Caracteres <strong> {partialCharCount ? charCount + partialCharCount : charCount}</strong></p>
      <p>Cantidad Palabras:  <strong> {prevWordsCount}</strong></p>
      <p>Errores:            <strong> {errorCount}</strong></p>
    </PalabrerioSummaryStyled>
  )
}

export default PalabrerioSummary