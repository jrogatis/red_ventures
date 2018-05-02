import { createMuiTheme } from 'material-ui/styles';
import { red } from 'material-ui/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#931f1f',
      main: '#931f1f',
      dark: '#931f1f',
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
      appBar: '#FFFFFF',
    },
  },
});

export default theme;
