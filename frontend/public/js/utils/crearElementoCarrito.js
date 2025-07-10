export function crearElementoProducto({ id, nombre, precio, imagen_url }) {
  const div = document.createElement("div");
  div.classList.add("producto");

  div.innerHTML = `
    <img src="${imagen_url}" alt="${nombre}" class="producto-imagen">

    <div class="info">
      <h3>${nombre}</h3>
      <p class="precio">$${precio.toLocaleString("es-CO")}</p>
    </div>

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
