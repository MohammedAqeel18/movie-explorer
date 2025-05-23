import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/themes.css';
import { ThemeModeProvider } from "./context/ThemeContext";


const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeModeProvider>
    <App />
  </ThemeModeProvider>
);


reportWebVitals();
