import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    
    a {
    text-decoration: none;
  }
  
  }
`;

export default GlobalStyle;
