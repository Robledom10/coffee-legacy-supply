import { useState } from "react";
import { login } from "../services/api";
import { useAuth } from "../context/useAuth";


export default function Login() {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const { login: iniciarSesion } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await login(email, contraseña);
    if (res.usuario) {
      iniciarSesion(res.usuario);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        placeholder="Contraseña"
        onChange={(e) => setContraseña(e.target.value)}
      />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}
