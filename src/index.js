import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import { theme } from 'utils/theme';
import App from 'components/App/App';
import { persistor, store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter basename="/marketplace">
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
