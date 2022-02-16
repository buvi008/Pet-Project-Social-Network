import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './components/redux/store';
// import Dashboard from './components/cabinet/Dashboard';

const application = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>{application}</React.StrictMode>,
  document.getElementById('root'),
);
