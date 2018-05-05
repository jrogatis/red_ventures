import { createMuiTheme } from 'material-ui/styles';
import { red } from 'material-ui/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#F98100',
      main: '#F98100',
      dark: '#F98100',
      contrastText: 'white',
    },
    secondary: {
      light: '#2d7ebb',
      main: '#2d7ebb',
      dark: '#2d7ebb',
      contrastText: 'white',
    },
    error: red,
    background: {
      appBar: 'trasparent',
    },
  },
  typography: {
    fontFamily: 'Heebo',
    fontWeightRegular: '100',
  },
});

export default theme;
