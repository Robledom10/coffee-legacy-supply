const API_URL = 'http://localhost:3000/api/productos'; // 👈 Ajusta si tu backend está en otro puerto

export async function obtenerProductos() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Error del servidor: ${response.status}`);
    }

    const data = await response.json();

    // 👇 Asegúrate que todos los precios vengan como número
    return data.map(p => ({
      ...p,
      precio: parseFloat(p.precio)
    }));

  } catch (error) {
    console.error('❌ Error al obtener productos:', error);
    return [];
  }
}
