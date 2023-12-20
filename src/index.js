import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './redux/store';
// import './index.css';

const theme = {
  color: {
    bg: '#9a9a9a',
    accent: '#5a8461',
    count: '#00911c',
  },
  spasing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
