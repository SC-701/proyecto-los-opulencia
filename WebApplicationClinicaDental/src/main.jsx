
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes,  } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import './assets/css/index.css'

import AuthRoutes from './routes/AuthRoutes'

const Autenticado = true
createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <Routes>
      {Autenticado ? (
        <>
          <Route path="/autorizacion" element={<Navigate to="/" replace />} />
          <Route path="/*" element={<AppRoutes />} />
        </>
      ) : (
        <>
          <Route path="/autorizacion/*" element={<AuthRoutes />} />
          <Route path="/*" element={<Navigate to="/autorizacion" replace />} />
        </>
      )}
    </Routes>
  </BrowserRouter>
)
