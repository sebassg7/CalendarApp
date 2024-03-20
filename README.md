# Calendar APP

## Development steps

1. Renombrar el archivo env.template por .env
2. Hacer los cambios respectivos en las variables de entorno

```

VITE_API_URL=http://localhost:4000/api

```

# Descripción de la aplicación

La aplicación de Calendario de Eventos proporciona una interfaz intuitiva basada en un calendario, donde los usuarios pueden gestionar y registrar eventos de manera eficiente. Las principales características de la aplicación incluyen:

- **Interfaz de Calendario**: La interfaz principal de la aplicación es un calendario interactivo donde los usuarios pueden visualizar y administrar eventos.

- **Gestión de Eventos**: Los usuarios pueden crear, guardar, actualizar y eliminar eventos directamente desde el calendario. Además, tienen la capacidad de seleccionar la fecha y hora en que ocurrirán los eventos.

- **Registro y Autenticación**: Para acceder a la aplicación, los usuarios deben registrarse proporcionando su nombre, correo electrónico y contraseña. Para iniciar sesión, se requiere el correo electrónico y la contraseña asociados con la cuenta.

- **Seguridad**: Se implementa un sistema de autenticación seguro para proteger los datos de los usuarios y garantizar el acceso solo a usuarios autorizados.

La aplicación de Calendario de Eventos ofrece una solución completa para la gestión y organización de eventos, con una interfaz fácil de usar y funciones avanzadas de seguridad para garantizar la privacidad de los usuarios.

El frontend de la aplicación se centra en la estructura y el diseño del calendario, haciendo uso de componentes de terceros para la interfaz de usuario. Se utilizan modales para la interacción con los eventos, y se configura Redux para gestionar el estado de la aplicación. Además, se implementa un CRUD local para el manejo de eventos y se hace uso de MomentJS para el manejo de fechas.

Este frontend es la primera fase del desarrollo MERN (Mongo, Express, React, Node), y está diseñado para ser integrado con el backend posteriormente.

El backend de la aplicación está construido con Node.js y Express, utilizando Mongoose para la interacción con la base de datos MongoDB. Se implementan modelos de datos, controladores y middlewares de Express para gestionar la lógica de negocio y la seguridad de la aplicación. Se utiliza JWT para la autenticación de usuarios, con encriptación de contraseñas y manejo de tokens. También se incluye soporte para CORS y revalidación de tokens.

El backend proporciona un CRUD completo para los eventos del calendario, con modelos y validaciones automáticas y personalizadas.

Se integra el frontend y el backend, con un enfoque específico en la autenticación y el manejo de tokens JWT. 
