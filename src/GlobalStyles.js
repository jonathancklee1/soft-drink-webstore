import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  width: 100%;
  font-family: Roboto, sans-serif;
}

h1{
   font-weight: 900;
}
img{max-width:100%}
a{text-decoration:none;}
`;

export default GlobalStyles;
