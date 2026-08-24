# TEST RESULTS — PaginaWebTest

## 1. Propósito

Este documento registra los resultados de las pruebas ejecutadas durante la Fase de Pruebas de la Iteración 1 de PaginaWebTest.

Los resultados corresponden al MVP definido para la versión 0.1.0.

---

## 2. Resumen de ejecución

| Indicador                  | Resultado |
| -------------------------- | --------: |
| Casos de prueba definidos  |         5 |
| Casos de prueba ejecutados |         5 |
| Casos aprobados            |         5 |
| Casos fallidos             |         0 |
| Incidencias abiertas       |         0 |

**Resultado general: APROBADO**

---

## 3. Resultados de los casos de prueba

| ID     | Caso de prueba               | Resultado                                                                         | Estado      |
| ------ | ---------------------------- | --------------------------------------------------------------------------------- | ----------- |
| TC-001 | Carga de la página           | La página se carga correctamente y muestra los elementos principales              | ✅ Aprobado |
| TC-002 | Estado inicial del indicador | El indicador inicia en color gris                                                 | ✅ Aprobado |
| TC-003 | Modo Verde                   | El indicador cambia a color verde al presionar el botón correspondiente           | ✅ Aprobado |
| TC-004 | Modo Azul                    | El indicador cambia a color azul al presionar el botón correspondiente            | ✅ Aprobado |
| TC-005 | Comportamiento responsive    | La interfaz mantiene una disposición utilizable en diferentes tamaños de pantalla | ✅ Aprobado |

---

## 4. Compatibilidad

Las pruebas de compatibilidad registradas para la Iteración 1 fueron satisfactorias.

| Navegador      | Resultado               | Estado      |
| -------------- | ----------------------- | ----------- |
| Google Chrome  | Funcionamiento correcto | ✅ Aprobado |
| Microsoft Edge | Funcionamiento correcto | ✅ Aprobado |

---

## 5. Resultados de rendimiento

La evaluación de rendimiento fue realizada utilizando Google Lighthouse.

Los resultados registrados fueron:

| Métrica                        | Resultado |
| ------------------------------ | --------: |
| Performance                    |   100/100 |
| First Contentful Paint (FCP)   |     0.3 s |
| Largest Contentful Paint (LCP) |     0.3 s |
| Total Blocking Time (TBT)      |      0 ms |
| Cumulative Layout Shift (CLS)  |         0 |

**Resultado de rendimiento registrado: APROBADO**

### Nota sobre la evidencia

Los valores anteriores corresponden a la ejecución de Google Lighthouse registrada durante la Fase de Pruebas de la Iteración 1.

El informe o artefacto original de Lighthouse no forma parte del repositorio actual.

Por tanto, estos valores se consideran **resultados registrados de la ejecución realizada** y no una evidencia reproducible almacenada actualmente en el proyecto.

---

## 6. Resultados de requisitos

Los requisitos definidos para el MVP fueron cubiertos por las pruebas correspondientes.

| Requisito                            | Resultado   |
| ------------------------------------ | ----------- |
| RF-001 — Página principal            | ✅ Aprobado |
| RF-002 — Indicador inicialmente gris | ✅ Aprobado |
| RF-003 — Modo Verde                  | ✅ Aprobado |
| RF-004 — Modo Azul                   | ✅ Aprobado |
| RF-005 — Interfaz responsive         | ✅ Aprobado |

---

## 7. Resultados de requisitos no funcionales

| Requisito                                          | Resultado   |
| -------------------------------------------------- | ----------- |
| RNF-001 — HTML5, CSS3 y JavaScript Vanilla         | ✅ Aprobado |
| RNF-002 — Compatibilidad con navegadores definidos | ✅ Aprobado |
| RNF-003 — Rendimiento                              | ✅ Aprobado |
| RNF-004 — Registro documental de las pruebas       | ✅ Aprobado |

**Resultado: 4/4 requisitos no funcionales aprobados.**

---

## 8. Incidencias

Durante la ejecución registrada de las pruebas:

```text
Incidencias detectadas: 0
Incidencias abiertas:   0
```
