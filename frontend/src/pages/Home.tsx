import { useEffect, useState } from "react";
import { obtenerProductos } from "../services/api";

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
}


export default function Home() {
    const [productos,setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    obtenerProductos().then(setProductos);
  }, []);

  return (
    <div>
      <h1>Productos</h1>
      {productos.map((p) => (
        <div key={p.id}>
          <h3>{p.nombre}</h3>
          <p>{p.descripcion}</p>
          <strong>${p.precio}</strong>
        </div>
      ))}
    </div>
  );
}
