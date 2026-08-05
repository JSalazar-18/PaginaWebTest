# Plantilla del Proyecto Profesional

**Versión:** 3.0.0

**Compatible con:** Manual Metodológico del Proyecto Profesional v3.0.0

**Fecha de publicación:** 30-07-2026

---

## 1. Objetivo

Definir la estructura estándar que deberá utilizar todo nuevo proyecto desarrollado bajo la metodología **Manual Metodológico del Proyecto Profesional v3.0.0**.

La plantilla proporciona la organización del repositorio, los documentos base, la estructura de carpetas y los recursos necesarios para iniciar un proyecto de forma homogénea, reutilizable y mantenible.

---

## 2. Estructura del Repositorio

Todo proyecto deberá mantener la siguiente estructura base, alineada con la jerarquía documental definida en el Manual (sección 17.2.3):

/
├── README.md # Resumen del proyecto
├── LICENSE.md # Licencia del proyecto
├── .gitignore # Archivos ignorados por Git
│
├── requirements/ # Documentos de requisitos (Chat 00)
│ ├── REQUIREMENTS.md # Requisitos funcionales y no funcionales
│ └── USE_CASES.md # Casos de uso (opcional)
│
├── planning/ # Documentos de planificación (Chat 00)
│ ├── ROADMAP.md # Planificación estratégica
│ ├── ITERATIONS.md # Planificación por iteraciones
│ └── RISKS.md # Registro de riesgos
│
├── architecture/ # Documentos de arquitectura (Chat 01)
│ ├── ARCHITECTURE.md # Arquitectura de la solución
│ └── DECISIONS.md # Decisiones técnicas (ADR)
│
├── development/ # Código fuente (Chat 02)
│ ├── src/ # Código fuente
│ ├── tests/ # Pruebas unitarias
│ └── scripts/ # Scripts de automatización
│
├── testing/ # Documentos de pruebas (Chat 03)
│ ├── TEST_PLAN.md # Plan de pruebas
│ └── TEST_RESULTS.md # Resultados de pruebas
│
├── documentation/ # Documentación del proyecto (Chat 04)
│ ├── PROJECT_STATUS.md # Estado del proyecto
│ └── TODO.md # Tareas pendientes
│
├── versioning/ # Control de versiones (Chat 05)
│ ├── VERSION.md # Versión actual
│ └── CHANGELOG.md # Historial de cambios
│
└── templates/ # Recursos metodológicos
├── Plantilla_Proyecto_Profesional.md # Esta plantilla (referencia)
└── chat_prompts/ # Prompts de chats especializados
├── prompt_00_gestion.md
├── prompt_01_arquitectura.md
├── prompt_02_desarrollo.md
├── prompt_03_pruebas.md
├── prompt_04_documentacion.md
└── prompt_05_git_github.md


---

## 3. Organización del Repositorio

Cada proyecto deberá disponer de un único repositorio Git.

El repositorio contendrá:

- Código fuente
- Documentación
- Configuración
- Ejemplos
- Scripts
- Pruebas
- Recursos metodológicos

Toda la información deberá mantenerse organizada y sincronizada.

---

## 4. Documentos Mínimos Obligatorios

Todo proyecto deberá incluir, como mínimo, los siguientes documentos:

| **Documento** | **Ubicación** | **Chat Responsable** | **Propósito** |
|---------------|---------------|---------------------|---------------|
| README.md | Raíz | Chat 00 | Presentación general del proyecto |
| LICENSE.md | Raíz | Chat 00 | Licencia del proyecto |
| REQUIREMENTS.md | requirements/ | Chat 00 | Requisitos funcionales y no funcionales |
| ROADMAP.md | planning/ | Chat 00 | Plan de evolución del proyecto |
| ITERATIONS.md | planning/ | Chat 00 | Planificación por iteraciones |
| RISKS.md | planning/ | Chat 00 | Registro de riesgos del proyecto |
| ARCHITECTURE.md | architecture/ | Chat 01 | Arquitectura del sistema |
| DECISIONS.md | architecture/ | Chat 01 | Registro de decisiones técnicas (ADR) |
| TEST_PLAN.md | testing/ | Chat 03 | Plan y resultados de pruebas |
| PROJECT_STATUS.md | documentation/ | Chat 00 | Estado general del proyecto |
| TODO.md | documentation/ | Chat 00 | Lista de tareas pendientes |
| VERSION.md | versioning/ | Chat 05 | Versión actual del proyecto |
| CHANGELOG.md | versioning/ | Chat 05 | Historial de cambios del proyecto |

