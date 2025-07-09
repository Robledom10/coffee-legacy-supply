document.getElementById('form-login').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const contraseña = document.getElementById('contraseña_hash').value;

  try {
    const response = await fetch('http://localhost:3000/api/usuarios/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, contraseña }), // Asegúrate que el backend también use "contraseña"
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    const data = await response.json();
    console.log('✅ Login exitoso:', data);

    // Guardar token y usuario
    localStorage.setItem('token', data.token);
    localStorage.setItem('usuario', JSON.stringify(data.usuario));

    window.location.href = '../index.html';
  } catch (err) {
    console.error('❌ Error al iniciar sesión:', err.message);
  }
});
