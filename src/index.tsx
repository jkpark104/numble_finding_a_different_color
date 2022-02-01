import { StrictMode } from 'react';
import { render } from 'react-dom';
import '@/styles/global.css';
import App from './App/App';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import './reportWebVitals';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
