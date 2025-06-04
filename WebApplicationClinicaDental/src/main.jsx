import {useEffect} from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import './assets/css/index.css'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
)
