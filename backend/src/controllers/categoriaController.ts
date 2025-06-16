import { IncomingMessage, ServerResponse } from 'http';
import {
  obtenerCategorias,
  crearCategoria,
  eliminarCategoria
} from '../services/categoriaService';

/**
 * Controlador para manejar las rutas de categorías.
 */
export async function handleCategorias(req: IncomingMessage, res: ServerResponse) {
  const url = req.url || '';
  const idMatch = url.match(/^\/api\/categorias\/(\d+)$/);

  // 📦 GET /api/categorias → Obtener todas
  if (req.method === 'GET' && url === '/api/categorias') {
    try {
      const categorias = await obtenerCategorias();
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify(categorias));
    } catch (err) {
      res.statusCode = 500;
      return res.end(JSON.stringify({ error: 'Error al obtener categorías' }));
    }
  }

  // 🆕 POST /api/categorias → Crear una nueva categoría (sin protección)
  if (req.method === 'POST' && url === '/api/categorias') {
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', async () => {
      try {
        const { nombre } = JSON.parse(body);
        if (!nombre || typeof nombre !== 'string') {
          res.statusCode = 400;
          return res.end(JSON.stringify({ error: 'Nombre requerido' }));
        }

        const id = await crearCategoria(nombre);
        res.statusCode = 201;
        res.end(JSON.stringify({ id }));
      } catch (err) {
        res.statusCode = 500;
        res.end(JSON.stringify({ error: 'Error al crear categoría' }));
      }
    });
    return;
  }

  // ❌ DELETE /api/categorias/:id → Eliminar una categoría por ID (sin protección)
  if (req.method === 'DELETE' && idMatch) {
    const id = parseInt(idMatch[1]);

    try {
      await eliminarCategoria(id);
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify({ success: true }));
    } catch (err) {
      res.statusCode = 500;
      return res.end(JSON.stringify({ error: 'Error al eliminar categoría' }));
    }
  }

  // 🚫 Ruta no encontrada
  res.statusCode = 404;
  res.end('Not Found');
}
