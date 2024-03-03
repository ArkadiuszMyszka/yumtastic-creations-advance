import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './styles/theme.jsx';
import { GlobalStyles } from './styles/GlobalStyles.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

//import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="/yumtastic-creations-advance">
          <GlobalStyles />
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
