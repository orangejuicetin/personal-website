import { createGlobalStyle } from "styled-components"
import { DARK_GRAY } from "./constants/colors"

const GlobalStyle = createGlobalStyle`
  html {
    font-family: "Avenir", sans-serif;  
    color: ${DARK_GRAY}; 
    margin: 0; 
    padding: 0; 
    width: 100%; 
    height: 100%; 
  }   
`

export default GlobalStyle
