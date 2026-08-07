# TEST_RESULTS - Resultados de Pruebas

**Proyecto:** PaginaWebTest  
**Documento:** TEST_RESULTS.md  
**Versión:** 0.1.2  
**Estado:** Aprobado  
**Responsable:** Chat 03 – Pruebas  
**Última actualización:** 07-08-2026

---

# 1. Objetivo

Registrar los resultados obtenidos durante la ejecución de las pruebas correspondientes a la versión **0.1.0** del proyecto **PaginaWebTest**, verificando el cumplimiento de los requisitos funcionales y no funcionales establecidos.

---

# 2. Resumen Ejecutivo

La Fase de Pruebas fue ejecutada satisfactoriamente.

Se verificó el cumplimiento de todos los requisitos funcionales y no funcionales definidos para la versión **0.1.0**.

No se detectaron incidencias críticas, medias ni bloqueantes.

La aplicación cumple los requisitos establecidos y se encuentra apta para continuar con la Fase de Documentación.

---

# 3. Resultados por Caso de Prueba

| Caso | Requisito | Resultado |
|------|-----------|-----------|
| TC-001 | RF-001 | ✅ Aprobado |
| TC-002 | RF-002 | ✅ Aprobado |
| TC-003 | RF-003 | ✅ Aprobado |
| TC-004 | RF-004 | ✅ Aprobado |
| TC-005 | RF-005 | ✅ Aprobado |

---

# 4. Resultados de Requisitos No Funcionales

| Requisito | Estado | Evidencia |
|-----------|--------|-----------|
| RNF-001 Compatibilidad | ✅ Cumple | Funcionamiento verificado en Google Chrome y Microsoft Edge. |
| RNF-002 Rendimiento | ✅ Cumple | Google Lighthouse. |
| RNF-003 Código limpio | ✅ Cumple | Revisión técnica del código. |
| RNF-004 Mantenibilidad | ✅ Cumple | Arquitectura validada. |

---

# 5. Evidencias

## Compatibilidad

Se verificó el correcto funcionamiento de la aplicación utilizando los navegadores oficialmente soportados por el proyecto:

- Google Chrome.
- Microsoft Edge.

No se identificaron diferencias funcionales entre ambos navegadores.

---

## Rendimiento

La evaluación se realizó mediante **Google Lighthouse** sobre un servidor HTTP local.

### Resultados

| Métrica | Resultado |
|----------|----------:|
| Performance Score | **100 / 100** |
| First Contentful Paint | **0.3 s** |
| Largest Contentful Paint | **0.3 s** |
| Speed Index | **0.3 s** |
| Total Blocking Time | **0 ms** |
| Cumulative Layout Shift | **0** |

Todos los valores obtenidos cumplen ampliamente el requisito RNF-002.

---

# 6. Incidencias

## Resumen

| Severidad | Cantidad |
|-----------|---------:|
| Críticas | 0 |
| Altas | 0 |
| Medias | 0 |
| Bajas | 0 |

---

## INC-001

**Descripción**

Compatibilidad entre navegadores.

**Estado**

✅ Cerrada.

**Resolución**

Se verificó correctamente el funcionamiento de la aplicación en Google Chrome y Microsoft Edge, navegadores oficialmente soportados por el proyecto.

---

## INC-002

**Descripción**

Verificación objetiva del rendimiento.

**Estado**

✅ Cerrada.

**Resolución**

Se ejecutó Google Lighthouse obteniendo:

- Performance Score: 100/100.
- FCP: 0.3 s.
- LCP: 0.3 s.
- Speed Index: 0.3 s.
- Total Blocking Time: 0 ms.
- CLS: 0.

El requisito RNF-002 queda aprobado.

---

# 7. Estadísticas

| Indicador | Valor |
|------------|------:|
| Casos ejecutados | 5 |
| Casos aprobados | 5 |
| Casos fallidos | 0 |
| Cobertura funcional | 100 % |
| Requisitos no funcionales aprobados | 4 / 4 |
| Incidencias abiertas | 0 |
| Incidencias cerradas | 2 |

---

# 8. Veredicto Final

## Resultado de la Fase de Pruebas

**✅ APROBADA**

Se verificó satisfactoriamente:

- Todos los requisitos funcionales.
- Todos los requisitos no funcionales.
- Compatibilidad con los navegadores oficialmente soportados.
- Rendimiento conforme al requisito RNF-002.
- Cumplimiento de la arquitectura aprobada.
- Cumplimiento de las decisiones arquitectónicas (ADR).

No existen incidencias pendientes.

---

# 9. Recomendación

Se recomienda al **Chat 00 – Gestión del Proyecto**:

- Aprobar oficialmente la Fase de Pruebas.
- Actualizar la documentación de gestión.
- Autorizar el inicio de la Fase de Documentación mediante el Chat 04.

---

# 10. Estado del Documento

| Campo | Valor |
|--------|-------|
| Estado | Aprobado |
| Responsable | Chat 03 – Pruebas |
| Próxima revisión | Ante cambios funcionales o arquitectónicos |
| Versión | 0.1.2 |

---

# 11. Historial de Cambios

| Versión | Fecha | Descripción |
|----------|-------|-------------|
| 0.1.0 | 07-08-2026 | Creación inicial del documento con los resultados de la Iteración 1. |
| 0.1.1 | 07-08-2026 | Actualización del requisito RNF-001 conforme al alcance aprobado del proyecto. Compatibilidad oficial con Google Chrome y Microsoft Edge. |
| 0.1.2 | 07-08-2026 | Se incorpora la evidencia objetiva obtenida mediante Google Lighthouse. Se aprueba RNF-002 y se cierran todas las incidencias. La Fase de Pruebas queda completamente finalizada. |