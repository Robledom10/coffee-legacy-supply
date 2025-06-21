import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import type { Usuario } from "../types";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("usuario");
    if (stored) setUsuario(JSON.parse(stored));
  }, []);

  const login = (user: Usuario) => {
    setUsuario(user);
    localStorage.setItem("usuario", JSON.stringify(user));
  };

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("usuario");
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
