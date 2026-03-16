import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { appBasename } from './lib/site'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={appBasename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
