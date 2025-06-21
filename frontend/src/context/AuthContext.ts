import { createContext } from "react";
import type { Usuario } from "../types";

export interface AuthContextProps {
  usuario: Usuario | null;
  login: (usuario: Usuario) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);
