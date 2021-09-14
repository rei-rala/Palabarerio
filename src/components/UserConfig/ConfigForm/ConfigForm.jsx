import React from 'react'

import Button from '../../Button/Button'

const ConfigForm = ({
  changeUserTheme,
  setFontPreview,
  setColorPreview,
  setSizeFontPreview,
  setDarkThemePreview,
  defaultFF,
  defaultFS,
  defaultCo,
  defaultDT
}) => {

  const defaultFonts = [
    {
      name: 'Roboto Mono',
      css: `'Roboto Mono', consolas, monospace;`
    },
    {
      name: 'Syne Mono',
      css: `'Syne Mono', consolas, monospace;`
    },
    {
      name: 'Ubuntu Mono',
      css: `'Ubuntu Mono', consolas, monospace;`
    },
    {
      name: 'Nova Mono',
      css: `'Nova Mono', consolas, monospace;`
    }
  ]



  const colorPreview = (e) => {
    setColorPreview(e.target.value)
  }

  const fontPreview = (e) => {
    setFontPreview(e.target.value)
  }

  const fontSizePreview = (e) => {
    setSizeFontPreview(e.target.value)
  }

  const darkThemePreview = (e) => {
    setDarkThemePreview(!e.target.checked)
  }

  const saveConfig = (e) => {
    e.preventDefault()

    changeUserTheme(
      e.target.newColor.value, // newColor
      e.target.newFont.value, // newFontFamily
      e.target.newFontSize.value, // newFontSize
      e.target.newDarkTheme.checked // newDarkTheme
    )
  }

  return (
    <form onSubmit={saveConfig}>
      <label htmlFor="darkThemeToggle">Theme oscuro?</label>
      <input name='newDarkTheme' type="checkbox" id='darkThemeToggle' onChange={darkThemePreview} defaultChecked={defaultDT} />

      <input name='newColor' type="color" onChange={colorPreview} defaultValue={defaultCo} />
      <select name='newFont' placeholder='Fuente' onChange={fontPreview} defaultValue={defaultFF}>
        <optgroup label="Fuente">
          <option value='consolas'>Default Font</option>
          {
            defaultFonts.map(m => <option key={m.name} value={m.css}>{m.name}</option>)
          }
        </optgroup>
      </select>
      <select name='newFontSize' laceholder='Fuente' onChange={fontSizePreview} defaultValue={defaultFS}>
        <optgroup label="Tamaño de letra">
          <option value={1}>Default Size</option>
          {
            [0.5, 1, 1.5, 2, 2.5].map(t => <option key={`fontSize${t}`} value={t}>{`${t} punto`}</option>)
          }
        </optgroup>
      </select>
      <Button>Guardar</Button>
    </form>
  )
}

export default ConfigForm