import React from "react";
import ConfigPreviewStyled from "./ConfigPreviewStyled";


const ConfigPreview = ({ fontPreview, colorPreview, fontSizePreview, darkThemePreview }) => {

  return (
    <ConfigPreviewStyled
      font={fontPreview}
      color={colorPreview}
      fontSize={fontSizePreview}
      darkTheme={darkThemePreview}
    >
      <div>
        <span>ok</span>
        <span className='wrongWordPreview'>no-ok</span>
        <span>ok</span>
        <span>ok</span>
        <span className='wrongWordPreview'>no-ok</span>
      </div>

      <div>
        <span>Act</span>
        <span className='currentCharPreview'> <strong>u</strong></span>
        <span>al</span>
      </div>

      <div>
        <span>proxima</span>
        <span>palabra</span>
        <span>proxima</span>
        <span>palabra</span>
      </div>

    </ConfigPreviewStyled>
  )
}

export default ConfigPreview