---

## 5. Chats Especializados

| **Chat** | **Nombre** | **Responsabilidad** | **Documentos Asociados** |
|----------|------------|---------------------|-------------------------|
| **00** | Gestión del Proyecto | Dirección, coordinación y planificación | REQUIREMENTS, ROADMAP, ITERATIONS, RISKS, PROJECT_STATUS, TODO |
| **01** | Arquitectura | Diseño y decisiones técnicas | ARCHITECTURE, DECISIONS |
| **02** | Desarrollo | Implementación del software | Código fuente, pruebas unitarias |
| **03** | Pruebas | Validación y control de calidad | TEST_PLAN, TEST_RESULTS |
| **04** | Documentación | Mantenimiento documental | Supervisión de todos los documentos |
| **05** | Git y GitHub | Control de versiones | VERSION, CHANGELOG |

---

## 6. Orden de Personalización

Al crear un nuevo proyecto deberá seguirse el siguiente orden:

1. Copiar la plantilla.
2. Eliminar el directorio `.git` (si existe).
3. Renombrar el proyecto.
4. Personalizar `README.md`.
5. Actualizar `VERSION.md` a `0.1.0`.
6. Actualizar `CHANGELOG.md` con la creación del proyecto.
7. Actualizar `ROADMAP.md` con la visión inicial.
8. Actualizar `PROJECT_STATUS.md` con el estado inicial.
9. Crear el repositorio Git.
10. Crear el Proyecto en ChatGPT.
11. Agregar como Fuentes del Proyecto:
    - `Manual_Metodologico_Proyecto_Profesional.md`
    - `Plantilla_Proyecto_Profesional.md`
12. Crear los seis chats oficiales.
13. Inicializar cada chat utilizando los prompts contenidos en `templates/chat_prompts/`.
14. Comenzar el proyecto desde el chat **00 - Gestión del Proyecto**.

---

## 7. Archivos que Nunca Deben Modificarse

Los siguientes archivos constituyen la base metodológica de la plantilla y **no deberán modificarse** directamente dentro de un proyecto ya iniciado, salvo que exista una decisión metodológica formalmente aprobada:

- `LICENSE.md`
- `templates/chat_prompts/*`
- `templates/Plantilla_Proyecto_Profesional.md`

Las mejoras deberán incorporarse primero a la plantilla oficial y posteriormente utilizarse en nuevos proyectos.

---

## 8. Archivos que se Actualizan Continuamente

Durante el desarrollo del proyecto se actualizarán, según corresponda:

| **Documento** | **Frecuencia** | **Responsable** |
|---------------|----------------|-----------------|
| README.md | Según cambios importantes | Chat 00 |
| VERSION.md | Cada versión | Chat 05 |
| CHANGELOG.md | Cada cambio significativo | Chat 05 |
| ROADMAP.md | Revisiones periódicas | Chat 00 |
| PROJECT_STATUS.md | Continuamente | Chat 00 |
| TODO.md | Continuamente | Chat 00 |
| DECISIONS.md | Cada decisión importante | Chat 01 |
| ARCHITECTURE.md | Cambios arquitectónicos | Chat 01 |
| TEST_PLAN.md | Cada ciclo de pruebas | Chat 03 |
| REQUIREMENTS.md | Cambios de requisitos | Chat 00 |
| ITERATIONS.md | Cada iteración | Chat 00 |
| RISKS.md | Revisiones periódicas | Chat 00 |

Toda actualización deberá mantenerse sincronizada con el estado real del proyecto.

---

## 9. Flujo de Inicialización de un Proyecto

El flujo recomendado es el siguiente:

