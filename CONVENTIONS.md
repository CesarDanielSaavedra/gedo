# Convenciones del Proyecto GEDO

## 📋 Descripción General
Dashboard de gestión de documentación para trabajadores de empresas contratistas industriales.

**Stack Tecnológico:**
- Next.js 15 con App Router
- TypeScript
- Material-UI (MUI) para componentes
- Tailwind CSS para estilos generales
- React Hook Form (validación de formularios)
- TanStack Query (manejo de peticiones)
- Zustand (estado global)

---

## 🗂️ Arquitectura de Carpetas

```
src/
├── app/                    # Next.js App Router - Rutas de la aplicación
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página home "/"
│   └── [ruta]/            # Otras rutas
│       └── page.tsx
│
├── components/            # Componentes reutilizables globales
│   ├── layout/           # Componentes de estructura (Header, Sidebar, Footer)
│   ├── common/           # Componentes comunes (Buttons, Cards, Modals, etc.)
│   └── forms/            # Componentes de formularios reutilizables
│
├── features/             # Módulos específicos de la aplicación
│   ├── auth/            # Módulo de autenticación
│   │   ├── components/  # Componentes específicos de auth
│   │   ├── hooks/       # Hooks personalizados de auth
│   │   └── types/       # Tipos TypeScript de auth
│   ├── workers/         # Módulo de trabajadores
│   └── documents/       # Módulo de documentos
│
├── hooks/               # Hooks globales compartidos
├── utils/               # Utilidades y helpers
├── types/               # Tipos TypeScript globales
└── styles/              # Estilos globales adicionales
```

### Principios de Organización:
- **`app/`**: Solo para definir rutas (routing)
- **`components/`**: Componentes que se usan en toda la aplicación
- **`features/`**: Lógica de negocio organizada por módulo/dominio (Feature-based architecture)

---

## 📝 Nomenclatura de Archivos

### Carpetas
- **Minúsculas** con guiones si es necesario
- Ejemplos: `components/`, `layout/`, `workers/`

### Archivos de Componentes
- **PascalCase** (primera letra mayúscula)
- Ejemplos: `Header.tsx`, `WorkerCard.tsx`, `LoginForm.tsx`

### Archivos de Next.js (especiales)
- **Minúsculas** según convención de Next.js
- Ejemplos: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`

### Otros archivos
- **camelCase** o **kebab-case**
- Ejemplos: `useWorkers.ts`, `worker.types.ts`, `api-client.ts`

---

## 💻 Estilo de Código

### Componentes y Funciones

**Componentes de React:**
```tsx
// ✅ Named function con export default
export default function Header() {
  return <div>Header</div>;
}
```

**Hooks Personalizados:**
```tsx
// ✅ Named function
export function useWorkers() {
  // lógica del hook
}
```

**Utilidades y Helpers:**
```tsx
// ✅ Arrow function
export const formatDate = (date: Date) => {
  // lógica
};
```

**Handlers y Callbacks:**
```tsx
// ✅ Arrow function
const handleClick = () => {
  // lógica
};

const handleSubmit = (data: FormData) => {
  // lógica
};
```

### Orden de Imports

```tsx
// 1. Tipos de TypeScript (type-only imports)
import type { Metadata } from "next";

// 2. Librerías externas (React, Next.js, MUI, etc.)
import { useState, useEffect } from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";

// 3. Alias internos (@/) - Componentes y utilidades propias
import Header from "@/components/layout/Header";
import { useWorkers } from "@/features/workers/hooks/useWorkers";

// 4. Imports relativos (../, ./)
import { LocalComponent } from "./LocalComponent";

// 5. Estilos al final
import "./globals.css";
import styles from "./styles.module.css";
```

**Dentro de cada grupo:** Alfabéticamente (recomendado)

---

## 🎨 Componentes UI

### Material-UI (MUI)
- Usar para componentes interactivos: botones, formularios, tablas, diálogos, etc.
- Aprovechar el sistema de theming de MUI

### Tailwind CSS
- Usar para layout general, espaciado, y estilos utilitarios
- Clases de utilidad para responsividad

**Ejemplo combinado:**
```tsx
<Box className="flex gap-4 p-6">
  <Button variant="contained">MUI Button</Button>
</Box>
```

---

## 🔄 Estado y Datos

### Estado Local
- `useState` para estado de componente
- `useReducer` para lógica compleja

### Estado Global
- **Zustand** para estado compartido entre componentes

### Peticiones HTTP
- **TanStack Query** para fetching, caching y sincronización de datos del servidor

### Formularios
- **React Hook Form** para validación y manejo de formularios

---

## 📚 Buenas Prácticas

1. **Consistencia:** Seguir siempre las mismas convenciones
2. **Componentes pequeños:** Un componente = una responsabilidad
3. **Nombres descriptivos:** Preferir claridad sobre brevedad
4. **TypeScript:** Tipar todo, evitar `any`
5. **Comentarios:** Solo cuando la lógica no es obvia
6. **DRY:** Don't Repeat Yourself - reutilizar código

---

## 🚀 Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar producción
npm run start

# Linting
npm run lint
```

---

**Última actualización:** Octubre 2025
