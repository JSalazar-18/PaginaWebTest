# DECISIONS - Architectural Decision Records (ADR)

**Proyecto:** PaginaWebTest
**Documento:** DECISIONS.md
**Versión:** 0.1.0
**Estado:** Aprobado
**Responsable:** Chat 01 – Arquitectura
**Última actualización:** 07-08-2026

---

# ADR-001

## Título

Arquitectura Cliente Único (Single Page)

### Contexto

La versión 0.1.0 requiere únicamente una página con un indicador y dos botones.

### Problema

Determinar la arquitectura más adecuada para el alcance definido.

### Alternativas

- Aplicación multipágina.
- Aplicación de página única.

### Decisión

Adoptar una aplicación de una única página.

### Justificación

Reduce complejidad y satisface completamente los requisitos definidos.

### Consecuencias

Arquitectura sencilla y fácilmente mantenible.

---

# ADR-002

## Título

Uso exclusivo de tecnologías web estándar

### Contexto

Los requisitos restringen el uso de tecnologías.

### Problema

Seleccionar la plataforma tecnológica.

### Alternativas

- Framework JavaScript.
- Tecnologías estándar.

### Decisión

Utilizar exclusivamente:

- HTML5
- CSS3
- JavaScript Vanilla

### Justificación

Cumple exactamente los requisitos establecidos.

### Consecuencias

No existen dependencias externas.

---

# ADR-003

## Título

Separación por responsabilidades

### Contexto

Se busca facilitar el mantenimiento.

### Problema

Organizar la solución.

### Alternativas

- Código mezclado.
- Separación por capas.

### Decisión

Separar:

- HTML
- CSS
- JavaScript

### Justificación

Mejora la mantenibilidad y la claridad.

### Consecuencias

Facilita futuras iteraciones.

---

# ADR-004

## Título

Sin persistencia de información

### Contexto

La versión 0.1.0 no contempla almacenamiento.

### Problema

Determinar si almacenar estados.

### Alternativas

- Persistencia.
- Sin persistencia.

### Decisión

No almacenar información.

### Justificación

Forma parte de las exclusiones del proyecto.

### Consecuencias

Cada carga inicia con el indicador en estado inicial.

---

# ADR-005

## Título

Sin dependencias externas

### Contexto

El proyecto pretende servir como ejemplo metodológico.

### Problema

Determinar si incorporar librerías.

### Alternativas

- Librerías externas.
- Sin librerías.

### Decisión

No utilizar dependencias externas.

### Justificación

Reduce complejidad y mantiene el enfoque demostrativo.

### Consecuencias

Todo el comportamiento será implementado con JavaScript Vanilla.

---

# Documentos Relacionados

- ARCHITECTURE.md
- REQUIREMENTS.md

---

# Estado del Documento

| Campo | Valor |
|--------|-------|
| Estado | Aprobado |
| Responsable | Chat 01 – Arquitectura |
| Aprobado por | Chat 00 – Gestión del Proyecto |
| Próxima revisión | Ante cualquier cambio arquitectónico aprobado |
| Versión | 0.1.0 |

---

# Historial de Cambios

| Versión | Fecha | Descripción |
|----------|-------|-------------|
| 0.1.0 | 07-08-2026 | Creación inicial del documento y aprobación metodológica por el Chat 00. |
