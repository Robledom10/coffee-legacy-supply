const API_URl = "http://localhost:3000/api";

export async function obtenerProductos() {
  const res = await fetch(`${API_URl}/productos`);
  return await res.json();
}

export async function login(email: string, contraseña: string) {
  const res = await fetch(`${API_URl}/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, contraseña }),
  });
  return await res.json();
}

export async function registrarUsuario(data: {
  nombre: string;
  email: string;
  contraseña: string;
  tipo_usuario: string;
}) {
  const res = await fetch(`${API_URl}/registro`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  });
  return await res.json();
}
