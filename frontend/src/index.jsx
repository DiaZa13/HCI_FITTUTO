import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import App from './components/app';
import { ThemeContextProvider } from './context/themeContext'


const container = document.getElementById('root');
ReactDOM.render(<ThemeContextProvider><App /></ThemeContextProvider>, container);
