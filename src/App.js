import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './router/Router';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#0A1929',
      contrastText: '#EDEEF0',
      light: '#0A1929',
      dark: '#0A1929'
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
