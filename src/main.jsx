import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import '@pqina/flip/dist/flip.min.css';
import './styles/reset.css';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
