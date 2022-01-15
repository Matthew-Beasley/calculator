import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { HashRouter as Router } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import App from './App';
import '../assets/styles.css';


const root = document.querySelector('#root');

ReactDOM.render(
  <RecoilRoot>
    <Router>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </Router>
  </RecoilRoot>,
  root
);