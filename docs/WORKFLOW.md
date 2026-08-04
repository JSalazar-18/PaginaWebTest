# WORKFLOW

# Flujo Oficial de Trabajo

Versión: v1.0

---

# Objetivo

Este documento define la metodología oficial para desarrollar proyectos utilizando la Plantilla de Proyecto Profesional.

El objetivo es mantener un proceso ordenado, repetible y fácil de mantener, independientemente del tipo de proyecto.

---

# Herramientas

El flujo de trabajo utiliza las siguientes herramientas:

- ChatGPT
- Visual Studio Code
- Terminal integrada de VS Code
- Git
- GitHub
- Explorador de Windows

Cada herramienta tiene una función específica y no debe sustituir a las demás.

---

# Flujo General

```
Idea

↓

Plantilla Profesional

↓

Proyecto Local

↓

Visual Studio Code

↓

Desarrollo

↓

Git

↓

GitHub

↓

Segunda PC

↓

Mantenimiento
```

---

# Paso 1 — Crear el proyecto

Ubicación:

Explorador de Windows

Acciones:

- Copiar la carpeta Plantilla_Proyecto_Profesional.
- Renombrarla con el nombre del nuevo proyecto.

Ejemplo:

```
D:\Workspace

↓

Plantilla_Proyecto_Profesional

↓

PaginaWebTest
```

---

# Paso 2 — Abrir el proyecto

Ubicación:

Visual Studio Code

Acciones:

- Abrir la carpeta del proyecto.
- Verificar la estructura de carpetas.

---

# Paso 3 — Crear el Proyecto en ChatGPT

Ubicación:

ChatGPT

Acciones:

- Crear un nuevo Proyecto.
- Asignar el mismo nombre del proyecto local.
- Organizar los chats según la estructura definida.

Ejemplo:

```
01 - Gestión del Proyecto

02 - Arquitectura

03 - Desarrollo

04 - Integración

05 - Pruebas

06 - Documentación
```

---

# Paso 4 — Inicializar Git

Ubicación:

Terminal de VS Code

Comandos:

```bash
git init
git add .
git commit -m "Proyecto inicial"
```

---

# Paso 5 — Desarrollo

Ubicación:

Visual Studio Code

Acciones:

- Crear archivos.
- Modificar código.
- Documentar cambios.

Todo cambio importante deberá quedar registrado.

---

# Paso 6 — Validación

Antes de realizar un commit se deberá verificar:

- El proyecto compila.
- No existen errores.
- La documentación está actualizada.
- Las pruebas fueron ejecutadas.

---

# Paso 7 — Commit

Ubicación:

Terminal de VS Code

Ejemplo:

```bash
git add .

git commit -m "Descripción clara del cambio"
```

Ejemplos:

```
feat: Se agrega comunicación Modbus

fix: Corrección del cálculo de velocidad

docs: Actualización del README

refactor: Reorganización del código

test: Nuevas pruebas unitarias
```

---

# Paso 8 — GitHub

Ubicación:

Terminal de VS Code

Acciones:

Enviar los cambios al repositorio remoto.

---

# Paso 9 — Segunda computadora

Acciones:

Actualizar el proyecto mediante Git antes de comenzar a trabajar.

Nunca desarrollar sobre una copia desactualizada.

---

# Organización de responsabilidades

## ChatGPT

Responsabilidades:

- Diseño
- Arquitectura
- Revisión de código
- Documentación
- Planificación

---

## Visual Studio Code

Responsabilidades:

- Edición del código
- Navegación del proyecto
- Depuración

---

## Terminal de VS Code

Responsabilidades:

- Git
- Compilación
- Ejecución
- Automatización

---

## Git

Responsabilidades:

- Historial
- Versionado
- Recuperación
- Ramas

---

## GitHub

Responsabilidades:

- Respaldo
- Sincronización
- Trabajo entre equipos
- Publicación

---

# Reglas

- No modificar directamente la plantilla oficial.
- Cada proyecto nace como una copia de la plantilla.
- Todo cambio importante debe documentarse.
- Todo cambio funcional debe registrarse mediante Git.
- Mantener actualizados README.md y CHANGELOG.md.
- Evitar archivos innecesarios dentro del proyecto.
- Utilizar nombres descriptivos para commits y ramas.

---

# Filosofía

La metodología prioriza:

- Organización.
- Documentación.
- Reproducibilidad.
- Simplicidad.
- Escalabilidad.
- Mantenibilidad.

El objetivo es que cualquier proyecto pueda entenderse, mantenerse y continuar desarrollándose incluso después de largos períodos de tiempo.

---

Fin del documento.