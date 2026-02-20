Proyecto 7 - PC & Tech

Descripción
Este es un proyecto de e-commerce para la venta de productos tecnológicos. El frontend está desarrollado en React con TailwindCSS y el backend está basado en Node.js, Express y MongoDB. Los usuarios pueden registrarse, iniciar sesión, ver productos, agregarlos al carrito y realizar pagos mediante una integración con Stripe.

Características
- Registro y Login de usuarios.
- Visualización de productos con información detallada.
- Filtro de productos por categoría.
- Carrito de compras.
- Proceso de pago con Stripe.
- Sección de perfil de usuario.

Tecnologías Utilizadas

Frontend
- React.js
- TailwindCSS
- React Router
- Context API para manejo de estado global
- Axios para las solicitudes HTTP

Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Stripe para procesar pagos

Estructura de Carpetas del Frontend
frontend/
├── assets/
│   └── images/               # Imágenes de los productos
├── components/               # Componentes reutilizables (Header, Footer, etc.)
│   ├── Layout/
│   ├── Home/
│   ├── Auth/
│   ├── Product/
│   ├── Checkout/
│   └── Profile/
├── contexts/                 # Contextos para el manejo de usuarios y productos
│   ├── Users/
│   └── Product/
├── routes/                   # Rutas protegidas
│   └── Private.js
├── utils/                    # Utilidades y funciones
│   └── formatCLP.js
├── App.js                    # Componente principal
├── index.css                 # Estilos globales
└── index.js                  # Entrada principal de la app

URL del Frontend
- URL: https://frontend-proyecto-7.onrender.com

Estructura de Carpetas del Backend
backend/
├── config/                   # Archivos de configuración (baseURL de la API, etc.)
├── controllers/              # Lógica de controladores de las rutas
├── models/                   # Modelos de MongoDB (Usuarios, Productos, etc.)
├── routes/                   # Rutas de la API
│   ├── auth.js               # Rutas para autenticación
│   ├── product.js            # Rutas para productos
│   └── cart.js               # Rutas para el carrito de compras
├── services/                 # Servicios para integración con Stripe
├── middleware/               # Middleware para la protección de rutas
├── server.js                 # Archivo principal para iniciar el servidor
└── .env                      # Variables de entorno

URL del Backend
- URL: https://backend-proyecto7.onrender.com

Instalación

1. Clonar el repositorio

git clone https://github.com/Preydet/Proyecto_7.git

2. Instalación de dependencias

Primero, navega a la carpeta del frontend:

cd frontend
npm install

Luego, ve al backend:

cd backend
npm install

3. Variables de Entorno

Crea un archivo .env en la carpeta raíz del backend con las siguientes variables:

MONGO_URI=tu_mongo_connection_string
STRIPE_SECRET_KEY=tu_stripe_secret_key
JWT_SECRET=tu_secreto_de_jwt
PORT=5000

En el frontend, la variable de entorno para el backend es configurada automáticamente en el código, no necesitas configurarla.

4. Ejecutar el Proyecto

Para ejecutar el frontend en desarrollo:

cd frontend
npm start

Luego, ejecuta el backend:

cd backend
npm start

El frontend estará disponible en http://localhost:3000 y el backend en http://localhost:5000.

5. Despliegue

Frontend:
El frontend está desplegado en Render:
https://frontend-proyecto-7.onrender.com

Backend:
El backend está desplegado en Render:
https://backend-proyecto7.onrender.com

Enlaces Útiles
Frontend en GitHub: https://github.com/Preydet/Proyecto_7.git
Backend en GitHub: https://github.com/Preydet/backend-Proyecto7.git

Contribuciones
Si deseas contribuir al proyecto, por favor realiza un fork del repositorio y envía un pull request con tus cambios.

Autor
Pablo Reydet Vásquez  
GitHub: https://github.com/Preydet  
