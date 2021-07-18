import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import "./styles.css";

import App from './App';

// Only for local development
axios.defaults.baseURL = "http://localhost:5001";

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

