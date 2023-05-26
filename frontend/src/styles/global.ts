import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 :root {
    //--color-primary: #219653;
    //--color-primary-focus: #93D7AF;
    //--color-secondary: #EB5757;
    --color-grey-0: #F5F5F5;
    --color-grey-100: #E0E0E0;
    --color-grey-300: #828282;
    --color-grey-600: #333333;
    --color-success: #168821;
    --color-error: #E60000;
    font-size: 60%;
  }
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  body,html{
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    font-family: 'Inter', sans-serif;
    padding: 1rem;
    margin: 0;
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
  }
  body, input, button, textarea {
    font-size: 1.6rem;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
`;