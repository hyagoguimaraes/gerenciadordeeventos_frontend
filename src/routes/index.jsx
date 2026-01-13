import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import { Login } from "../pages/Login";
import { Cadastro } from "../pages/Cadastro";
import { Home } from "../pages/Home";
import { Eventos } from "../pages/Eventos";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div>Carregando...</div>

  return user ? children : <Navigate to="/" />;
}

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/eventos"
          element={
            <PrivateRoute>
              <Eventos />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}