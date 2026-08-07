# RISKS - Registro de Riesgos del Proyecto

**Proyecto:** PaginaWebTest  
**Documento:** RISKS.md  
**Versión:** 0.1.0  
**Estado:** Vigente  
**Responsable:** Chat 00 – Gestión del Proyecto  
**Última actualización:** 07-08-2026

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
| RSK-001 | Cambios de alcance durante el desarrollo | Media | Alto | Alto | Validar cambios mediante Chat 00 | Chat 00 | ✅ Mitigado |
| RSK-002 | Retraso en la documentación | Media | Medio | Medio | Actualizar documentos al finalizar cada fase | Chat 00 | 🔄 Abierto |
| RSK-003 | Inconsistencia entre documentos | Media | Alto | Alto | Revisiones cruzadas | Chat 04 | 🔄 Abierto |
| RSK-004 | Cambios metodológicos durante el proyecto | Baja | Alto | Medio | Mantener alineación con Manual y Plantilla | Chat 00 | ✅ Mitigado |
| RSK-005 | Errores en la arquitectura inicial | Baja | Alto | Medio | Revisión técnica por Chat 01 | Chat 01 | ✅ Cerrado |
| RSK-006 | Defectos durante el desarrollo | Media | Medio | Medio | Revisiones de código | Chat 02 | ✅ Cerrado |
| RSK-007 | Cobertura insuficiente de pruebas | Media | Alto | Alto | Ejecutar TEST_PLAN completo | Chat 03 | 🔄 Abierto |
| RSK-008 | Versionado incorrecto | Baja | Medio | Bajo | Validación antes del Commit | Chat 05 | 🔄 Abierto |

---

# 5. Riesgos por Iteración

## Iteración 1

### Riesgos mitigados

- Cambios de alcance durante el desarrollo.
- Cambios metodológicos.
- Errores de arquitectura.
- Defectos de implementación.

### Riesgos activos

- Retraso documental.
- Inconsistencia documental.
- Cobertura insuficiente de pruebas.
- Versionado final.

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

| ID | Riesgo | Fecha | Observación |
|----|---------|--------|-------------|
| RSK-005 | Errores en la arquitectura | 07-08-2026 | Arquitectura aprobada por Chat 00 |
| RSK-006 | Defectos durante el desarrollo | 07-08-2026 | Desarrollo finalizado sin incidencias |

---

# 7. Seguimiento

| Fecha | Riesgo | Acción | Responsable |
|--------|---------|---------|--------------|
| 07-08-2026 | RSK-001 | Mitigado tras aprobación del desarrollo | Chat 00 |
| 07-08-2026 | RSK-004 | Mitigado al mantenerse la metodología sin cambios | Chat 00 |
| 07-08-2026 | RSK-005 | Riesgo cerrado tras aprobación de Arquitectura | Chat 01 |
| 07-08-2026 | RSK-006 | Riesgo cerrado tras finalizar Desarrollo | Chat 02 |

---

# 8. Indicadores

| Indicador | Valor |
|------------|------:|
| Riesgos registrados | 8 |
| Riesgos cerrados | 2 |
| Riesgos mitigados | 2 |
| Riesgos abiertos | 4 |
| Riesgos críticos abiertos | 0 |

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
| Responsable | Chat 00 – Gestión del Proyecto |
| Próxima revisión | Al finalizar la Fase de Pruebas |
| Versión | 0.1.0 |

---

# 11. Historial de Cambios

| Versión | Fecha | Descripción |
|----------|-------|-------------|
| 0.1.0 | 05-08-2026 | Creación inicial del registro de riesgos. |
| 0.1.1 | 07-08-2026 | Actualización tras la aprobación de Arquitectura y la finalización del Desarrollo. Se cierran y mitigan los riesgos correspondientes y se mantienen activos únicamente los relacionados con Pruebas, Documentación y Publicación. |