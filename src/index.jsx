import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import ThemeContext from './contexts/Theme'
import UserSessionContext from './contexts/UserSession'

ReactDOM.render(
  <React.StrictMode>
    <UserSessionContext>
      <ThemeContext>
        <App />
      </ThemeContext>
    </UserSessionContext>
  </React.StrictMode>,
  document.getElementById('root')
);