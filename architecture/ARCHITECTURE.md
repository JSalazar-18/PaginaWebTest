# ARCHITECTURE - Arquitectura del Proyecto

**Proyecto:** PaginaWebTest
**Documento:** ARCHITECTURE.md
**Versión:** 0.1.0
**Estado:** Aprobado
**Responsable:** Chat 01 – Arquitectura
**Última actualización:** 07-08-2026

---

# 1. Objetivo

Definir la arquitectura técnica de la versión 0.1.0 del proyecto PaginaWebTest, estableciendo la organización lógica de la solución, sus componentes, dependencias y principios de diseño, manteniendo alineación con REQUIREMENTS.md, ROADMAP.md e ITERATIONS.md.

---

# 2. Alcance Arquitectónico

La arquitectura cubre exclusivamente la versión 0.1.0.

Incluye:

- Aplicación Web de una única página.
- Indicador circular tipo LED.
- Botón "Modo Verde".
- Botón "Modo Azul".
- Cambio dinámico del color del indicador.
- Diseño responsive básico.

No incluye:

- Backend.
- Base de datos.
- APIs.
- Frameworks.
- Librerías externas.
- Persistencia.

---

# 3. Objetivos Técnicos

- Mantener una arquitectura simple y mantenible.
- Separar estructura, presentación y comportamiento.
- Facilitar futuras iteraciones sin modificar la base arquitectónica.
- Cumplir los requisitos funcionales y no funcionales definidos.

---

# 4. Arquitectura Lógica

La solución se compone de tres capas claramente diferenciadas:

## Capa de Estructura

Responsable de la definición del contenido mediante HTML5.

Funciones:

- Página principal.
- Indicador.
- Botón Modo Verde.
- Botón Modo Azul.

---

## Capa de Presentación

Responsable del diseño utilizando CSS3.

Funciones:

- Distribución visual.
- Indicador circular.
- Colores.
- Responsive básico.

---

## Capa de Comportamiento

Responsable de la interacción utilizando JavaScript Vanilla.

Funciones:

- Capturar eventos de botones.
- Cambiar el color del indicador.
- Actualizar la interfaz.

---

# 5. Arquitectura Física

El proyecto se ejecuta completamente del lado del cliente.

```
Navegador Web
      │
      ▼
 HTML5
      │
      ▼
 CSS3
      │
      ▼
 JavaScript
```

No existen servidores, procesos backend ni almacenamiento.

---

# 6. Componentes

## Componente 1

Página Principal

Responsabilidad:

Contener todos los elementos de la interfaz.

---

## Componente 2

Indicador LED

Responsabilidad:

Representar visualmente el estado mediante colores.

Estados:

- Gris
- Verde
- Azul

---

## Componente 3

Control de Modos

Responsabilidad:

Permitir seleccionar el color del indicador.

Elementos:

- Botón Modo Verde
- Botón Modo Azul

---

# 7. Dependencias

Dependencias internas:

- HTML → CSS
- HTML → JavaScript

Dependencias externas:

Ninguna.

---

# 8. Flujo General

```
Usuario
    │
    ▼
Botón seleccionado
    │
    ▼
JavaScript
    │
    ▼
Actualización del indicador
    │
    ▼
Nuevo color mostrado
```

---

# 9. Relación con Requisitos

| Requisito | Componente |
|-----------|------------|
| RF-001 | Página Principal |
| RF-002 | Indicador LED |
| RF-003 | Control Modo Verde |
| RF-004 | Control Modo Azul |
| RF-005 | Presentación Responsive |

---

# 10. Riesgos Técnicos

| Riesgo | Mitigación |
|---------|------------|
| Mezcla entre HTML, CSS y JavaScript | Separación por responsabilidades |
| Cambios futuros de interfaz | Arquitectura modular |
| Inconsistencia visual | Uso centralizado de estilos |

---

# 11. Criterios Arquitectónicos

- Arquitectura simple.
- Bajo acoplamiento.
- Alta mantenibilidad.
- Sin dependencias externas.
- Compatible con futuras iteraciones.

---

# 12. Documentos Relacionados

- REQUIREMENTS.md
- ROADMAP.md
- ITERATIONS.md
- RISKS.md
- PROJECT_STATUS.md
- DECISIONS.md

---

# 13. Estado del Documento

| Campo | Valor |
|--------|-------|
| Estado | Aprobado |
| Responsable | Chat 01 – Arquitectura |
| Aprobado por | Chat 00 – Gestión del Proyecto |
| Próxima revisión | Cuando exista un cambio de arquitectura aprobado |
| Versión | 0.1.0 |

---

# 14. Historial de Cambios

| Versión | Fecha | Descripción |
|----------|-------|-------------|
| 0.1.0 | 07-08-2026 | Creación inicial del documento y aprobación metodológica por el Chat 00. |
