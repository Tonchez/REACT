# Ciber-Conscious — React SPA

Aplicación web de una sola página (SPA) desarrollada con React + Vite para la materia TC2005B.

## Stack

- **React 18** + Vite
- **React Router DOM v6** — navegación y rutas protegidas
- **Material UI v5** — componentes y tema global
- **Context API** — manejo de estado de autenticación

## Estructura

```
src/
├── components/
│   ├── CyberButton.jsx     # Botón personalizado reutilizable
│   ├── Footer.jsx          # Pie de página
│   ├── Layout.jsx          # Wrapper con Navbar + Footer
│   ├── Navbar.jsx          # Barra de navegación (oculta en login)
│   └── ProtectedRoute.jsx  # HOC para restringir rutas
├── context/
│   └── AuthContext.jsx     # Estado global de sesión
├── hooks/
│   └── useCounter.js       # Hook personalizado para contador
└── pages/
    ├── Counter.jsx          # Vista contador (useCounter hook)
    ├── Home.jsx             # Vista principal con tips dinámicos
    ├── Login.jsx            # Vista login con conexión a backend
    └── Profile.jsx          # Vista de perfil de usuario
```

## Requisitos cumplidos

| Requisito | Archivo |
|---|---|
| Proyecto con Vite | npm create vite |
| React Router DOM | App.jsx |
| Rutas protegidas | ProtectedRoute.jsx |
| Material UI | Todos los componentes |
| Navbar (oculta en login) | Navbar.jsx + Layout.jsx |
| Vista de login | Login.jsx |
| Párrafo con variable | Home.jsx (tips dinamicos) |
| Botón que actualiza variable | Home.jsx (siguiente consejo) |
| Componente botón personalizado | CyberButton.jsx |
| Login conectado al backend | Login.jsx -> VITE_BACKEND_URL/api/auth/login |
| Logout en navbar | Navbar.jsx |
| Pie de página | Footer.jsx |

## Setup

```bash
npm install
cp .env.example .env
# Editar VITE_BACKEND_URL con la URL de tu backend
npm run dev
```

## Backend esperado

El login realiza `POST /api/auth/login` con `{ username, password }`.
Respuesta exitosa: `{ token: "..." }`.
