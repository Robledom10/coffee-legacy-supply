export function formatearPrecio(numero) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP', // Cambia a USD, EUR, etc. si necesitas
    minimumFractionDigits: 0,
  }).format(numero);
}
