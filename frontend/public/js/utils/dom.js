import { formatearPrecio } from "../utils/formato.js";

export function crearElementoProducto({ id, nombre, precio, imagen_url }) {
  const div = document.createElement("div");
  div.classList.add("producto");
  div.innerHTML = `
    <img src="${imagen_url || 'https://via.placeholder.com/220x150'}" alt="${nombre}">
    <div class="info">
      <h3>${nombre}</h3>
      <p class="precio">${formatearPrecio(precio)}</p>
      <button 
        class="btn-agregar"
        data-id="${id}"
        data-nombre="${nombre}"
        data-precio="${precio}">
        Agregar al carrito
      </button>
    </div>
  `;
  return div;
}
