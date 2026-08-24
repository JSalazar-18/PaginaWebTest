# TEST PLAN — PaginaWebTest

## 1. Propósito

Este documento define el plan de pruebas para validar el MVP de PaginaWebTest.

El objetivo es verificar que las funcionalidades implementadas cumplen los requisitos definidos y que el sistema presenta un comportamiento correcto en las condiciones previstas para la Iteración 1.

---

## 2. Alcance

Las pruebas de la Iteración 1 cubren:

- Carga de la página principal.
- Estado inicial del indicador circular.
- Funcionamiento del botón Modo Verde.
- Funcionamiento del botón Modo Azul.
- Comportamiento visual de la interfaz.
- Compatibilidad básica con navegadores.
- Comportamiento responsive.
- Rendimiento básico de la página.
- Revisión documental asociada al cierre de la Iteración 1.

No forman parte del alcance de esta fase funcionalidades futuras no incluidas en el MVP.

---

## 3. Requisitos relacionados

Las pruebas se relacionan principalmente con los requisitos funcionales y no funcionales definidos para el MVP.

| Requisito | Descripción                                                          | Validación          |
| --------- | -------------------------------------------------------------------- | ------------------- |
| RF-001    | La página principal debe cargarse correctamente                      | Prueba funcional    |
| RF-002    | El indicador debe iniciar en color gris                              | Prueba funcional    |
| RF-003    | El botón Modo Verde debe cambiar el indicador a verde                | Prueba funcional    |
| RF-004    | El botón Modo Azul debe cambiar el indicador a azul                  | Prueba funcional    |
| RF-005    | La interfaz debe presentar comportamiento responsive básico          | Prueba visual       |
| RNF-001   | La interfaz debe utilizar HTML5, CSS3 y JavaScript Vanilla           | Revisión técnica    |
| RNF-002   | La página debe funcionar en los navegadores definidos para la prueba | Compatibilidad      |
| RNF-003   | La interfaz debe presentar un rendimiento adecuado para el MVP       | Rendimiento         |
| RNF-004   | La documentación de pruebas debe registrar los resultados obtenidos  | Revisión documental |

---

## 4. Entorno de pruebas

### Navegadores

Las pruebas se realizan principalmente utilizando:

- Google Chrome.
- Microsoft Edge.

### Ejecución

La aplicación se ejecuta mediante un servidor HTTP local.

### Tecnologías

- HTML5.
- CSS3.
- JavaScript Vanilla.

---

## 5. Casos de prueba

### TC-001 — Carga de la página

**Objetivo:** Verificar que la página principal se cargue correctamente.

**Procedimiento:**

1. Iniciar el servidor local.
2. Abrir la dirección de la aplicación.
3. Verificar que la interfaz se muestre correctamente.

**Resultado esperado:**

- La página se carga sin errores visibles.
- El indicador circular es visible.
- Los botones son visibles.

---

### TC-002 — Estado inicial del indicador

**Objetivo:** Verificar el estado inicial del indicador.

**Procedimiento:**

1. Cargar la página.
2. No presionar ningún botón.
3. Observar el indicador circular.

**Resultado esperado:**

El indicador debe iniciar en color gris.

---

### TC-003 — Modo Verde

**Objetivo:** Verificar el funcionamiento del botón Modo Verde.

**Procedimiento:**

1. Cargar la página.
2. Presionar el botón Modo Verde.
3. Observar el indicador circular.

**Resultado esperado:**

El indicador debe cambiar a color verde.

---

### TC-004 — Modo Azul

**Objetivo:** Verificar el funcionamiento del botón Modo Azul.

**Procedimiento:**

1. Cargar la página.
2. Presionar el botón Modo Azul.
3. Observar el indicador circular.

**Resultado esperado:**

El indicador debe cambiar a color azul.

---

### TC-005 — Comportamiento responsive

**Objetivo:** Verificar el comportamiento básico de la interfaz en diferentes tamaños de pantalla.

**Procedimiento:**

1. Abrir la aplicación.
2. Modificar el tamaño de la ventana del navegador.
3. Verificar la disposición de los elementos.

**Resultado esperado:**

La interfaz debe mantener una disposición utilizable y los elementos principales deben permanecer visibles.

---

## 6. Pruebas de compatibilidad

Se verifica el comportamiento de la aplicación en:

| Navegador      | Resultado esperado |
| -------------- | ------------------ |
| Google Chrome  | Correcto           |
| Microsoft Edge | Correcto           |

---

## 7. Pruebas de rendimiento

Se utiliza Google Lighthouse como herramienta de evaluación del rendimiento de la página.

Las métricas registradas durante la ejecución de las pruebas incluyen:

- Performance.
- First Contentful Paint (FCP).
- Largest Contentful Paint (LCP).
- Total Blocking Time (TBT).
- Cumulative Layout Shift (CLS).

### Criterio de evaluación

Los resultados obtenidos durante la ejecución deben registrarse en `testing/TEST_RESULTS.md`.

Cuando corresponda, los resultados deben estar respaldados por evidencias objetivas disponibles.

---

## 8. Criterios de aprobación

La Fase de Pruebas se considera aprobada cuando:

- Los casos de prueba definidos han sido ejecutados.
- Los resultados cumplen los resultados esperados.
- No existen incidencias abiertas que impidan el cierre de la Iteración 1.
- Los resultados quedan registrados en `TEST_RESULTS.md`.
- Las pruebas de compatibilidad definidas han sido ejecutadas.
- La evaluación de rendimiento ha sido realizada.
- La documentación de pruebas queda actualizada.

---

## 9. Evidencia

Los resultados de las pruebas se registran en:

```text
testing/TEST_RESULTS.md
```
