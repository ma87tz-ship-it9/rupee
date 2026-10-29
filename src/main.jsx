import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const HideLoading = () => {
  useEffect(() => {
    // Subiri sekunde 2.5 (2500ms) kisha ficha loading screen
    const timer = setTimeout(() => {
      const loader = document.getElementById('loading-screen');
      if (loader) {
        // Ongeza animation ya kufifia (fade out)
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.5s ease';
        
        // Baada ya kufifia, ifute kabisa
        setTimeout(() => {
          loader.style.display = 'none';
        }, 500);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  return null;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HideLoading />
    <App />
  </React.StrictMode>,
)