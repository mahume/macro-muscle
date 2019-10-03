import React, { Fragment } from 'react';
import Calculator from "../Calculator/index";
import { GlobalStyles, Wrapper } from "./styles";

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Wrapper>
        <Calculator />
      </Wrapper>
    </Fragment>
  )
}

export default App;