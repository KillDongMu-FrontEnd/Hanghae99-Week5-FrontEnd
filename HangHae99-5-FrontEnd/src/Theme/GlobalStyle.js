import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    box-sizing: border-box;
    font-family: 'Apple SD Gothic Neo','Malgun Gothic',arial,sans-serif;
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    margin: 0;
    transition: all 0.3s linear;
  }
`
export default GlobalStyle;