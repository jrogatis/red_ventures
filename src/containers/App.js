import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import theme from '../theme';
import './App.css';
import FrontPage from '../containers/FronPage';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={FrontPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
