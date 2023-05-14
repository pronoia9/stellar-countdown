import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import '@pqina/flip/dist/flip.min.css';
import './reset.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
