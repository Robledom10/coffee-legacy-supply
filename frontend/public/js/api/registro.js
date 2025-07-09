const API_URL = 'http://localhost:3000';

document.getElementById('form-registro').addEventListener('submit', async (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const contraseña = document.getElementById('contraseña_hash').value;

  try {
  const res = await fetch(API_URL + '/api/usuarios', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre, email, contraseña })
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.message || 'Error al registrarse');

    alert('✅ Registro exitoso. Inicia sesión.');
    window.location.href = './login.html'; // Redirige al login
  } catch (err) {
    alert('❌ ' + err.message);
  }
});
