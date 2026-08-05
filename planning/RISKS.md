# RISKS - Registro de Riesgos del Proyecto

**Proyecto:** PaginaWebTest  
**Documento:** RISKS.md  
**Versión:** 0.1.0  
**Estado:** Vigente  
**Responsable:** Chat 00 – Gestión del Proyecto  
**Última actualización:** 05-08-2026

---

# 1. Objetivo

Identificar, evaluar, monitorear y gestionar los riesgos que puedan afectar el cumplimiento de los objetivos del proyecto PaginaWebTest.

Este documento permite registrar de forma estructurada los riesgos detectados durante todo el ciclo de vida del proyecto, estableciendo acciones preventivas y correctivas para minimizar su impacto.

---

# 2. Estrategia de Gestión de Riesgos

La gestión de riesgos seguirá el siguiente ciclo:

1. Identificación.
2. Evaluación.
3. Priorización.
4. Plan de respuesta.
5. Seguimiento.
6. Cierre.

Todo riesgo nuevo deberá registrarse antes de iniciar una nueva iteración.

---

# 3. Escala de Evaluación

## Probabilidad

| Valor | Descripción |
|--------|-------------|
| Baja | Poco probable |
| Media | Puede ocurrir |
| Alta | Muy probable |

---

## Impacto

| Valor | Descripción |
|--------|-------------|
| Bajo | Afectación mínima |
| Medio | Requiere ajustes |
| Alto | Compromete la iteración |

---

## Nivel de Riesgo

| Probabilidad | Impacto | Nivel |
|--------------|----------|-------|
| Baja | Bajo | Bajo |
| Baja | Medio | Bajo |
| Baja | Alto | Medio |
| Media | Bajo | Bajo |
| Media | Medio | Medio |
| Media | Alto | Alto |
| Alta | Bajo | Medio |
| Alta | Medio | Alto |
| Alta | Alto | Crítico |

---

# 4. Registro de Riesgos

| ID | Riesgo | Prob. | Impacto | Nivel | Estrategia | Responsable | Estado |
|----|---------|--------|----------|--------|-------------|--------------|--------|
| RSK-001 | Cambios de alcance durante el desarrollo | Media | Alto | Alto | Validar todos los cambios mediante Chat 00 | Chat 00 | Abierto |
| RSK-002 | Retraso en la documentación | Media | Medio | Medio | Actualizar documentos al finalizar cada actividad | Chat 00 | Abierto |
| RSK-003 | Inconsistencia entre documentos | Media | Alto | Alto | Revisiones cruzadas antes de aprobar una fase | Chat 04 | Abierto |
| RSK-004 | Cambios metodológicos durante el proyecto | Baja | Alto | Medio | Mantener alineación con Manual y Plantilla | Chat 00 | Abierto |
| RSK-005 | Errores en la arquitectura inicial | Baja | Alto | Medio | Revisión técnica por Chat 01 | Chat 01 | Abierto |
| RSK-006 | Defectos durante el desarrollo | Media | Medio | Medio | Revisiones de código y pruebas unitarias | Chat 02 | Abierto |
| RSK-007 | Cobertura insuficiente de pruebas | Media | Alto | Alto | Ejecutar TEST_PLAN completo | Chat 03 | Abierto |
| RSK-008 | Versionado incorrecto | Baja | Medio | Bajo | Validación antes del Commit | Chat 05 | Abierto |

---

# 5. Riesgos por Iteración

## Iteración 1

Riesgos principales:

- Cambios de alcance.
- Retrasos documentales.
- Errores arquitectónicos.
- Desarrollo fuera de metodología.

---

## Iteración 2

Riesgos previstos:

- Refactorización incorrecta.
- Incremento de deuda técnica.

---

## Iteración 3

Riesgos previstos:

- Incremento de complejidad.
- Nuevos requisitos.

---

## Iteración 4

Riesgos previstos:

- Retrasos en la publicación.
- Defectos detectados durante pruebas finales.

---

# 6. Riesgos Cerrados

No existen riesgos cerrados en la versión 0.1.0.

---

# 7. Seguimiento

Cada revisión deberá registrar:

| Fecha | Riesgo | Acción | Responsable |
|--------|---------|---------|--------------|
| — | — | — | — |

---

# 8. Indicadores

| Indicador | Objetivo |
|------------|----------|
| Riesgos críticos abiertos | 0 |
| Riesgos mitigados | 100 % |
| Riesgos sin responsable | 0 |
| Riesgos revisados por iteración | 100 % |

---

# 9. Relación con otros Documentos

Este documento mantiene trazabilidad con:

- REQUIREMENTS.md
- ROADMAP.md
- ITERATIONS.md
- PROJECT_STATUS.md
- TODO.md
- TEST_PLAN.md

---

# 10. Estado del Documento

| Campo | Valor |
|--------|-------|
| Estado | Vigente |
| Responsable | Chat 00 |
| Próxima revisión | Al cierre de cada iteración |
| Versión | 0.1.0 |

---

# 11. Historial de Cambios

| Versión | Fecha | Descripción |
|----------|-------|-------------|
| 0.1.0 | 05-08-2026 | Creación inicial del registro de riesgos alineado con la Metodología del Proyecto Profesional v3.0.0 |
