import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import './index.css'
import ProductProvider from './context/ProductContext.jsx'
import "aos/dist/aos.css";
import "animate.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ProductProvider>
      <App />
    </ProductProvider>
  </BrowserRouter>
)
