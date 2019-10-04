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
  grid-template-columns: 1fr [card-left] 2vw 20vw [card-right] 20vw 20vw 2vw 1fr;
  grid-template-rows: 1fr [card-top] 3vh 30vh [card-bottom] 20vh 30vh 3vh 1fr;
  grid-template-areas: ".... .... .... .... .... .... ...."
                       ".... .... .... .... .... .... ...."
                       ".... .... calc calc calc .... ...."
                       ".... .... calc calc calc .... ...."
                       ".... .... calc calc calc .... ...."
                       ".... .... .... .... .... .... ...."
                       ".... .... .... .... .... .... ....";
`