# CHAT STRUCTURE — PaginaWebTest

## 1. Propósito

Este documento define la estructura oficial de los chats especializados utilizados para gestionar y desarrollar el proyecto PaginaWebTest.

Cada chat tiene una responsabilidad específica y debe trabajar dentro de los límites definidos para su función.

---

## 2. Estructura oficial

El proyecto utiliza seis chats especializados:

| Chat | Nombre               | Responsabilidad principal                        |
| ---- | -------------------- | ------------------------------------------------ |
| 00   | Gestión del Proyecto | Coordinación general y control metodológico      |
| 01   | Arquitectura         | Diseño arquitectónico y decisiones técnicas      |
| 02   | Desarrollo           | Implementación del software                      |
| 03   | Pruebas              | Planificación, ejecución y validación de pruebas |
| 04   | Documentación        | Mantenimiento y actualización documental         |
| 05   | Git y GitHub         | Control de versiones y publicación               |

---

## 3. Chat 00 — Gestión del Proyecto

El **Chat 00 — Gestión del Proyecto** es el **Chat Central** del proyecto.

Su función es coordinar el trabajo de los demás chats y mantener la coherencia general del proyecto.

### Responsabilidades

- Coordinar las fases del proyecto.
- Controlar el cumplimiento de la metodología.
- Revisar el estado general del proyecto.
- Coordinar el trabajo entre los chats especializados.
- Validar el avance entre fases.
- Mantener la trazabilidad entre requisitos, arquitectura, desarrollo, pruebas y documentación.
- Autorizar el avance de las actividades según el estado del proyecto.
- Mantener actualizado el estado general cuando corresponda.

El Chat 00 no sustituye el trabajo especializado de los demás chats.

---

## 4. Chat 01 — Arquitectura

Responsable del diseño técnico del proyecto.

### Responsabilidades

- Analizar los requisitos desde el punto de vista técnico.
- Definir la arquitectura.
- Registrar decisiones arquitectónicas.
- Mantener `architecture/ARCHITECTURE.md`.
- Mantener `architecture/DECISIONS.md`.
- Verificar que la implementación respete la arquitectura aprobada.

---

## 5. Chat 02 — Desarrollo

Responsable de la implementación del software.

### Responsabilidades

- Implementar los requisitos aprobados.
- Trabajar de acuerdo con la arquitectura aprobada.
- Modificar el código necesario para cumplir los requisitos.
- Mantener la separación entre estructura, estilos y comportamiento cuando corresponda.
- Informar al Chat 00 sobre el avance y los resultados del desarrollo.

La implementación actual del MVP utiliza:

- HTML5.
- CSS3.
- JavaScript Vanilla.

---

## 6. Chat 03 — Pruebas

Responsable de la validación del software.

### Responsabilidades

- Elaborar y mantener el plan de pruebas.
- Definir casos de prueba.
- Ejecutar las pruebas correspondientes.
- Registrar los resultados.
- Identificar fallos.
- Informar al Chat 00 sobre el resultado de las pruebas.
- Verificar que los requisitos implementados funcionen según lo esperado.

Los documentos principales relacionados con esta función son:

```text
testing/TEST_PLAN.md
testing/TEST_RESULTS.md
```
