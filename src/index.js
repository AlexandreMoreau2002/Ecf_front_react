/* le scrpit js qui envoie le 'code' a afficher sur l'index html */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css'
import Section from './pages/Section';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Section />
  </React.StrictMode>
);
