import { obtenerProductos } from "./api/productos.js";
import { crearElementoProducto } from "./utils/dom.js";
import {
  agregarAlCarrito,
  renderizarCarrito,
  actualizarContadorCarrito,
  eliminarProducto,
  vaciarCarrito,
  obtenerCarrito,
  actualizarCantidadProducto
} from "./utils/carrito.js";

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


document.addEventListener("DOMContentLoaded", async () => {
  const contenedor = document.getElementById("product-list");
  const productos = await obtenerProductos();

  actualizarContadorCarrito();
  renderizarCarrito();

  productos.forEach((producto) => {
    const productoEl = crearElementoProducto(producto);
    contenedor.appendChild(productoEl);
  });
});

// 👉 CLICK GLOBAL PARA TODO
document.addEventListener("click", async (e) => {
  // Agregar al carrito
if (e.target.classList.contains("btn-agregar")) {
  const boton = e.target;

  const id = boton.dataset.id;
  const nombre = boton.dataset.nombre;
  const precio = parseFloat(boton.dataset.precio);

  const producto = { id, nombre, precio };
  agregarAlCarrito(producto);
  renderizarCarrito();
  document.getElementById("carrito-panel").classList.add("visible");
}

  // Abrir carrito
  if (e.target.id === "btn-carrito") {
    renderizarCarrito();
    document.getElementById("carrito-panel").classList.add("visible");
  }

  // Cerrar carrito
  if (e.target.id === "cerrar-carrito") {
    document.getElementById("carrito-panel").classList.remove("visible");
  }

  // Eliminar producto
  if (e.target.classList.contains("btn-eliminar")) {
    const id = e.target.dataset.id;
    eliminarProducto(id);
    renderizarCarrito();
  }

  // Vaciar carrito
  if (e.target.id === "vaciar-carrito") {
    if (confirm("¿Vaciar todo el carrito?")) {
      vaciarCarrito();
      renderizarCarrito();
    }
  }

  // Finalizar compra
  if (e.target.id === "finalizar-compra") {
    const carrito = obtenerCarrito();

    if (carrito.length === 0) {
      alert("🚫 Tu carrito está vacío");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/pedidos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productos: carrito }),
      });

      if (!res.ok) throw new Error("Error en el backend");

      vaciarCarrito();
      renderizarCarrito();
      alert("✅ Compra finalizada con éxito");
    } catch (error) {
      console.error(error);
      alert("❌ Error al procesar la compra");
    }
  }
});

// 👉 INPUT para cambiar cantidades
document.addEventListener("input", (e) => {
  if (e.target.classList.contains("cantidad-input")) {
    const id = e.target.dataset.id;
    const nuevaCantidad = parseInt(e.target.value);

    if (nuevaCantidad >= 1) {
      actualizarCantidadProducto(id, nuevaCantidad);
      renderizarCarrito(); // <-- Refrescar visual
    }
  }
});

const navContainer = document.getElementById("nav-container");

fetch("/components/nav.html")
  .then((res) => res.text())
  .then((html) => {
    navContainer.innerHTML = html;

    // 👇 Recién después que el HTML se inserta, podés hacer cosas con los botones
    importarEventosDelNav();
  });