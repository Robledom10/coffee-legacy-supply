// utils/crearElementoProducto.js
export function crearElementoProducto({ id, nombre, precio, imagen_url }) {
  const div = document.createElement('div');
  div.classList.add('producto');
  div.innerHTML = `
    <h3>${nombre}</h3>
    <p>Precio: $${precio}</p>
    <img src="${imagen_url}" alt="${nombre}" class="producto-imagen">
    <button 
      class="btn-agregar" 
      data-id="${id}" 
      data-nombre="${nombre}" 
      data-precio="${precio}" 
      data-imagen="${imagen_url}">
      Agregar al carrito
    </button>
  `;
  return div;
}
