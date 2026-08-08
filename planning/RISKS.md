# RISKS - Registro de Riesgos del Proyecto

**Proyecto:** PaginaWebTest
**Documento:** RISKS.md
**Versión:** 0.1.4
**Estado:** Vigente
**Responsable:** Chat 00 – Gestión del Proyecto
**Última actualización:** 08-08-2026

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

Un riesgo podrá considerarse cerrado cuando la acción de mitigación o resolución haya sido ejecutada y validada por el Chat 00.

---

# 3. Escala de Evaluación

## Probabilidad

| Valor | Descripción   |
| ----- | ------------- |
| Baja  | Poco probable |
| Media | Puede ocurrir |
| Alta  | Muy probable  |

---

## Impacto

| Valor | Descripción             |
| ----- | ----------------------- |
| Bajo  | Afectación mínima       |
| Medio | Requiere ajustes        |
| Alto  | Compromete la iteración |

---

## Nivel de Riesgo

| Probabilidad | Impacto | Nivel   |
| ------------ | ------- | ------- |
| Baja         | Bajo    | Bajo    |
| Baja         | Medio   | Bajo    |
| Baja         | Alto    | Medio   |
| Media        | Bajo    | Bajo    |
| Media        | Medio   | Medio   |
| Media        | Alto    | Alto    |
| Alta         | Bajo    | Medio   |
| Alta         | Medio   | Alto    |
| Alta         | Alto    | Crítico |

---

# 4. Registro de Riesgos

| ID      | Riesgo                                           | Prob. | Impacto | Nivel | Estrategia                                                                                            | Responsable | Estado      |
| ------- | ------------------------------------------------ | ----- | ------- | ----- | ----------------------------------------------------------------------------------------------------- | ----------- | ----------- |
| RSK-001 | Cambios de alcance durante el desarrollo         | Media | Alto    | Alto  | Validar cambios mediante Chat 00                                                                      | Chat 00     | ✅ Mitigado |
| RSK-002 | Retraso en la sincronización de la documentación | Media | Medio   | Medio | Completar la sincronización y validar la documentación antes del cambio de fase                       | Chat 00     | ✅ Cerrado  |
| RSK-003 | Inconsistencia entre documentos de gestión       | Media | Alto    | Alto  | Realizar revisión cruzada y confirmar coherencia documental antes de aprobar la Fase de Documentación | Chat 00     | ✅ Cerrado  |
| RSK-004 | Cambios metodológicos durante el proyecto        | Baja  | Alto    | Medio | Mantener alineación con Manual y Plantilla                                                            | Chat 00     | ✅ Mitigado |
| RSK-005 | Errores en la arquitectura inicial               | Baja  | Alto    | Medio | Revisión técnica por Chat 01                                                                          | Chat 01     | ✅ Cerrado  |
| RSK-006 | Defectos durante el desarrollo                   | Media | Medio   | Medio | Revisiones de código                                                                                  | Chat 02     | ✅ Cerrado  |
| RSK-007 | Cobertura insuficiente de pruebas                | Media | Alto    | Alto  | Ejecutar TEST_PLAN completo y verificar los resultados                                                | Chat 03     | ✅ Cerrado  |
| RSK-008 | Versionado incorrecto                            | Baja  | Medio   | Bajo  | Validación de VERSION.md y CHANGELOG.md antes de la publicación                                       | Chat 05     | ✅ Cerrado  |

---

# 5. Riesgos por Iteración

## Iteración 1

### Riesgos mitigados

- Cambios de alcance durante el desarrollo.
- Cambios metodológicos.
- Retrasos en documentación.

### Riesgos cerrados

- Inconsistencia entre documentos de gestión.
- Errores en la arquitectura inicial.
- Defectos durante el desarrollo.
- Cobertura insuficiente de pruebas.
- Versionado incorrecto.

### Riesgos pendientes

No existen riesgos pendientes identificados para la Iteración 1.

Los riesgos detallados y su estado oficial se administran en este documento.

---

## Iteración 2

Pendiente.

---

## Iteración 3

Pendiente.

---

## Iteración 4

Pendiente.

---

# 6. Riesgos Cerrados

