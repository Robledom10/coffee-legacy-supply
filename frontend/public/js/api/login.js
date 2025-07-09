const form = document.getElementById('form-login');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  try {
    const res = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (!res.ok) {
      alert(`❌ ${data.message || 'Error al iniciar sesión'}`);
      return;
    }

    // Suponiendo que el backend responde con token y datos del usuario
    localStorage.setItem('token', data.token);
    localStorage.setItem('usuario', JSON.stringify(data.usuario));

    alert('✅ Sesión iniciada con éxito');

    // Redirigir a home o perfil
    window.location.href = '../../index.html';
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    alert('❌ Error al conectar con el servidor');
  }
});
