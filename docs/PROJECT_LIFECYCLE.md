# PROJECT_LIFECYCLE

# Ciclo de Vida del Proyecto

Versión: 1.0

---

# Objetivo

Este documento define la metodología oficial para el desarrollo de proyectos utilizando la **Plantilla de Proyecto Profesional**.

Su propósito es establecer un flujo de trabajo uniforme, repetible y documentado para cualquier tipo de proyecto de ingeniería o desarrollo de software.

---

# Filosofía

Cada proyecto debe cumplir los siguientes principios:

- Organización
- Documentación
- Trazabilidad
- Versionado
- Reutilización
- Mantenibilidad
- Escalabilidad

El proyecto debe evolucionar de forma controlada desde su creación hasta su mantenimiento.

---

# Etapa 1 - Idea

Todo proyecto comienza con una necesidad.

Ejemplos:

- Automatización industrial
- Sistema embebido
- Página Web
- Inteligencia Artificial
- Arduino
- ESP32
- Aplicación de escritorio
- Aplicación móvil

En esta etapa se define:

- Objetivo
- Alcance
- Tecnologías
- Resultado esperado

---

# Etapa 2 - Crear el proyecto

Copiar la carpeta:

Plantilla_Proyecto_Profesional

y renombrarla con el nombre del nuevo proyecto.

Ejemplo:

```
Plantilla_Proyecto_Profesional

↓

PaginaWebTest
```

La plantilla original nunca debe modificarse.

---

# Etapa 3 - Crear Proyecto en ChatGPT

Crear un nuevo Proyecto en ChatGPT con el mismo nombre del proyecto.

Ejemplo:

```
PaginaWebTest
```

Dentro del Proyecto crear los chats especializados.

Ejemplo:

- Gestión del Proyecto
- Arquitectura
- Backend
- Frontend
- Documentación
- Pruebas

Cada chat tendrá una única responsabilidad.

---

# Etapa 4 - Abrir Visual Studio Code

Abrir la carpeta del proyecto.

Ejemplo:

```
D:\Workspace\PaginaWebTest
```

Todo el desarrollo se realizará desde Visual Studio Code.

---

# Etapa 5 - Inicializar Git

Abrir la Terminal de VS Code.

Ejecutar:

```
git init
```

Agregar archivos:

```
git add .
```

Primer commit:

```
git commit -m "Inicio del proyecto"
```

---

# Etapa 6 - Crear repositorio GitHub

Crear un repositorio con el mismo nombre del proyecto.

Ejemplo:

```
PaginaWebTest
```

Conectar el repositorio local.

Publicar la primera versión.

---

# Etapa 7 - Desarrollo

Durante el desarrollo se recomienda mantener separados:

- Código fuente
- Documentación
- Recursos
- Configuración
- Pruebas

Toda modificación importante debe documentarse.

---

# Etapa 8 - Documentación

Actualizar periódicamente:

- PROJECT_STATUS.md
- CHANGELOG.md
- ROADMAP.md
- TODO.md
- DECISIONS.md

La documentación forma parte del proyecto.

---

# Etapa 9 - Control de versiones

Realizar commits pequeños y descriptivos.

Ejemplos:

```
feat: agregar autenticación

fix: corregir validación

docs: actualizar README

refactor: reorganizar módulos

test: agregar pruebas unitarias
```

---

# Etapa 10 - Sincronización

Enviar los cambios al repositorio remoto.

```
git push
```

Mantener sincronizados todos los equipos de trabajo.

---

# Etapa 11 - Pruebas

Antes de publicar una nueva versión:

- Compilar
- Ejecutar pruebas
- Revisar documentación
- Verificar funcionamiento

---

# Etapa 12 - Publicación

Cuando el proyecto alcance un estado estable:

Actualizar:

- CHANGELOG.md
- VERSION.md (si existe)
- README.md

Crear una nueva versión en GitHub.

---

# Etapa 13 - Mantenimiento

Todo proyecto continúa evolucionando.

Registrar:

- Mejoras
- Correcciones
- Nuevas funcionalidades
- Problemas conocidos

---

# Flujo General

```
Idea
 │
 ▼
Crear Proyecto
 │
 ▼
Proyecto ChatGPT
 │
 ▼
Visual Studio Code
 │
 ▼
Desarrollo
 │
 ▼
Git
 │
 ▼
GitHub
 │
 ▼
Pruebas
 │
 ▼
Publicación
 │
 ▼
Mantenimiento
```

---

# Regla Fundamental

La plantilla nunca se modifica para resolver necesidades específicas de un proyecto.

Las mejoras detectadas durante el desarrollo deberán evaluarse y, si son de aplicación general, incorporarse posteriormente a una nueva versión de la **Plantilla de Proyecto Profesional**.

---

# Estado

Versión del documento:

**1.0**

Este documento forma parte de la **Plantilla de Proyecto Profesional** y establece la metodología oficial para todos los proyectos desarrollados a partir de ella.