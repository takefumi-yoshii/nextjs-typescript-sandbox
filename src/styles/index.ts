import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
export const theme = {}
export const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
  }
  h1{
    font-size: 3.2rem;
    font-weight: bold;
  }
`
