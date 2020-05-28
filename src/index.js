import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import ProgressProvider from "./providers/progress_provider";

ReactDOM.render(
  <ProgressProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProgressProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();