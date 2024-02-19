import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp.jsx';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp />
  </React.StrictMode>,
)
