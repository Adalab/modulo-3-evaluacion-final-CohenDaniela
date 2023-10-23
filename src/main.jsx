import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { HashRouter } from "react-router-dom";
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
  <App />
</HashRouter>
)
