import { useState } from "react";
import { registrarUsuario } from "../services/api";

export default function Registro() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    contraseña: "",
    tipo_usuario: "comprador",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await registrarUsuario(form);
    alert("Usuario creado con ID: " + res.id);
  };

  return (
    <form onSubmit={handleSubmit}>
  <h1>Registro</h1>
  <input placeholder="Nombre" onChange={(e) => setForm({ ...form, nombre: e.target.value })} />
  <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
  <input type="password" placeholder="Contraseña" onChange={(e) => setForm({ ...form, contraseña: e.target.value })} />
  
  <label htmlFor="tipo_usuario">Tipo de usuario</label>
  <select
    id="tipo_usuario"
    value={form.tipo_usuario}
    onChange={(e) => setForm({ ...form, tipo_usuario: e.target.value })}
  >
    <option value="comprador">Comprador</option>
    <option value="vendedor">Vendedor</option>
  </select>
  
  <button type="submit">Registrarse</button>
</form>
  );
}
