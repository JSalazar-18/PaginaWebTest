# REQUIREMENTS - Requisitos del Proyecto

**Proyecto:** PaginaWebTest  
**Documento:** REQUIREMENTS.md  
**Versión:** 0.1.2  
**Estado:** Aprobado  
**Responsable:** Chat 00 – Gestión del Proyecto  
**Última actualización:** 07-08-2026

---

# 1. Objetivo

Definir de manera formal los requisitos funcionales y no funcionales del proyecto **PaginaWebTest**, estableciendo la base para la planificación, la arquitectura, el desarrollo, las pruebas y la trazabilidad documental durante todo el ciclo de vida del proyecto.

---

# 2. Descripción del Proyecto

PaginaWebTest es un proyecto demostrativo desarrollado para implementar la **Metodología del Proyecto Profesional v3.0.0** mediante la construcción de una aplicación web sencilla.

El proyecto servirá como referencia para validar la metodología completa, incluyendo:

- Gestión del proyecto
- Arquitectura
- Desarrollo
- Pruebas
- Documentación
- Git y GitHub

---

# 3. Objetivo General

Construir una aplicación web simple, completamente documentada y trazable, que sirva como ejemplo práctico de la Metodología del Proyecto Profesional.

---

# 4. Alcance

La versión **0.1.0** comprende:

- Una única página web.
- Un indicador circular tipo LED.
- Un botón **Modo Verde**.
- Un botón **Modo Azul**.
- Cambio dinámico del color del indicador.
- Diseño responsive básico.
- Desarrollo utilizando únicamente:

  - HTML5
  - CSS3
  - JavaScript Vanilla

No forman parte del alcance:

- Backend
- Base de datos
- Frameworks JavaScript
- Librerías CSS
- Autenticación
- Persistencia de datos

---

# 5. Objetivos Específicos

- Implementar una aplicación web funcional.
- Aplicar íntegramente la metodología del proyecto.
- Mantener la documentación sincronizada con el desarrollo.
- Validar el flujo entre los seis chats especializados.
- Generar una base reutilizable para futuros proyectos.

---

# 6. Restricciones

El proyecto deberá cumplir las siguientes restricciones:

- Uso exclusivo de HTML5.
- Uso exclusivo de CSS3.
- Uso exclusivo de JavaScript Vanilla.
- Sin dependencias externas.
- Sin frameworks.
- Idioma oficial: Español.

## Compatibilidad de Navegadores

Para la versión **0.1.0**, el proyecto soporta oficialmente los siguientes navegadores:

- Google Chrome
- Microsoft Edge

Mozilla Firefox no forma parte del alcance definido para esta versión.

---

# 7. Supuestos

Se asume que:

- El proyecto se desarrolla bajo el Manual Metodológico v3.0.0.
- La Plantilla del Proyecto Profesional constituye la base documental.
- Todos los cambios serán coordinados por el Chat 00.
- Cada chat actuará únicamente dentro de sus responsabilidades.

---

# 8. Requisitos Funcionales

| ID | Nombre | Descripción | Prioridad | Estado |
|----|---------|-------------|-----------|--------|
| RF-001 | Página Principal | Mostrar una única página web | P0 | Aprobado |
| RF-002 | Indicador LED | Mostrar un indicador circular inicialmente gris | P0 | Aprobado |
| RF-003 | Modo Verde | Cambiar el indicador a color verde | P0 | Aprobado |
| RF-004 | Modo Azul | Cambiar el indicador a color azul | P0 | Aprobado |
| RF-005 | Interfaz Responsive | Adaptar correctamente la interfaz a diferentes resoluciones | P1 | Aprobado |

---

# 9. Requisitos No Funcionales

| ID | Nombre | Descripción | Prioridad | Estado |
|----|---------|-------------|-----------|--------|
| RNF-001 | Compatibilidad | Compatible con los navegadores oficialmente soportados por el proyecto: Google Chrome y Microsoft Edge | P0 | Aprobado |
| RNF-002 | Rendimiento | Tiempo de carga inferior a 3 segundos | P1 | **Aprobado** |
| RNF-003 | Código limpio | Código legible y documentado | P1 | Aprobado |
| RNF-004 | Mantenibilidad | Estructura preparada para futuras iteraciones | P1 | Aprobado |

---

# 10. Exclusiones

No serán implementados en la versión 0.1.0:

- Login
- Usuarios
- API REST
- Base de datos
- Almacenamiento Local
- Animaciones complejas
- Frameworks
- Backend

---

# 11. Criterios Generales de Aceptación

La versión 0.1.0 será aceptada cuando:

- Todos los requisitos P0 estén implementados.
- El indicador cambie correctamente entre gris, verde y azul.
- El sitio funcione correctamente en los navegadores oficialmente soportados por el proyecto (Google Chrome y Microsoft Edge).
- El tiempo de carga sea inferior a 3 segundos.
- La documentación esté sincronizada.
- Las pruebas hayan sido aprobadas.
- No existan incidencias críticas abiertas.

---

# 12. Matriz de Trazabilidad

| Requisito | Iteración | Arquitectura | Prueba |
|-----------|-----------|--------------|--------|
| RF-001 | Iteración 1 | Frontend | TC-001 |
| RF-002 | Iteración 1 | Frontend | TC-002 |
| RF-003 | Iteración 1 | Frontend | TC-003 |
| RF-004 | Iteración 1 | Frontend | TC-004 |
| RF-005 | Iteración 1 | Frontend | TC-005 |
| RNF-001 | Iteración 1 | Frontend | Lighthouse / Compatibilidad |
| RNF-002 | Iteración 1 | Frontend | Lighthouse |
| RNF-003 | Iteración 1 | Frontend | Revisión de código |
| RNF-004 | Iteración 1 | Frontend | Revisión arquitectónica |

---

# 13. Dependencias

Los requisitos definidos en este documento serán utilizados por:

- ROADMAP.md
- ITERATIONS.md
- ARCHITECTURE.md
- TEST_PLAN.md
- PROJECT_STATUS.md
- TODO.md

---

# 14. Estado del Documento

| Campo | Valor |
|--------|-------|
| Estado | Aprobado |
| Próxima revisión | Cuando exista un cambio de requisitos aprobado por el Chat 00 |
| Responsable | Chat 00 – Gestión del Proyecto |
| Versión | 0.1.2 |

---

# 15. Historial de Cambios

| Versión | Fecha | Descripción |
|----------|-------|-------------|
| 0.1.0 | 05-08-2026 | Creación inicial alineada con la Metodología del Proyecto Profesional v3.0.0. |
| 0.1.1 | 07-08-2026 | Actualización del requisito RNF-001. Se establece oficialmente la compatibilidad con Google Chrome y Microsoft Edge para la versión 0.1.0. |
| 0.1.2 | 07-08-2026 | Se aprueba el requisito RNF-002 tras la verificación mediante Lighthouse en Google Chrome (Performance 100/100, FCP 0.3 s, LCP 0.3 s, Speed Index 0.3 s, Total Blocking Time 0 ms y CLS 0). Se actualiza la matriz de trazabilidad y los criterios de aceptación. |
