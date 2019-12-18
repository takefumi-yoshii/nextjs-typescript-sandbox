import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
export const theme = {}
export const GlobalStyle = createGlobalStyle`
  ${reset}
  html, body {
    font-size: 62.5%;
  }
`
