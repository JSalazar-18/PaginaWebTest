# TEST_PLAN - Plan de Pruebas

**Proyecto:** PaginaWebTest  
**Documento:** TEST_PLAN.md  
**Versión:** 0.1.2  
**Estado:** Ejecutado y Aprobado  
**Responsable:** Chat 03 – Pruebas  
**Última actualización:** 07-08-2026

---

# 1. Objetivo

Verificar el cumplimiento de los requisitos funcionales y no funcionales definidos para la versión **0.1.0** del proyecto **PaginaWebTest**, garantizando que la implementación cumple con los requisitos aprobados, la arquitectura definida y las decisiones arquitectónicas (ADR).

---

# 2. Alcance

Las pruebas cubren la totalidad de los requisitos aprobados para la Iteración 1.

## Requisitos Funcionales

- RF-001 Página Principal.
- RF-002 Indicador LED.
- RF-003 Modo Verde.
- RF-004 Modo Azul.
- RF-005 Interfaz Responsive.

## Requisitos No Funcionales

- RNF-001 Compatibilidad.
- RNF-002 Rendimiento.
- RNF-003 Código limpio.
- RNF-004 Mantenibilidad.

---

# 3. Estrategia de Pruebas

Se ejecutaron los siguientes tipos de pruebas:

- Pruebas funcionales.
- Pruebas visuales.
- Pruebas de compatibilidad.
- Pruebas de rendimiento.
- Verificación documental.

No aplican pruebas de integración debido a que la versión 0.1.0 no incorpora backend, base de datos, APIs ni componentes externos.

---

# 4. Entorno de Pruebas

| Elemento | Valor |
|----------|-------|
| Sistema Operativo | Windows |
| Navegadores soportados | Google Chrome y Microsoft Edge |
| Servidor local | Python HTTP Server (`http://localhost:8000`) |
| Tecnologías | HTML5, CSS3 y JavaScript Vanilla |
| Herramienta de rendimiento | Google Lighthouse |

---

# 5. Casos de Prueba

| Caso | Requisito | Descripción | Resultado |
|------|-----------|-------------|-----------|
| TC-001 | RF-001 | Mostrar correctamente la página principal. | ✅ Aprobado |
| TC-002 | RF-002 | El indicador LED inicia en color gris. | ✅ Aprobado |
| TC-003 | RF-003 | El botón **Modo Verde** cambia correctamente el indicador a color verde. | ✅ Aprobado |
| TC-004 | RF-004 | El botón **Modo Azul** cambia correctamente el indicador a color azul. | ✅ Aprobado |
| TC-005 | RF-005 | La interfaz responde correctamente en diferentes resoluciones. | ✅ Aprobado |

---

# 6. Verificación de Requisitos No Funcionales

| Requisito | Resultado | Evidencia |
|-----------|-----------|-----------|
| RNF-001 Compatibilidad | ✅ Cumple | Funcionamiento verificado en Google Chrome y Microsoft Edge. |
| RNF-002 Rendimiento | ✅ Cumple | Medición realizada con Google Lighthouse. |
| RNF-003 Código limpio | ✅ Cumple | Código organizado y separado por responsabilidades. |
| RNF-004 Mantenibilidad | ✅ Cumple | Arquitectura respetada (HTML, CSS y JavaScript separados). |

---

# 7. Evidencia de Rendimiento

La evaluación de rendimiento fue realizada mediante **Google Lighthouse** ejecutando la aplicación desde un servidor HTTP local.

## Resultados obtenidos

| Métrica | Resultado |
|----------|----------:|
| Performance Score | **100 / 100** |
| First Contentful Paint (FCP) | **0.3 s** |
| Largest Contentful Paint (LCP) | **0.3 s** |
| Speed Index | **0.3 s** |
| Total Blocking Time | **0 ms** |
| Cumulative Layout Shift (CLS) | **0** |

### Resultado

El requisito **RNF-002** queda **aprobado**, ya que el tiempo de carga medido es significativamente inferior al límite establecido de **3 segundos**.

---

# 8. Criterios de Aprobación

La Fase de Pruebas será considerada aprobada cuando:

- Todos los requisitos funcionales estén aprobados.
- Todos los requisitos no funcionales estén aprobados.
- No existan incidencias críticas ni bloqueantes.
- La documentación permanezca sincronizada.
- Existan evidencias objetivas que respalden los resultados obtenidos.

---

# 9. Resultado General

## Requisitos Funcionales

| Requisito | Estado |
|-----------|--------|
| RF-001 | ✅ |
| RF-002 | ✅ |
| RF-003 | ✅ |
| RF-004 | ✅ |
| RF-005 | ✅ |

## Requisitos No Funcionales

| Requisito | Estado |
|-----------|--------|
| RNF-001 | ✅ |
| RNF-002 | ✅ |
| RNF-003 | ✅ |
| RNF-004 | ✅ |

---

# 10. Conclusión

La totalidad de los requisitos definidos para la versión **0.1.0** fueron verificados satisfactoriamente.

No existen incidencias críticas, medias ni bloqueantes.

La aplicación:

- cumple los requisitos funcionales;
- cumple los requisitos no funcionales;
- respeta la arquitectura aprobada;
- respeta las decisiones arquitectónicas (ADR);
- mantiene la separación entre HTML, CSS y JavaScript;
- presenta un rendimiento excelente según Google Lighthouse.

Se recomienda aprobar definitivamente la Fase de Pruebas y continuar con la Fase de Documentación.

---

# 11. Estado del Documento

| Campo | Valor |
|--------|-------|
| Estado | Ejecutado y Aprobado |
| Responsable | Chat 03 – Pruebas |
| Próxima revisión | Ante cambios funcionales o arquitectónicos |
| Versión | 0.1.2 |

---

# 12. Historial de Cambios

| Versión | Fecha | Descripción |
|----------|-------|-------------|
| 0.1.0 | 07-08-2026 | Creación inicial del Plan de Pruebas para la Iteración 1. |
| 0.1.1 | 07-08-2026 | Actualización del requisito RNF-001 conforme al alcance aprobado del proyecto. Se incorpora la compatibilidad oficial con Google Chrome y Microsoft Edge. |
| 0.1.2 | 07-08-2026 | Se incorpora la evidencia objetiva de rendimiento obtenida mediante Google Lighthouse (Performance 100/100, FCP 0.3 s, LCP 0.3 s, Speed Index 0.3 s, Total Blocking Time 0 ms y CLS 0). Se aprueba el requisito RNF-002 y se cierra la Fase de Pruebas sin observaciones pendientes. |