import { formatearPrecio } from './formato.js';

const CLAVE_CARRITO = "carrito";

export function obtenerCarrito() {
  const guardado = localStorage.getItem(CLAVE_CARRITO);
  return guardado ? JSON.parse(guardado) : [];
}

export function guardarCarrito(carrito) {
  localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
}

export function agregarAlCarrito(producto) {
  const carrito = obtenerCarrito();
  const existente = carrito.find((p) => p.id === producto.id);

  if (existente) {
    existente.cantidad += 1;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  guardarCarrito(carrito);
  actualizarContadorCarrito();
}

export function renderizarCarrito() {
  const carrito = obtenerCarrito();
  const contenedor = document.getElementById("carrito-items");
  const totalEl = document.getElementById("carrito-total");

  contenedor.innerHTML = "";
  let total = 0;

  carrito.forEach(({ id, nombre, precio, cantidad }) => {
    const subtotal = precio * cantidad;
    total += subtotal;

    const div = document.createElement("div");
    div.innerHTML = `
      <strong>${nombre}</strong><br>
      Precio: ${formatearPrecio(precio)}<br>
      Cantidad: <input type="number" min="1" value="${cantidad}" class="cantidad-input" data-id="${id}" style="width: 60px;"><br>
      Subtotal: ${formatearPrecio(subtotal)}<br>
      <button class="btn-eliminar" data-id="${id}">Eliminar</button>
    `;

    contenedor.appendChild(div);
  });

  totalEl.textContent = `Total: ${formatearPrecio(total)}`;
}


export function actualizarCantidadProducto(id, cantidad) {
  const carrito = obtenerCarrito();
  const index = carrito.findIndex((p) => p.id === id);

  if (index !== -1) {
    carrito[index].cantidad = cantidad;
    guardarCarrito(carrito);
    actualizarContadorCarrito();
    renderizarCarrito();
  }
}

export function actualizarContadorCarrito() {
  const carrito = obtenerCarrito();
  const totalCantidad = carrito.reduce((sum, item) => sum + item.cantidad, 0);
  const contador = document.getElementById("contador-carrito");

  if (contador) {
    contador.textContent = `(${totalCantidad})`;
  }
}

export function eliminarProducto(id) {
  let carrito = obtenerCarrito();
  carrito = carrito.filter((producto) => producto.id !== id);
  guardarCarrito(carrito);
  actualizarContadorCarrito();
  renderizarCarrito();
}

export function vaciarCarrito() {
  localStorage.removeItem(CLAVE_CARRITO);
  actualizarContadorCarrito();
  renderizarCarrito();
}

const usuario = JSON.parse(localStorage.getItem('usuario'));

if (usuario) {
  const nombre = usuario.nombre;
  console.log("Bienvenido, " + nombre);

  // Ejemplo: mostrar en un span con id="bienvenida"
  const span = document.getElementById('bienvenida');
  if (span) {
    span.textContent = `¡Hola, ${nombre}!`;
  }
}