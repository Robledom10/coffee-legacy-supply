import { formatearPrecio } from "../utils/formato.js";

export function crearElementoProducto({ id, nombre, precio, imagen_url }) {
  const div = document.createElement("div");
  div.classList.add("producto");
  div.innerHTML = `
    <h3 class="product-name">${nombre}</h3>
    <p class="product-price">${formatearPrecio(precio)}</p>
    <img src="${imagen_url}" alt="${nombre}" class="producto-imagen">
    <button 
      class="btn-agregar"
      data-id="${id}"
      data-nombre="${nombre}"
      data-precio="${precio}">
      Agregar al carrito
    </button>
  `;
  return div;
}
