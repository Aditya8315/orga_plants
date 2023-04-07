import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "@fontsource/poppins";
import Header from './component/header'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <App />
    <button class="fixed bottom-5 right-5 bg-white py-2 px-4 border-2 border-[#097150] text-[#097150] rounded-2xl">Contact Us</button>
  </React.StrictMode>
);

