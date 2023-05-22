import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

 html {
  box-sizing: border-box;
 }

 *, *::after, *::before {
  box-sizing: inherit;
 }

 body {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  overscroll-behavior-y: contain;
 }

 a, button {
  font-family: 'Montserrat', sans-serif;
  border: none;
 }

 button:hover {
    cursor: pointer;
 }

 input[type='file'] {
  color: rgba(0, 0, 0, 0);
}
`;
