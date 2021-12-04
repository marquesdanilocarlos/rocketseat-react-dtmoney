import { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.css";

export const GlobalStyle = createGlobalStyle`
  
  :root {
    --bs-body-bg: #f0f2f5;
    --bs-red: #e52e4d;
    --bs-success: #33CC95;
    --bs-blue: #5429cc;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #ffffff;
    --bs-success-rgb: 51,204,149;
    --bs-danger-rgb: 229,46,77;
    --bs-primary-rgb: 84,41,204;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width:1080px){
      font-size: 93.75%;
    }

    @media (max-width:720px){
      font-size: 87.5%;
    }
  }

  body {
    background: var(--bs-body-bg);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
    border: none;
  }

  [disabled] {
  opacity: 0.6;
  cursor: not-allowed;
  }
`;
