import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './components';
import { App } from './pages';

const ROOT = ReactDOM.createRoot(document.getElementById('root'));
ROOT.render(
    <>
    <GlobalStyle />
    <App />
    </>
)