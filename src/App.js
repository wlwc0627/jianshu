import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import { IconfontStyle } from './static/iconfont/iconfont.js';
import Header from './common/header';
import store from './store';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <IconfontStyle />
        <Provider store={store}>  
          <Header />
        </Provider>        
      </Fragment>
    );
  }
}

export default App;