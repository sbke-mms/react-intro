import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Homepage from './pages/Homepage.jsx'
import MainLayout from './layouts/MainLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainLayout>
      <Homepage />
    </MainLayout>
  </StrictMode>,
)
