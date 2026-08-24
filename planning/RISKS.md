# RISKS — PaginaWebTest

## 1. Propósito

Este documento registra los riesgos identificados durante la planificación y desarrollo de PaginaWebTest, así como las acciones realizadas para mitigarlos y su estado.

El registro se mantiene alineado con el estado real de la Iteración 1.

---

## 2. Estado general de riesgos

**Iteración:** Iteración 1
**Estado:** Cerrada

Al cierre de la Iteración 1 no existen riesgos pendientes que impidan considerar completado el MVP.

---

## 3. Registro de riesgos

| ID      | Riesgo                                                | Probabilidad | Impacto | Nivel | Mitigación                                                                             | Responsable | Estado     |
| ------- | ----------------------------------------------------- | ------------ | ------- | ----- | -------------------------------------------------------------------------------------- | ----------- | ---------- |
| RSK-001 | Ambigüedad en los requisitos iniciales                | Media        | Medio   | Medio | Definir y documentar los requisitos antes del desarrollo                               | Chat 00     | ✅ Cerrado |
| RSK-002 | Desalineación entre requisitos y arquitectura         | Baja         | Alto    | Medio | Revisar la arquitectura contra los requisitos antes del desarrollo                     | Chat 01     | ✅ Cerrado |
| RSK-003 | Errores durante la implementación del MVP             | Media        | Medio   | Medio | Implementación incremental y ejecución de pruebas                                      | Chat 02     | ✅ Cerrado |
| RSK-004 | Fallos funcionales no detectados                      | Media        | Alto    | Alto  | Elaborar y ejecutar el plan de pruebas                                                 | Chat 03     | ✅ Cerrado |
| RSK-005 | Documentación desactualizada                          | Media        | Medio   | Medio | Revisar y sincronizar la documentación antes del cierre                                | Chat 04     | ✅ Cerrado |
| RSK-006 | Problemas durante el control de versiones             | Baja         | Alto    | Medio | Validar el estado de Git y GitHub antes de publicar                                    | Chat 05     | ✅ Cerrado |
| RSK-007 | Pérdida de trazabilidad entre fases                   | Baja         | Alto    | Medio | Mantener los documentos de gestión y el flujo de trabajo actualizados                  | Chat 00     | ✅ Cerrado |
| RSK-008 | Error o inconsistencia en el versionado de la entrega | Media        | Medio   | Medio | Validar VERSION.md, CHANGELOG.md, tag y estado del repositorio antes de la publicación | Chat 05     | ✅ Cerrado |

---

## 4. Riesgos de la Iteración 1

### RSK-001 — Ambigüedad en los requisitos

**Estado:** Cerrado

Los requisitos del MVP fueron definidos y documentados antes de finalizar la implementación.

---

### RSK-002 — Desalineación entre requisitos y arquitectura

**Estado:** Cerrado

La arquitectura fue definida de acuerdo con los requisitos establecidos para el MVP.

---

### RSK-003 — Errores durante la implementación

**Estado:** Cerrado

La implementación del MVP fue completada y validada mediante las pruebas documentadas.

---

### RSK-004 — Fallos funcionales no detectados

**Estado:** Cerrado

Las pruebas de la Iteración 1 fueron ejecutadas y sus resultados quedaron registrados en:

```text
testing/TEST_PLAN.md
testing/TEST_RESULTS.md
```
