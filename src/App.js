import React, { Component, Fragment } from 'react';
import { GlobalStyle } from './style';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
          Hello React!        
      </Fragment>
    );
  }
}

export default App;