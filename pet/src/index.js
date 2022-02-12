import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const application = (
  <BrowserRouter>
    <App />
    <Dashboard />
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
 {application}
  </React.StrictMode>,
  document.getElementById('root'),
);
