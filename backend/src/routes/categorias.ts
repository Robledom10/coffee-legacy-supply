import { IncomingMessage, ServerResponse } from 'http';
import { handleCategorias } from '../controllers/categoriaController';

export function categoriasRouter(req: IncomingMessage, res: ServerResponse) {
  handleCategorias(req, res);
}
