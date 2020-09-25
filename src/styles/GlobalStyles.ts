import {createGlobalStyle} from 'styled-components';
import './Fontes/Nunito-Regular.ttf';


export default createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;

  }

  html, body, #root{
      max-width: 100vw;
      max-height: 100vh;

      width: 100%;
      height: 100%;
  }

  *, button, input{
      border: 0;
      background: none;
      font-family: 'Nunito';
  }
  *:hover{
    transition: all 0.2s;
  }

  html{
      background: var(--primary);
  }
  :root {
    --primary: #fff;
    --secondary: #000;
    --flag: #F8475F;
    --productDetails: #7A7A7A;
  }
`;
