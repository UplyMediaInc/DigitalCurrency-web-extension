import React from 'react';
import ReactDOM from 'react-dom/client';
import { MemoryRouter as Router } from "react-router-dom";
import { MoralisProvider } from 'react-moralis';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <MoralisProvider serverUrl='https://xigvrhcyggix.usemoralis.com:2053/server' appId='4tjHZmvTJyynjlY1KmKobPxUF1obY60cGOz4yHQD'>
      <App />
    </MoralisProvider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
