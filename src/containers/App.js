import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import theme from '../theme';
import './App.css';
import FrontPage from '../containers/FrontPage';
import reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <div>
              <Switch>
                <Route path="/" component={FrontPage} />
              </Switch>
            </div>
          </BrowserRouter>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
