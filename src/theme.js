import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000',
      paper: '#111'
    },
    text: {
      primary: '#fff',
      secondary: '#aaa'
    }
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    h4: {
      fontWeight: 700,
    },
    body1: {
      lineHeight: 1.5,
    },
  },
});