/* le scrpit js qui envoie le 'code' a afficher sur l'index html */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css'
import App from './App_firstpage';
import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
);
