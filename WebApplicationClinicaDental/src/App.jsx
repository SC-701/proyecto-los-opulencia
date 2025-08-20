import { Routes, Route, Navigate } from "react-router-dom";
import { useLogin } from "./hooks/UseLogin"; 
import AppRoutes from "./routes/AppRoutes";
import AuthRoutes from "./routes/AuthRoutes";
import { useEffect, useState } from "react";

function App() {
  const { token, checkAuth } = useLogin();
  const isAuthenticated = Boolean(token);
  const [validando, setValidando] = useState(true);
useLogin
  useEffect(() => {
    const verificar = async () => {
      await checkAuth(); 
      setValidando(false);
    };
    verificar();
  }, [checkAuth]);

  if (validando) return null; 

  return (
    <Routes>
      {isAuthenticated ? (
        <>
          <Route path="/autorizacion/*" element={<Navigate to="/" replace />} />
          <Route path="/*" element={<AppRoutes />} />
        </>
      ) : (
        <>
          <Route path="/autorizacion/*" element={<AuthRoutes />} />
          <Route path="/*" element={<Navigate to="/autorizacion" replace />} />
        </>
      )}
    </Routes>
  );
}

export default App;
