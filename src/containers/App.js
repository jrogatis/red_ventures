import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';

import asyncComponent from '../utils/AsyncComponent';
import theme from '../theme';
import reducers from '../reducers';

const AsyncHome = asyncComponent(() => import('../components/FrontPage'));

let middlewares;
if (process.env.NODE_ENV !== 'production') {
  const logger = require('redux-logger').default;
  middlewares = [logger, reduxPromise];
} else {
  middlewares = [reduxPromise];
}
export const store = createStore(reducers, applyMiddleware(...middlewares));
// const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <React.Fragment>
              <CssBaseline />
              <Switch>
                <Route path="/" component={AsyncHome} />
              </Switch>
            </React.Fragment>
          </BrowserRouter>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
