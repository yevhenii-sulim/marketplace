import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from 'components/App/App';
import { ThemeProvider } from 'styled-components';
import { theme } from 'utils/theme';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/marketplace">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
