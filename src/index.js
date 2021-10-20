import React from 'react';
import ReactDOM from 'react-dom';
import { UserProvider } from './UserContext';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <UserProvider>
      <App />
  </UserProvider>,
  rootElement
);
