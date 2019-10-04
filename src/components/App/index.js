import React, { Fragment } from 'react';
import Calculator from "../Calculator/index";
import Card from '../Card/index';
import { GlobalStyles, Wrapper } from "./styles";

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Wrapper>
        <Card />
        <Calculator />
      </Wrapper>
    </Fragment>
  )
}

export default App;