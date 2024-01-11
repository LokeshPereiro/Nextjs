# Introducción Next.js

Indagación sobre el framework de Next, conocido como "un meta framework". Es decir, se trata de un framework que se base en otro framework.

¿Qué es Next.js? --> Es un framwork de React hecho para servir contenido estático y generado desde el lado del servidor. Beneficios: Mejoras de rendimiento, SEO, separación de código, router, dependenias...

```SSR: Server-side Rendering
SSG: Static-site generation
CSR: Client Side Rendering (traditional)
ISR: Incremental Static Regeneration
DR: Dynamic Rounting
```

### React Server Components

Por defecto, todos son server components, es decir, componentes generados por el servidor (a menos que especifiquemos lo contrario).

- Renderizado estático: Es la opción por defecto en Next. Pues, mejora el performance y reduce enormemente la cantidad de contenido enviado al cliente. Es decir, sólo se muestra el "query" del cliente en concreto, el resto del contenido no.
- Fetch cache: Llamadas a Fetch, realizarán un caché de forma forzada por defecto a menos que se especifique lo contrario.
- Evitar efectos: useEffect entre otros hooks que disparan acciones del lado del cliente, no se pueden usar en server components. Es necesario, especificar "use client" en el inicio del archivo componente.

### Client Components

### TurboPack

### Metadata

### MetadataLayouts y Layouts anidados

### Next Link

### usePathName Hook

### Nuevo sistema de rutas de Next

```
Objetivo: Crear una página estática que nos ayude a comprender las bases de Next.
```
