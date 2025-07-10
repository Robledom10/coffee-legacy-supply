# ☕ Marketplace Coffee

Marketplace Coffee es una aplicación web fullstack donde usuarios pueden registrarse, iniciar sesión, publicar productos (si son vendedores), hacer pedidos, dejar reseñas y más.

---

## 📁 Estructura del proyecto

```
.
├── backend/        # API REST con Node.js + TypeScript (sin frameworks)
└── frontend/       # Frontend Js sin frameworks
```

---

## 🚀 Requisitos

- Node.js (v16+)
- npm
- MySQL o MariaDB (base de datos local)
- Git (opcional)

---

## 🔧 Configuración

### 1. Clonar el proyecto

```bash
git clone https://github.com/tu-usuario/marketplace-coffee.git
cd marketplace-coffee
```

### 2. Base de datos

1. Abre tu gestor de base de datos (ej: phpMyAdmin, DBeaver).
2. Importa el archivo SQL de `/backend/marketplace_coffee.sql` o crea la base manualmente.
3. Configura tu archivo `.env` en `/backend`:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=marketplace_coffee
PORT=3000
```

---

## 🟨 Backend

```bash
cd backend
npm install
npm run dev
```

Servidor en: `http://localhost:3000`

---

## 🟦 Frontend

```bash
cd frontend
npm install
npm start
```

Frontend en: `http://localhost:8080`

---

## 📌 Funcionalidades

- Registro y login de usuarios
- Sesión mantenida con localStorage
- Listado y publicación de productos
- Gestión de pedidos y carrito
- Reseñas con calificación
- Filtrado por categoría y búsqueda

---

## 📂 Archivos importantes

| Archivo            | Propósito                              |
|--------------------|------------------------------------------|
| `.env.example`     | Variables de entorno base (no subir .env real) |
| `README.md`        | Este documento                         |
| `.gitignore`       | Evita subir node_modules, dist, .env   |
| `package.json`     | Dependencias y scripts de cada parte   |

---

## ✨ Créditos

Desarrollado por Robledo, stefania y ximena 💻☕

---
