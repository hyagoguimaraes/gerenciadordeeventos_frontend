import { createContext, useEffect, useState } from 'react';
import authService from '../services/authService';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  async function login({ email, senha }) {
    try {
      const response = await authService.login({ email, senha });
      console.log("Dados recebidos no login:", response.data);
      const { token, id } = response.data;

      if (!token || !id === undefined || id === null) {
        console.error("ERRO! Token ou ID ausentes", { token, id });
        return;
      }

      const dadosAdministrador = { email, id }; 

      localStorage.setItem('authToken', token);
      localStorage.setItem('user', JSON.stringify(dadosAdministrador));
      
      setUser(dadosAdministrador);
    } catch (error) {
      console.error("Erro no login:", error);
      throw error;
    }
  }

  function logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}