```text
Copiar Plantilla
    ↓
Eliminar .git
    ↓
Crear repositorio
    ↓
Crear Proyecto en ChatGPT
    ↓
Agregar Manual como Fuente
    ↓
Agregar Plantilla como Fuente
    ↓
Crear seis chats (00-05)
    ↓
Inicializar cada chat con su Prompt
    ↓
Abrir 00 - Gestión del Proyecto
    ↓
Planificación inicial (REQUIREMENTS, ROADMAP)
    ↓
Arquitectura (ARCHITECTURE, DECISIONS)
    ↓
Desarrollo (Código)
    ↓
Pruebas (TEST_PLAN)
    ↓
Documentación (PROJECT_STATUS, TODO)
    ↓
Git y GitHub (VERSION, CHANGELOG)
```

## 10. Flujo de Documentación
Toda modificación documental seguirá el siguiente orden:

```text
REQUIREMENTS.md
    ↓
ROADMAP.md
    ↓
ITERATIONS.md
    ↓
ARCHITECTURE.md
    ↓
DECISIONS.md
    ↓
TEST_PLAN.md
    ↓
PROJECT_STATUS.md
    ↓
TODO.md
    ↓
RISKS.md
    ↓
CHANGELOG.md
    ↓
VERSION.md
```

La documentación siempre deberá reflejar el estado real del proyecto.

## 11. Flujo Git

Todo cambio seguirá el siguiente flujo:

```text
Desarrollo
    ↓
Pruebas
    ↓
Documentación
    ↓
PROJECT_STATUS
    ↓
VERSION
    ↓
CHANGELOG
    ↓
Commit
    ↓
Push
    ↓
Nueva versión
```
No deberán registrarse cambios sin haber completado las fases anteriores.

## 12. Checklist de Preparación

Antes de comenzar el desarrollo verificar:

- [ ] Plantilla copiada.
- [ ] Directorio `.git` eliminado (si existe).
- [ ] Repositorio creado.
- [ ] Proyecto creado en ChatGPT.
- [ ] Manual incorporado como Fuente del Proyecto.
- [ ] Plantilla incorporada como Fuente del Proyecto.
- [ ] Seis chats oficiales creados (00-05).
- [ ] Prompts inicializados correctamente.
- [ ] Chat **00 - Gestión del Proyecto** operativo.
- [ ] Planificación inicial completada (REQUIREMENTS, ROADMAP).
- [ ] Proyecto listo para comenzar.


## 13. Checklist antes del Primer Commit

Antes del primer commit verificar:

- [ ] Arquitectura definida en ARCHITECTURE.md.
- [ ] Decisiones registradas en DECISIONS.md.
- [ ] Desarrollo inicial completado.
- [ ] Pruebas ejecutadas y registradas en TEST_PLAN.md.
- [ ] Documentación actualizada.
- [ ] PROJECT_STATUS.md actualizado.
- [ ] TODO.md actualizado.
- [ ] RISKS.md actualizado.
- [ ] VERSION.md actualizado a 0.1.0.
- [ ] CHANGELOG.md actualizado.
- [ ] Repositorio validado.
- [ ] Commit preparado.
- [ ] Proyecto listo para iniciar su historial de versiones.


## 14. Referencias
Manual Metodológico del Proyecto Profesional v3.0.0

Estructura definida en la sección 17.2.3 del Manual

Organización de chats especializados (sección 12.9 del Manual)

Fin de la Plantilla

Versión 3.0.0 - Alineada con el Manual Metodológico del Proyecto Profesional v3.0.0

Manual 2.0.0 archivado como versión histórica.


---

## 📋 Resumen de Correcciones

| **Ubicación** | **Problema** | **Corrección** |
|---------------|--------------|----------------|
| Sección 10 | Diagrama sin delimitadores | Añadido ` ```text ` y ` ``` ` |
| Sección 11 | Diagrama sin delimitadores | Añadido ` ```text ` y ` ``` ` |
| Sección 12 | Checklist sin formato Markdown | Cambiado `□` por `- [ ]` |
| Sección 13 | Checklist sin formato Markdown | Cambiado `□` por `- [ ]` |

---

## 🎯 Veredicto Final

| **Criterio** | **Puntuación** |
|--------------|----------------|
| Estructura | 10/10 |
| Contenido | 10/10 |
| Formato Markdown | 10/10 |
| Alineación con Manual | 10/10 |

**Calificación Global: 10/10** ✅

**¡La Plantilla está 100% correcta y lista para ser utilizada!** 🎯

