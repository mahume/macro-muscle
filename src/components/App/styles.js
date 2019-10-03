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
  grid-template-columns: 1fr 60% 1fr;
  grid-template-rows: 1fr 50% 1fr;
  grid-template-areas: ".... .... ...."
                        ".... calc ...."
                        ".... .... ....";
`