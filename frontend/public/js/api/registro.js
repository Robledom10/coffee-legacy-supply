const API_URL = 'http://localhost:3000/api/usuarios'; // Ajusta la URL si es necesario

document.getElementById('form-registro').addEventListener('submit', async (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const tipo_usuario = document.getElementById('tipo_usuario').value;

  try {
    const res = await fetch(API_URL + '/registro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, email, password, tipo_usuario }),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message || 'Error al registrarse');

    alert('✅ Registro exitoso. Inicia sesión.');
    window.location.href = '../../pages/login.html'; // Redirige al login
  } catch (err) {
    alert('❌ ' + err.message);
  }
});
