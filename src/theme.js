import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6200ea',
    },
    secondary: {
      main: '#03dac6',
    },
    error: {
      main: '#b00020',
    },
    background: {
      default: '#f0f2f5',
      paper: '#ffffff',
    },
  },
  typography: {
    h4: {
      color: '#f44336',
    },
    h6: {
      color: '#6200ea',
    },
    body1: {
      color: '#333333',
    },
  },
});

export default theme;
