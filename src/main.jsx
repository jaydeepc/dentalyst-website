import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Copy static assets to public directory
const copyStaticAssets = () => {
  const assets = {
    'clinic-photos': ['1.jpg', '2.jpg', '3.jpg', 'working-on-patient.jpg'],
    'doctor-photo': ['dranindita.png'],
    'logo': ['logo.png']
  };

  Object.entries(assets).forEach(([folder, files]) => {
    files.forEach(file => {
      const img = new Image();
      img.src = `/${folder}/${file}`;
    });
  });
};

copyStaticAssets();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
