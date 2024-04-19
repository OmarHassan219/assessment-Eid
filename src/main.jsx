import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ParallaxProvider } from 'react-scroll-parallax';
import './i18n';
import { AppProvider } from './context/AudioContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
    <ParallaxProvider>
    <App />
    </ParallaxProvider>
    </AppProvider>
  </React.StrictMode>,
)
