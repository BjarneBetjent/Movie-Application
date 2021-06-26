import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

import App from './App';

//axios.defaults.baseURL = "http://localhost:5001" 
/* const port = process.env.PORT || 5001;
axios.defaults.baseURL = `https://movie-buffies.herokuapp.com:${port}`; */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

