import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ use .client here
import App from './app'; // ✅ Make sure the casing matches your file name (App.js)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
