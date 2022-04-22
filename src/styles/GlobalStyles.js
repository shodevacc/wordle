import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
}
  body{
      background: #121213;

  
  }
  p,h1,h2,h3,h4,h5,h6, label{
    color:#fff;
  }
  .emptyTile{
    background: transparent;
    border: 2px solid #3a3a3c;
  }
  .correctTile{
    background: #538d4e !important;
    border: none;
  }
  .wrongTile{
    background: #3a3a3c !important;
    pointer-events:none;
    border: none;
  }
  .inputTile{
    border-color:#565758;
  }
  .wrongPosTile{
    background: #b59f3b !important;
    border: none;
  }
`

export default GlobalStyle