| ID      | Riesgo                                           | Fecha      | Observación                                                                              |
| ------- | ------------------------------------------------ | ---------- | ---------------------------------------------------------------------------------------- |
| RSK-002 | Retraso en la sincronización de la documentación | 08-08-2026 | Documentación de gestión sincronizada y validada por Chat 00.                            |
| RSK-003 | Inconsistencia entre documentos de gestión       | 08-08-2026 | Revisión cruzada completada y coherencia documental confirmada por Chat 00.              |
| RSK-005 | Errores en la arquitectura                       | 07-08-2026 | Arquitectura aprobada por Chat 00.                                                       |
| RSK-006 | Defectos durante el desarrollo                   | 07-08-2026 | Desarrollo finalizado sin incidencias.                                                   |
| RSK-007 | Cobertura insuficiente de pruebas                | 07-08-2026 | TEST_PLAN ejecutado; requisitos funcionales y no funcionales aprobados.                  |
| RSK-008 | Versionado incorrecto                            | 08-08-2026 | VERSION.md y CHANGELOG.md actualizados; Release 0.1.0 preparado y publicado por Chat 05. |

---

# 7. Seguimiento

| Fecha      | Riesgo  | Acción                                                                                       | Responsable |
| ---------- | ------- | -------------------------------------------------------------------------------------------- | ----------- |
| 07-08-2026 | RSK-001 | Mitigado tras la aprobación del desarrollo.                                                  | Chat 00     |
| 07-08-2026 | RSK-004 | Mitigado al mantenerse la metodología sin cambios.                                           | Chat 00     |
| 07-08-2026 | RSK-005 | Riesgo cerrado tras la aprobación de Arquitectura.                                           | Chat 01     |
| 07-08-2026 | RSK-006 | Riesgo cerrado tras finalizar Desarrollo.                                                    | Chat 02     |
| 07-08-2026 | RSK-007 | Riesgo cerrado tras completar y aprobar las pruebas de la Iteración 1.                       | Chat 03     |
| 08-08-2026 | RSK-002 | Sincronización documental completada y validada por Chat 00.                                 | Chat 00     |
| 08-08-2026 | RSK-003 | Revisión cruzada completada y coherencia documental confirmada por Chat 00.                  | Chat 00     |
| 08-08-2026 | RSK-008 | VERSION.md y CHANGELOG.md actualizados; Release 0.1.0 preparado y publicado. Riesgo cerrado. | Chat 05     |

---

# 8. Indicadores

| Indicador                 | Valor |
| ------------------------- | ----: |
| Riesgos registrados       |     8 |
| Riesgos cerrados          |     6 |
| Riesgos mitigados         |     2 |
| Riesgos pendientes        |     0 |
| Riesgos en resolución     |     0 |
| Riesgos críticos abiertos |     0 |

---

# 9. Relación con otros Documentos

Este documento mantiene trazabilidad con:

- requirements/REQUIREMENTS.md
- planning/ROADMAP.md
- planning/ITERATIONS.md
- documentation/PROJECT_STATUS.md
- documentation/TODO.md
- testing/TEST_PLAN.md
- testing/TEST_RESULTS.md
- versioning/VERSION.md
- versioning/CHANGELOG.md

---

# 10. Estado del Documento

| Campo            | Valor                                                                      |
| ---------------- | -------------------------------------------------------------------------- |
| Estado           | Vigente                                                                    |
| Responsable      | Chat 00 – Gestión del Proyecto                                             |
| Próxima revisión | Al iniciar una nueva iteración o ante la identificación de un nuevo riesgo |
| Versión          | 0.1.4                                                                      |

---

# 11. Historial de Cambios

| Versión | Fecha      | Descripción                                                                                                                                                                                                                                            |
| ------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 0.1.0   | 05-08-2026 | Creación inicial del registro de riesgos.                                                                                                                                                                                                              |
| 0.1.1   | 07-08-2026 | Sincronización del registro de riesgos con el estado real de la Iteración 1. Se cierra RSK-007 tras la aprobación de las pruebas y se mantienen temporalmente RSK-002, RSK-003 y RSK-008 según el estado del proyecto.                                 |
| 0.1.2   | 07-08-2026 | Actualización del estado de los riesgos tras la sincronización de ROADMAP.md e ITERATIONS.md. RSK-002 y RSK-003 pasan a resolución hasta completar la validación final del Chat 00. RSK-008 permanece pendiente por el versionado de la versión 0.1.0. |
| 0.1.3   | 08-08-2026 | Cierre de RSK-002 y RSK-003 tras completar y validar la sincronización documental. RSK-008 permanece pendiente y pasa a ser el riesgo activo asociado a la Fase de Git y GitHub y al versionado de la versión 0.1.0.                                   |
| 0.1.4   | 08-08-2026 | Cierre de RSK-008 tras completar las actividades de Git y GitHub, actualizar VERSION.md y CHANGELOG.md y publicar el Release 0.1.0. No quedan riesgos pendientes para la Iteración 1.                                                                  |
