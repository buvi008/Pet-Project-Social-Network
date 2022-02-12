import './App.css';
import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Album from './components/mainPage/main';
import SignIn from './components/login.js/signIn';
import SignUp from './components/signUp.js/signUp';

function App() {
  return (
    <div>
      <Album />
    </div>
  );
}

export default App;
