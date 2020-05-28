import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import ProgressProvider from "./providers/progress_provider";
import UserProvider from "./providers/user_provider";

ReactDOM.render(
  <UserProvider>
    <ProgressProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProgressProvider>
  </UserProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();