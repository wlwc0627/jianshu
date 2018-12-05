import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import { BrowserRouter, Route } from 'react-router-dom';
import { IconfontStyle } from './static/iconfont/iconfont.js';
import Header from './common/header';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <IconfontStyle />
        <Provider store={store}>           
            <BrowserRouter>
              <div>
                <Header />
                <Route path='/' exact component={Home}></Route>
                <Route path='/detail/:id' exact component={Detail}></Route>         <Route path='/login' exact component={Login}></Route>    
              </div>
            </BrowserRouter> 
        </Provider>        
      </Fragment>
    );
  }
}

export default App;