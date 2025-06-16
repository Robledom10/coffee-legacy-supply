import { db } from '../db';
import { Categoria } from '../models/categoria';

export async function obtenerCategorias(): Promise<Categoria[]> {
  const [rows] = await db.query('SELECT * FROM categorias');
  return rows as Categoria[];
}

export async function crearCategoria(nombre: string): Promise<number> {
  const [result] = await db.query(
    'INSERT INTO categorias (nombre) VALUES (?)',
    [nombre]
  );
  return (result as any).insertId;
}

export async function eliminarCategoria(id: number): Promise<void> {
  await db.query('DELETE FROM categorias WHERE id = ?', [id]);
}
