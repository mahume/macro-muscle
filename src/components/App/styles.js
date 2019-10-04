import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`
export const Wrapper = styled.main`
  height: 100vh;

  display: grid;
  grid-template: ".... .... .... .... .... .... ...." 1fr
                 ".... .... .... .... .... .... ...." 3vh
                 ".... .... calc calc calc .... ...." 30vh
                 ".... .... calc calc calc .... ...." 20vh
                 ".... .... calc calc calc .... ...." 30vh
                 ".... .... .... .... .... .... ...." 3vh
                 ".... .... .... .... .... .... ...." 1fr
                 / 1fr 2vw 20vw 20vw 20vw 2vw 1fr;
`