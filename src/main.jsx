import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Router } from 'react-router-dom'
import Music from './pages/Music.jsx'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <App />
    {/* <Music></Music> */}
  </BrowserRouter>


)
