# Manual Metodológico del Proyecto Profesional

**Versión:** 3.0.0

---

## 1. Control documental

| **Campo** | **Valor** |
|-----------|-----------|
| Documento | Manual_Metodologico_Proyecto_Profesional.md |
| Tipo | Documento normativo |
| Versión | 3.0.0 |
| Estado | Publicado |
| Idioma | Español |
| Licencia | Uso privado |
| Fecha de publicación | 30-07-2026 |

> **Nota:** La fecha de publicación debe establecerse en el momento de la liberación oficial del documento.

---

## 2. Historial de versiones

| **Versión** | **Fecha** | **Descripción** |
|-------------|-----------|-----------------|
| 1.0.0 | 2024-10-15 | Creación inicial del documento. |
| 2.0.0 | 2025-03-22 | Revisión y ampliación de capítulos tras pilotaje en proyectos. Incorporación de ChatGPT Projects. |
| **3.0.0** | 30-07-2026 | **Integración completa de detalle operativo para todas las subfases de la Fase 2. Consolidación con el Manual 2.0.0, incorporando organización de ChatGPT Projects, chats especializados y flujos de trabajo detallados. Unificación de criterios y eliminación de duplicidades.** |

---

## 3. Índice

- [1. Control documental](#1-control-documental)
- [2. Historial de versiones](#2-historial-de-versiones)
- [3. Índice](#3-índice)
- [4. Introducción](#4-introducción)
- [5. Objetivo](#5-objetivo)
- [6. Alcance](#6-alcance)
- [7. Glosario](#7-glosario)
- [8. Fundamentos metodológicos](#8-fundamentos-metodológicos)
- [9. Ciclo de vida](#9-ciclo-de-vida)
- [10. Gobernanza documental](#10-gobernanza-documental)
- [11. Gestión del proyecto](#11-gestión-del-proyecto)
- [12. Arquitectura y desarrollo](#12-arquitectura-y-desarrollo)
- [13. Calidad y pruebas](#13-calidad-y-pruebas)
- [14. Versionado y entregables](#14-versionado-y-entregables)
- [15. Buenas prácticas](#15-buenas-prácticas)
- [16. Integración y publicación](#16-integración-y-publicación)
- [17. Anexos](#17-anexos)

---

## 4. Introducción

### 4.1 Propósito del Manual

El presente Manual Metodológico del Proyecto Profesional establece el marco de trabajo, las directrices, los procesos y las buenas prácticas que regirán el desarrollo de cualquier proyecto profesional emprendido por la organización. Este documento es el resultado de la estandarización de los conocimientos, la experiencia y las lecciones aprendidas en proyectos anteriores, con el objetivo de proporcionar una guía única y robusta que asegure el éxito, la calidad y la trazabilidad de las iniciativas.

### 4.2 ¿Por qué existe este Manual?

Este Manual existe para:

- **Estandarizar** la gestión de proyectos en toda la organización.
- **Reducir** la ambigüedad y el retrabajo mediante procesos definidos.
- **Facilitar** la incorporación de nuevos miembros a los equipos.
- **Asegurar** la calidad y consistencia de los entregables.
- **Proporcionar** un marco de referencia para la toma de decisiones.
- **Permitir** la mejora continua a través de la retrospectiva y el aprendizaje.
- **Optimizar** el uso de ChatGPT Projects como entorno de coordinación.

### 4.3 ¿A quién está dirigido?

Este Manual está dirigido a:

- **Directores de proyecto:** Como guía para la planificación y ejecución.
- **Arquitectos de solución:** Para el diseño y la documentación técnica.
- **Desarrolladores:** Como referencia para la implementación y las buenas prácticas.
- **Equipos de calidad y pruebas:** Para la definición y ejecución de pruebas.
- **Patrocinadores y stakeholders:** Para comprender el marco de trabajo y sus fases.
- **Nuevos miembros:** Como documento de onboarding y referencia continua.

### 4.4 ¿Cómo debe utilizarse?

El Manual debe utilizarse como:

- **Referencia normativa:** Sus principios y reglas son de obligado cumplimiento.
- **Guía operativa:** Proporciona el "qué" y el "cómo" del trabajo.
- **Base para la formación:** Es el documento fundamental para la capacitación.
- **Punto de partida:** Para la creación de nuevos proyectos y su documentación.
- **Marco de coordinación:** Para la organización de ChatGPT Projects y chats especializados.

### 4.5 Relación con otros documentos del framework

El Manual se relaciona con los demás documentos del framework según la siguiente jerarquía:
README.md (Guía de inicio)
↓
Manual Metodológico del Proyecto Profesional (Este documento)
↓
Plantilla del Proyecto Profesional (Implementación operativa)
↓
Documentos de Gobernanza (VERSION.md, CHANGELOG_METODOLOGIA.md)
↓
Plantillas específicas (Requisitos, Pruebas, etc.)
↓
Ejemplos y casos de uso


### 4.6 Naturaleza del Manual

La metodología aquí descrita se concibe como un sistema vivo, adaptativo y escalable, diseñado para responder a las necesidades cambiantes del entorno empresarial y tecnológico. Este manual es la piedra angular de nuestra cultura de gestión de proyectos y un recurso fundamental para todos los miembros de los equipos, desde la fase de concepción hasta la entrega y el cierre.

El Manual constituye la fuente normativa del framework y define procesos, reglas, principios y estándares. La Plantilla implementa dichas reglas operativamente.

---

## 5. Objetivo

### 5.1 Objetivo general

Establecer los fundamentos conceptuales y metodológicos que sustentan la Metodología del Proyecto Profesional, definiendo principios, alcance, roles y responsabilidades para garantizar un desarrollo consistente y reutilizable, con especial énfasis en la coordinación mediante ChatGPT Projects.

### 5.2 Objetivos específicos

- Estandarizar proyectos profesionales en toda la organización.
- Reducir el retrabajo mediante procesos definidos y probados.
- Facilitar el mantenimiento y la evolución de los proyectos.
- Mejorar la calidad documental y técnica de los entregables.
- Garantizar la reproducibilidad de los procesos y resultados.
- Establecer un marco común de trabajo para todos los equipos.
- Optimizar la coordinación mediante la organización de chats especializados.
- Mantener una única fuente de verdad para cada documento.

---

## 6. Alcance

La metodología aplica a todo proyecto profesional desarrollado bajo el framework, desde la planificación hasta el cierre y mantenimiento, independientemente de su tamaño, complejidad, tecnología o duración.

El manual establece el marco normativo y los estándares que deben cumplir todos los proyectos, mientras que la Plantilla del Proyecto Profesional implementa operativamente las reglas establecidas en este documento.

---

## 7. Glosario

### 7.1 Términos fundamentales

- **Framework:** Conjunto de normas, procesos y documentos que definen la metodología.
- **Manual:** Documento normativo que establece las reglas y principios metodológicos.
- **Plantilla:** Documento de implementación que materializa las reglas del Manual.
- **Fase:** Conjunto de actividades con entregables definidos y criterios de transición.
- **Subfase:** División interna de una fase que detalla actividades específicas.
- **ChatGPT Project:** Entorno de trabajo en ChatGPT que agrupa conversaciones, archivos y configuración para un proyecto específico.
- **Chat especializado:** Conversación en ChatGPT Projects con una responsabilidad funcional específica.

### 7.2 Gestión de proyectos

- **Arquitectural Decision Record (ADR):** Documento que registra decisiones arquitectónicas significativas con su contexto, alternativas y justificación.
- **Control de cambios:** Proceso formal para gestionar modificaciones en documentos o entregables.
- **CHANGELOG:** Registro histórico de cambios significativos en el proyecto o documento.
- **Versionado Semántico (SemVer):** Convención de versionado con formato MAYOR.MENOR.PARCHE.
- **Trazabilidad:** Capacidad de seguir el rastro de un requisito o decisión a través del ciclo de vida del proyecto.
- **Entregable:** Producto o resultado tangible que debe proporcionarse en el proyecto.
- **Evidencia:** Registro o documentación que demuestra la realización de una actividad.
- **Riesgo:** Evento o condición incierta que puede afectar los objetivos del proyecto.
- **KPI (Key Performance Indicator):** Indicador clave de rendimiento para medir el progreso.
- **Iteración:** Ciclo de desarrollo repetitivo con objetivos y entregables definidos.

### 7.3 Tecnología y desarrollo

- **Git:** Sistema de control de versiones distribuido para el seguimiento de cambios.
- **GitHub:** Plataforma de alojamiento de repositorios Git y colaboración.
- **Release:** Versión publicada oficialmente de un producto o documento.
- **Issue:** Incidencia, problema o solicitud de mejora registrada en el repositorio.
- **Pull Request:** Solicitud para fusionar cambios de una rama a otra en Git.
- **Auditoría editorial:** Revisión de formato, estilo y coherencia de un documento.
- **Gobernanza:** Conjunto de procesos y políticas que aseguran la gestión controlada de documentos y decisiones.

---

## 8. Fundamentos metodológicos

### 8.1 Filosofía

- **Calidad antes que velocidad:** La excelencia en los entregables es prioritaria.
- **Documentación como parte del producto:** Los documentos son activos del proyecto.
- **Trazabilidad completa:** Todo cambio y decisión debe ser registrado.
- **Iteración incremental:** El desarrollo avanza mediante ciclos controlados.
- **Reutilización de activos:** Aprovechamiento de conocimientos y componentes existentes.
- **Mejora continua:** Aprendizaje y optimización constante del proceso.
- **Un único repositorio por proyecto.**
- **Una única fuente oficial para cada documento.**
- **Separación clara de responsabilidades entre los chats especializados.**
- **Arquitectura antes que implementación.**
- **Validación antes de publicar cambios.**
- **Documentación sincronizada con el desarrollo.**

### 8.2 Principios metodológicos

1. **Planificación:** Todo proyecto requiere una planificación previa documentada.
2. **Arquitectura primero:** El diseño arquitectónico precede a la implementación.
3. **Versionado permanente:** Todo entregable debe tener control de versiones.
4. **Evidencia de cambios:** Cada modificación debe estar justificada y registrada.
5. **Revisión continua:** La calidad se verifica de forma constante.
6. **Consistencia documental:** La documentación debe ser uniforme y coherente.
7. **Automatización:** Se aplica cuando aporta valor y reduce errores.
8. **Transparencia del proceso:** El estado y avance del proyecto son visibles.
9. **Especialización funcional:** Cada chat tiene una responsabilidad claramente delimitada.
10. **Coordinación centralizada:** El Chat 00 actúa como punto único de coordinación.

### 8.3 Roles y responsabilidades

| **Rol** | **Responsabilidades** |
|---------|----------------------|
| Director del proyecto | Define objetivos, gestiona recursos y aprueba entregables clave. |
| Arquitecto | Diseña la arquitectura técnica y documental de la solución. |
| Desarrollador | Implementa siguiendo la metodología y estándares definidos. |
| Revisor | Verifica la calidad y el cumplimiento de los estándares. |
| Gestor de versiones | Controla cambios, publicaciones y mantiene el historial. |
| Chat 00 - Gestión | Coordina la planificación, seguimiento y cierre del proyecto. |

### 8.4 Responsabilidades generales

- Cumplir las normas establecidas en el Manual.
- Mantener la documentación actualizada y sincronizada.
- Registrar todos los cambios de forma trazable.
- Validar los entregables antes de cada cierre de fase.
- Respetar la especialización de cada chat.
- Coordinar cualquier cambio de alcance a través del Chat 00.

### 8.5 Criterios de éxito

- Documentación consistente y completa.
- Procesos repetibles y estandarizados.
- Control de versiones efectivo.
- Evidencias de revisión y validación.
- Cumplimiento de los criterios de aceptación definidos.
- Coordinación eficiente entre chats especializados.
- Trazabilidad completa entre requisitos, arquitectura, desarrollo y pruebas.

### 8.6 Relación con la Plantilla

La Plantilla del Proyecto Profesional implementa operativamente las reglas establecidas en este Manual, proporcionando una estructura concreta para la documentación y gestión de proyectos.

---

## 9. Ciclo de vida

### 9.1 Ciclo de vida del proyecto

El ciclo de vida oficial consta de las siguientes etapas:

1. **Preparación del proyecto:** Configuración inicial y creación del entorno.
2. **Inicialización del Proyecto en ChatGPT:** Creación del ChatGPT Project y configuración de fuentes.
3. **Definición de requisitos:** Captura y especificación de necesidades.
4. **Planificación estratégica:** Definición de objetivos, alcance y recursos.
5. **Planificación por iteraciones:** Desglose del trabajo en ciclos controlados.
6. **Diseño de arquitectura:** Definición de la solución técnica.
7. **Desarrollo:** Implementación de la solución.
8. **Pruebas:** Validación de la calidad.
9. **Documentación:** Elaboración de la documentación final.
10. **Control de versiones:** Gestión de cambios y versiones.
11. **Publicación de la versión:** Liberación de la versión oficial.
12. **Mantenimiento evolutivo:** Soporte y evolución continua.

Cada fase deberá completarse antes de avanzar a la siguiente. Cuando una fase requiera volver a una anterior (por ejemplo, una modificación arquitectónica durante el desarrollo), deberá mantenerse la trazabilidad documental correspondiente.

### 9.2 Flujo metodológico

El flujo metodológico sigue la siguiente secuencia:

**Idea** → **REQUIREMENTS** → **ROADMAP** → **ITERATIONS** → **Arquitectura** → **Desarrollo** → **Pruebas** → **Documentación** → **PROJECT_STATUS** → **Git y GitHub** → **Nueva versión**

### 9.3 Flujo documental

Todo documento debe seguir este ciclo:

1. **Creación:** Elaboración inicial del documento.
2. **Revisión técnica:** Verificación de la exactitud del contenido.
3. **Revisión editorial:** Validación de formato, lenguaje y estructura.
4. **Aprobación:** Autorización formal para su publicación.
5. **Versionado:** Asignación de número de versión.
6. **Publicación:** Liberación del documento oficial.
7. **Archivado:** Conservación de versiones históricas.

Todo documento debe mantener trazabilidad entre versiones.

**El flujo documental específico del proyecto sigue este orden:**
REQUIREMENTS.md
↓
ROADMAP.md
↓
ITERATIONS.md
↓
ARCHITECTURE.md
↓
TEST_PLAN.md
↓
PROJECT_STATUS.md
↓
CHANGELOG.md
↓
VERSION.md


### 9.4 Flujo de desarrollo

El desarrollo sigue este proceso iterativo:

1. Definición de requisitos.
2. Diseño técnico.
3. Implementación incremental.
4. Revisión de código.
5. Pruebas.
6. Corrección de incidencias.
7. Integración continua.

### 9.5 Gestión de iteraciones

Cada iteración debe incluir:

- **Objetivo:** Propósito claro de la iteración.
- **Alcance:** Límites y contenido de la iteración.
- **Actividades:** Tareas específicas a realizar.
- **Riesgos:** Posibles problemas y mitigaciones.
- **Entregables:** Resultados esperados.
- **Evidencias:** Registros de ejecución.
- **Resultado:** Evaluación final.

No se inicia una nueva iteración sin cerrar la anterior adecuadamente.

### 9.6 Control de cambios

Todo cambio debe seguir un proceso controlado y trazable:

1. **Identificación de la necesidad:** Documentar qué se modifica.
2. **Análisis del impacto:** Evaluar consecuencias en el proyecto.
3. **Actualización de REQUIREMENTS:** Si aplica, modificar los requisitos.
4. **Revisión del ROADMAP e ITERATIONS:** Ajustar planificación si es necesario.
5. **Validación arquitectónica:** Verificar impacto en la arquitectura.
6. **Implementación:** Realizar el cambio.
7. **Pruebas:** Validar la corrección.
8. **Actualización documental:** Sincronizar toda la documentación.
9. **Control de versiones:** Registrar el cambio formalmente.

Ningún cambio deberá incorporarse al proyecto sin quedar documentado y relacionado con el resto de los artefactos del proyecto.

### 9.7 Criterios de transición

Para pasar de una fase a otra se requiere:

- Entregables completos según lo planificado.
- Revisión aprobada por el responsable correspondiente.
- Documentación actualizada y consistente.
- Registro de cambios actualizado.
- Criterios de aceptación cumplidos.
- En proyectos con ChatGPT Projects, coordinación a través del Chat 00.

### 9.8 Indicadores de seguimiento

Indicadores mínimos para el seguimiento:

- Avance por fase.
- Cumplimiento del cronograma.
- Incidencias abiertas.
- Cobertura documental.
- Estado de revisión.
- Estado de publicación.

---

## 10. Gobernanza documental

### 10.1 Objetivo

Definir el modelo de gobernanza documental que garantice la creación, revisión, aprobación, publicación, mantenimiento y retiro de los documentos del framework, asegurando trazabilidad y consistencia.

### 10.2 Alcance

Aplica a todos los documentos oficiales de la metodología, plantillas, guías, registros y anexos del repositorio.

### 10.3 Principios de gobernanza

- **Documento único de referencia:** Cada documento tiene una única fuente oficial.
- **Trazabilidad de cambios:** Todo cambio es registrado y justificado.
- **Control de versiones:** Todas las versiones son identificables y recuperables.
- **Responsabilidad definida:** Cada documento tiene propietario asignado.
- **Revisión obligatoria:** Los cambios requieren revisión formal.
- **Mejora continua:** Los documentos evolucionan con el framework.
- **Un único propósito por documento.**
- **Ausencia de duplicidad documental.**
- **Trazabilidad entre documentos.**

### 10.4 Roles y responsabilidades documentales

| **Rol** | **Responsabilidades** |
|---------|----------------------|
| Propietario del documento | Mantener el contenido y aprobar cambios sustanciales. |
| Autor | Elaborar y actualizar el documento según necesidades. |
| Revisor técnico | Verificar exactitud, coherencia y validez técnica. |
| Revisor editorial | Validar formato, lenguaje, gramática y estructura. |
| Aprobador | Autorizar la publicación oficial del documento. |
| Chat 00 - Gestión | Coordinar la actualización documental en el proyecto. |

### 10.5 Ciclo de vida documental

1. **Solicitud de creación:** Identificación de la necesidad.
2. **Elaboración:** Redacción del contenido inicial.
3. **Revisión técnica:** Verificación de la exactitud.
4. **Revisión editorial:** Validación de formato y estilo.
5. **Aprobación:** Autorización formal.
6. **Publicación:** Liberación del documento.
7. **Mantenimiento:** Actualizaciones periódicas.
8. **Archivado o retiro:** Documentos obsoletos se conservan como históricos.

### 10.6 Gestión de cambios

Todo cambio deberá registrar:

- **Identificador:** Código único del cambio.
- **Fecha:** Cuándo se realizó la modificación.
- **Autor:** Quién realizó el cambio.
- **Motivo:** Razón del cambio.
- **Impacto:** Consecuencias del cambio.
- **Versión afectada:** Documento y versión modificados.
- **Resultado de la revisión:** Validación obtenida.

### 10.7 Trazabilidad

Cada documento deberá mantener relación con:

- Requisitos del proyecto.
- Fases del ciclo de vida.
- Plantilla correspondiente.
- Historial de versiones.
- Evidencias asociadas.
- Decisiones técnicas (ADRs).

### 10.8 Auditoría documental

Las auditorías verificarán:

- Integridad del contenido documental.
- Consistencia entre documentos.
- Cumplimiento metodológico.
- Referencias cruzadas válidas.
- Versionado correcto de los documentos.
- Ausencia de contenido obsoleto.

### 10.9 Políticas de publicación

- Solo documentos aprobados podrán publicarse oficialmente.
- Cada publicación deberá actualizar los archivos VERSION y CHANGELOG.
- Los documentos obsoletos deberán conservarse únicamente con fines históricos.

---

## 11. Gestión del proyecto

### 11.1 Objetivo

Establecer el modelo de gestión de proyectos de la Metodología del Proyecto Profesional para asegurar una planificación, ejecución, seguimiento y cierre controlados, con trazabilidad completa de los entregables.

### 11.2 Alcance

Aplica a todos los proyectos desarrollados bajo esta metodología, independientemente de su tamaño o tecnología.

### 11.3 Gestión de requisitos

#### 11.3.1 Captura

- **Identificación de necesidades:** Detección de requerimientos del negocio.
- **Registro de requisitos:** Documentación de requisitos funcionales y no funcionales.
- **Priorización:** Clasificación según importancia y urgencia.

#### 11.3.2 Trazabilidad

Cada requisito deberá tener:

- **Identificador único:** Código que lo distingue.
- **Descripción:** Definición clara del requisito.
- **Prioridad:** Nivel de importancia.
- **Estado:** Situación actual (pendiente, en desarrollo, completado).
- **Responsable:** Persona asignada.
- **Evidencia de validación:** Pruebas que confirman su cumplimiento.

### 11.4 Planificación

Todo proyecto deberá definir:

- **Objetivos:** Metas a alcanzar.
- **Alcance:** Límites del proyecto.
- **Cronograma:** Plazos y fechas clave.
- **Entregables:** Productos y resultados esperados.
- **Recursos:** Personal, herramientas y presupuesto.
- **Riesgos:** Posibles amenazas al éxito.
- **Criterios de aceptación:** Condiciones para aprobar los entregables.

### 11.5 Gestión de iteraciones

Cada iteración incluirá:

- **Objetivo:** Propósito de la iteración.
- **Actividades:** Tareas a realizar.
- **Duración:** Tiempo estimado.
- **Responsables:** Equipo asignado.
- **Riesgos:** Posibles problemas.
- **Resultados:** Logros obtenidos.
- **Lecciones aprendidas:** Aprendizajes para futuras iteraciones.

### 11.6 Gestión de riesgos

Cada riesgo registrará:

- **ID:** Identificador único.
- **Descripción:** Naturaleza del riesgo.
- **Probabilidad:** Posibilidad de ocurrencia (baja, media, alta).
- **Impacto:** Consecuencia si ocurre (bajo, medio, alto).
- **Nivel de riesgo:** Combinación de probabilidad e impacto.
- **Estrategia de respuesta:** Plan para mitigar o evitar.
- **Responsable:** Persona encargada del seguimiento.
- **Estado:** Situación actual del riesgo.

### 11.7 Gestión de tareas

Las tareas deberán contener:

- **Código:** Identificador único.
- **Descripción:** Definición de la tarea.
- **Prioridad:** Nivel de urgencia.
- **Responsable:** Persona asignada.
- **Fecha de inicio:** Cuándo comienza.
- **Fecha objetivo:** Plazo límite.
- **Estado:** Situación actual (pendiente, en curso, completada).
- **Dependencias:** Tareas que deben completarse previamente.

### 11.8 Architectural Decision Records (ADR)

Las decisiones relevantes deberán documentarse indicando:

- **Contexto:** Situación que motiva la decisión.
- **Problema:** Cuestión a resolver.
- **Alternativas evaluadas:** Opciones consideradas.
- **Decisión adoptada:** Opción seleccionada.
- **Justificación:** Razones de la elección.
- **Consecuencias:** Efectos de la decisión.

Todas las ADR se registrarán en **DECISIONS.md**, manteniéndose alineadas con 
**ARCHITECTURE.md**(definido en la [sección 12.3](#123-diseño-de-arquitectura)).

### 11.9 Seguimiento y métricas

Indicadores mínimos:

- Avance del proyecto.
- Cumplimiento del cronograma.
- Requisitos completados.
- Riesgos abiertos.
- Incidencias registradas.
- Calidad documental.

### 11.10 Cierre del proyecto

Antes del cierre deberá verificarse:

- Entregables completos y aprobados.
- Documentación actualizada y completa.
- Evidencias archivadas y accesibles.
- Versionado final asignado.
- Aprobación formal del patrocinador o cliente.

### 11.11 Gestión del proyecto con ChatGPT Projects

El Chat **00 – Gestión del Proyecto** constituye el centro de coordinación metodológica y será el único punto de entrada.

#### Responsabilidades del Chat 00

- Coordinar la planificación del proyecto.
- Supervisar el avance del ciclo de vida.
- Validar el cumplimiento de la metodología.
- Priorizar tareas e iteraciones.
- Coordinar la comunicación entre chats especializados.
- Autorizar el paso entre fases.
- Verificar la sincronización documental.
- Gestionar riesgos generales del proyecto.
- Preparar el cierre de cada versión.

#### Gestión Documental del Chat 00

El Chat 00 coordinará la actualización de los siguientes documentos:

- REQUIREMENTS.md
- ROADMAP.md
- ITERATIONS.md
- PROJECT_STATUS.md
- TODO.md
- RISKS.md

#### Coordinación entre Chats

Cada chat especializado mantendrá su autonomía técnica, pero toda decisión que implique cambios metodológicos, de planificación o de alcance deberá canalizarse mediante el Chat 00.

El Chat 00 no sustituye a los chats especializados; actúa como coordinador del proyecto.

---

## 12. Arquitectura y desarrollo

### 12.1 Objetivo

Definir los lineamientos de arquitectura y desarrollo de software para todos los proyectos que utilicen la Metodología del Proyecto Profesional, promoviendo consistencia, mantenibilidad, escalabilidad y trazabilidad técnica, con especial énfasis en la organización mediante ChatGPT Projects.

### 12.2 Principios de arquitectura

- **Arquitectura antes de la implementación:** El diseño precede al código.
- **Separación de responsabilidades:** Cada componente tiene un propósito claro.
- **Modularidad:** Componentes independientes y reutilizables.
- **Reutilización:** Aprovechamiento de componentes existentes.
- **Escalabilidad:** Capacidad de crecimiento controlado.
- **Seguridad por diseño:** La seguridad se incorpora desde el inicio.
- **Documentación permanente:** La arquitectura se documenta y mantiene.

### 12.3 Diseño de arquitectura

Antes del desarrollo deberá definirse:

- **Objetivos técnicos:** Metas de la solución.
- **Requisitos funcionales:** Comportamiento esperado.
- **Requisitos no funcionales:** Rendimiento, seguridad, escalabilidad.
- **Arquitectura lógica:** Estructura conceptual.
- **Arquitectura física:** Despliegue e infraestructura.
- **Componentes:** Módulos y subsistemas.
- **Dependencias:** Relaciones entre componentes.
- **Interfaces:** Puntos de comunicación.
- **Riesgos técnicos:** Posibles problemas de implementación.

### 12.4 Organización del proyecto

Se recomienda una estructura organizada por responsabilidades:

- **Documentación:** Manuales, guías y especificaciones.
- **Código fuente:** Archivos de implementación.
- **Configuración:** Parámetros y variables de entorno.
- **Recursos:** Assets, imágenes y archivos estáticos.
- **Pruebas:** Casos de prueba y scripts.
- **Scripts:** Automatización y utilidades.
- **Automatización:** Pipelines de integración.

Cada proyecto podrá especializar esta estructura según sus necesidades.

### 12.5 Estándares de desarrollo

Todo desarrollo deberá cumplir con:

- **Convenciones de nombres:** Nomenclatura consistente y descriptiva.
- **Código legible:** Claridad y organización del código.
- **Comentarios:** Únicamente cuando aporten valor y no sean redundantes.
- **Manejo adecuado de errores:** Gestión de excepciones controlada.
- **Eliminación de código obsoleto:** Limpieza de código no utilizado.
- **Revisión antes de integrar cambios:** Validación mediante revisión de código.

### 12.6 Control de versiones

La gestión del código deberá incluir:

- **Uso de Git:** Sistema de control de versiones estándar.
- **Commits descriptivos:** Mensajes claros y significativos.
- **Ramas para nuevas funcionalidades:** Aislamiento de cambios.
- **Integración mediante revisión:** Pull requests y revisiones.
- **Etiquetado de versiones:** Tags para releases.
- **Historial completo de cambios:** Trazabilidad de todas las modificaciones.

### 12.7 Integración con GitHub

El repositorio deberá mantener:

- **Estructura organizada:** Directorios y archivos ordenados.
- **Documentación sincronizada:** Manuales alineados con el código.
- **Historial de versiones:** Registro completo de cambios.
- **Releases cuando corresponda:** Publicaciones oficiales.
- **Gestión de incidencias y mejoras:** Issues y pull requests.

### 12.8 Configuración y uso de ChatGPT Projects

Todo proyecto desarrollado bajo esta metodología deberá gestionarse mediante **ChatGPT Projects**, utilizándolo como el entorno central para la coordinación, planificación y seguimiento del ciclo de vida del proyecto.

#### Fuentes del Proyecto

Cada ChatGPT Project deberá incorporar, como mínimo, las siguientes **Fuentes del Proyecto**:

- Manual_Metodologico_Proyecto_Profesional.md
- Plantilla_Proyecto_Profesional.md

Estos documentos constituyen la base metodológica del proyecto y deberán permanecer sincronizados durante toda su evolución.
12.8 - Ruta de prompts
#### Configuración de Chats

La configuración inicial de los chats especializados estará definida por la colección 
oficial de prompts ubicada en:
templates/
└── chat_prompts/
Cada chat especializado deberá inicializarse utilizando exclusivamente su Prompt Oficial correspondiente.

#### Contexto Compartido

El proyecto utilizará un único contexto metodológico compartido entre todos los chats, garantizando coherencia en las decisiones y evitando contradicciones durante el desarrollo.

### 12.9 Organización de Chats Especializados

La metodología divide las responsabilidades del proyecto en chats especializados.

Cada chat posee una responsabilidad principal claramente definida y deberá limitar su actuación al ámbito que le corresponde.

| **Chat** | **Responsabilidad Principal** |
|----------|-------------------------------|
| **00 – Gestión del Proyecto** | Dirección, coordinación, planificación y seguimiento del proyecto. |
| **01 – Arquitectura** | Diseño de arquitectura y decisiones técnicas (ADR). |
| **02 – Desarrollo** | Implementación del software. |
| **03 – Pruebas** | Planificación, ejecución y validación de pruebas. |
| **04 – Documentación** | Revisión y mantenimiento de la documentación del proyecto. |
| **05 – Git y GitHub** | Gestión del repositorio, control de versiones y publicaciones. |

### 12.10 Principios de actuación de los chats

Todos los chats deberán respetar los siguientes principios:

- **Especialización funcional:** Cada chat tiene un ámbito claramente definido.
- **Responsabilidad claramente delimitada:** No se solapan funciones.
- **Coordinación a través del Chat 00:** El Chat 00 es el punto de entrada.
- **Ausencia de duplicidad de funciones:** No se repite trabajo entre chats.
- **Trazabilidad documental:** Todo cambio queda registrado.

El Chat **00 – Gestión del Proyecto** actuará como coordinador general y será el único punto de entrada.

Cuando un chat detecte que una tarea pertenece a otro ámbito funcional, deberá derivarla al chat correspondiente.

### 12.11 Calidad del desarrollo

Antes de aceptar una implementación deberá verificarse:

- Cumplimiento de requisitos especificados.
- Revisión técnica aprobada.
- Compilación o ejecución satisfactoria.
- Documentación actualizada.
- Ausencia de errores conocidos de alta prioridad.

---

## 13. Calidad y pruebas

### 13.1 Objetivo

Definir el modelo de aseguramiento de la calidad y la estrategia de pruebas para garantizar que los proyectos desarrollados con la Metodología del Proyecto Profesional cumplan los requisitos funcionales, técnicos y documentales antes de su liberación.

### 13.2 Alcance

Este capítulo aplica a todas las actividades de validación, verificación y control de calidad durante el ciclo de vida del proyecto.

### 13.3 Principios de calidad

- **Calidad integrada desde el inicio:** La calidad se incorpora en todas las fases.
- **Prevención antes que corrección:** Se anticipan los problemas.
- **Evidencias verificables:** Todo se documenta y prueba.
- **Trazabilidad entre requisitos y pruebas:** Cada requisito tiene pruebas asociadas.
- **Mejora continua:** Aprendizaje y optimización constante.

### 13.4 Estrategia de pruebas

#### 13.4.1 Planificación

- Definir el alcance de las pruebas.
- Identificar los riesgos a mitigar.
- Establecer criterios de aceptación.
- Asignar recursos y herramientas.

#### 13.4.2 Ejecución

- Registrar resultados de cada prueba.
- Documentar incidencias encontradas.
- Verificar las correcciones aplicadas.
- Mantener trazabilidad de pruebas.

#### 13.4.3 Cierre

- Consolidar todas las evidencias.
- Emitir informe de resultados.
- Obtener aprobaciones finales.

### 13.5 Tipos de pruebas

- **Unitarias:** Verificación de componentes individuales.
- **Integración:** Comprobación de interacciones entre módulos.
- **Sistema:** Evaluación del sistema completo.
- **Aceptación:** Validación por parte del usuario.
- **Regresión:** Verificación de que cambios no afectan funcionalidades existentes.
- **Rendimiento:** Evaluación de velocidad y capacidad (cuando aplique).
- **Seguridad:** Verificación de vulnerabilidades (cuando aplique).

### 13.6 Gestión de incidencias

Cada incidencia deberá registrar:

- **Identificador:** Código único.
- **Descripción:** Explicación clara del problema.
- **Severidad:** Nivel de criticidad.
- **Prioridad:** Urgencia de resolución.
- **Responsable:** Persona asignada.
- **Estado:** Situación actual.
- **Evidencia de resolución:** Pruebas de corrección.

### 13.7 Evidencias

Como mínimo deberán conservarse:

- **Casos de prueba:** Documentación de pruebas planificadas.
- **Resultados:** Registros de ejecución de pruebas.
- **Capturas o registros:** Evidencias visuales o logs.
- **Historial de incidencias:** Registro completo de problemas.
- **Aprobaciones finales:** Validaciones obtenidas.

### 13.8 Métricas de calidad

Indicadores mínimos:

- **Cobertura de requisitos:** Porcentaje de requisitos probados.
- **Casos de prueba ejecutados:** Total de pruebas realizadas.
- **Casos aprobados:** Porcentaje de pruebas exitosas.
- **Incidencias abiertas:** Problemas pendientes de resolver.
- **Incidencias críticas:** Problemas de alta severidad.
- **Tiempo medio de resolución:** Velocidad de corrección.

### 13.9 Criterios de aceptación

Un entregable podrá aprobarse únicamente cuando:

- Todos los requisitos críticos estén validados.
- No existan incidencias críticas abiertas.
- La documentación esté actualizada y completa.
- Las evidencias estén disponibles y accesibles.
- Se obtenga la aprobación del responsable correspondiente.
- Las pruebas ejecutadas satisfactoriamente.
- El estado del proyecto esté actualizado en PROJECT_STATUS.md.

### 13.10 Mejora continua

Los resultados de las pruebas deberán utilizarse para:

- Identificar oportunidades de mejora en la metodología.
- Optimizar los procesos de desarrollo.
- Actualizar la documentación cuando sea necesario.
- Prevenir problemas en futuros proyectos.

---

## 14. Versionado y entregables

### 14.1 Objetivo

Definir las normas de versionado, gestión de entregables y publicación para asegurar la trazabilidad, reproducibilidad y control de las versiones del framework y de los proyectos desarrollados con la metodología.

### 14.2 Alcance

Aplica a documentos, código fuente, plantillas, artefactos, paquetes y cualquier otro entregable oficial del proyecto.

### 14.3 Política de versionado

Se adopta Semantic Versioning (SemVer) con el formato **MAYOR.MENOR.PARCHE**:

- **MAYOR:** Se incrementa cuando se realizan cambios incompatibles con versiones anteriores.
- **MENOR:** Se incrementa cuando se añade funcionalidad nueva de forma compatible con versiones anteriores.
- **PARCHE:** Se incrementa cuando se realizan correcciones de errores compatibles.

**Formato:** MAJOR.MINOR.PATCH

### 14.4 Gestión de versiones

Cada versión deberá registrar:

- **Identificador:** Número de versión.
- **Fecha:** Fecha de publicación.
- **Responsable:** Persona que gestiona la versión.
- **Descripción:** Resumen de cambios.
- **Impacto:** Efectos de la versión.
- **Estado:** Situación actual (desarrollo, publicada, obsoleta).
- **Evidencias:** Registros de validación.

### 14.5 Gestión de entregables

Todo entregable deberá incluir:

- **Nombre:** Identificación del entregable.
- **Versión:** Número de versión.
- **Descripción:** Contenido y propósito.
- **Ubicación:** Dónde se encuentra almacenado.
- **Responsable:** Persona a cargo.
- **Fecha de publicación:** Cuándo fue liberado.
- **Estado de aprobación:** Validación obtenida.

### 14.6 Flujo Git y GitHub

El control de versiones constituye la etapa final de cada iteración del proyecto.

Ningún cambio debe registrarse en el repositorio sin haber completado previamente el flujo metodológico.

**El flujo oficial será:**
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


#### Validaciones previas al Commit

Antes de realizar un commit deberán verificarse, como mínimo, los siguientes aspectos:

- Desarrollo finalizado.
- Pruebas ejecutadas satisfactoriamente.
- Documentación sincronizada.
- PROJECT_STATUS.md actualizado.
- TODO.md actualizado.
- VERSION.md actualizada.
- CHANGELOG.md actualizado.

#### Publicación

Cada nueva versión debe representar un estado estable del proyecto.

No deberán publicarse versiones con:

- Documentación desactualizada.
- Pruebas pendientes.
- Arquitectura inconsistente.
- Tareas incompletas declaradas como finalizadas.

El historial Git deberá reflejar fielmente la evolución del proyecto y mantener una trazabilidad completa entre código, documentación y versiones.

### 14.7 Publicación

Antes de publicar una versión deberá verificarse:

- Documentación completa y actualizada.
- Validaciones aprobadas y documentadas.
- Control de calidad final superado.
- Actualización del archivo VERSION con el nuevo número.
- Actualización del CHANGELOG con los cambios realizados.
- PROJECT_STATUS.md actualizado.
- TODO.md actualizado.
- TEST_PLAN.md actualizado.

### 14.8 Historial de cambios

Cada versión deberá mantener un CHANGELOG con:

- **Funcionalidades nuevas:** Añadidos en esta versión.
- **Mejoras:** Optimizaciones y refinamientos.
- **Correcciones:** Errores solucionados.
- **Cambios incompatibles:** Modificaciones que rompen compatibilidad.
- **Observaciones relevantes:** Notas adicionales importantes.

### 14.9 Distribución

Los entregables oficiales podrán distribuirse mediante:

- **Repositorio Git:** Control de versiones centralizado.
- **GitHub:** Plataforma de colaboración.
- **Paquetes comprimidos:** Archivos ZIP para distribución.
- **Documentación publicada:** Manuales y guías en formato accesible.

### 14.10 Conservación y trazabilidad

Todas las versiones deberán permanecer identificables y recuperables, manteniendo la relación entre:

- Entregables.
- Documentación asociada.
- Código fuente.
- Evidencias y registros.

---

## 15. Buenas prácticas

### 15.1 Objetivo

Definir las buenas prácticas, recomendaciones operativas y listas de verificación que deberán aplicarse durante todo el ciclo de vida de los proyectos para asegurar calidad, consistencia y mejora continua.

### 15.2 Alcance

Estas directrices aplican a la planificación, análisis, diseño, desarrollo, pruebas, documentación, publicación y mantenimiento de los proyectos.

### 15.3 Buenas prácticas generales

#### Organización

- Mantener una única fuente de información.
- Evitar duplicidad documental.
- Mantener una estructura homogénea entre proyectos.
- Conservar la trazabilidad documental.

#### Desarrollo

- Planificar antes de implementar cualquier solución.
- Diseñar antes de implementar.
- Desarrollar mediante iteraciones pequeñas.
- Mantener la documentación sincronizada con el desarrollo del proyecto.
- Utilizar control de versiones de forma disciplinada y consistente.
- Revisar el trabajo antes de integrarlo al repositorio principal.
- Priorizar soluciones simples y mantenibles.
- Registrar las decisiones relevantes mediante ADR.
- Realizar pruebas frecuentes.
- Evitar cambios sin justificación.

#### Documentación

- Actualizar la documentación durante el desarrollo.
- Registrar todas las decisiones relevantes.
- Mantener sincronizados documentación y código.

#### Coordinación

- Utilizar el Chat 00 como punto único de coordinación.
- Respetar las responsabilidades de cada chat especializado.
- Evitar mezclar funciones entre chats.

#### Calidad

- Validar antes de publicar.
- Mantener consistencia metodológica.
- Mejorar continuamente la metodología cuando sea necesario.

### 15.4 Antipatrones a evitar

- Documentación desactualizada respecto al código o la implementación.
- Cambios sin registro ni justificación documentada.
- Código duplicado sin justificación técnica clara.
- Publicaciones sin validación previa y aprobación.
- Cierre de fases con tareas pendientes o entregables incompletos.
- Eliminación de historial o evidencias de trabajo realizado.
- Mezclar responsabilidades entre chats especializados.
- Realizar cambios sin coordinación con el Chat 00.

### 15.5 Checklist de inicio

- [ ] Objetivos del proyecto definidos y aprobados.
- [ ] Alcance aprobado por los stakeholders.
- [ ] Requisitos identificados y priorizados.
- [ ] Arquitectura inicial documentada.
- [ ] Repositorio configurado y accesible.
- [ ] Estructura documental creada.
- [ ] Proyecto creado en ChatGPT.
- [ ] Manual Metodológico incorporado como Fuente del Proyecto.
- [ ] Plantilla Profesional incorporada como Fuente del Proyecto.
- [ ] Chats oficiales creados.
- [ ] Prompts inicializados.
- [ ] REQUIREMENTS.md preparado.
- [ ] ROADMAP.md definido.
- [ ] Primera iteración registrada.
- [ ] Riesgos iniciales identificados.

### 15.6 Checklist de desarrollo

- [ ] Requisitos implementados según especificación.
- [ ] Estándares de codificación aplicados.
- [ ] Documentación actualizada con los cambios.
- [ ] Cambios versionados con commits descriptivos.
- [ ] Revisión técnica realizada y aprobada.

### 15.7 Checklist de pruebas

- [ ] Casos de prueba ejecutados.
- [ ] Incidencias registradas y documentadas.
- [ ] Correcciones verificadas y aprobadas.
- [ ] Evidencias archivadas y accesibles.
- [ ] Criterios de aceptación cumplidos.

### 15.8 Checklist de publicación

- [ ] Documentación completa y actualizada.
- [ ] Archivo VERSION actualizado.
- [ ] CHANGELOG actualizado con todos los cambios.
- [ ] Entregables validados y probados.
- [ ] Aprobación formal obtenida.
- [ ] Desarrollo finalizado.
- [ ] Arquitectura actualizada.
- [ ] Decisiones técnicas registradas.
- [ ] Pruebas aprobadas.
- [ ] PROJECT_STATUS.md actualizado.
- [ ] TODO.md actualizado.
- [ ] TEST_PLAN.md actualizado.
- [ ] Commit preparado.
- [ ] Push realizado.
- [ ] Etiqueta de versión creada.

### 15.9 Mejora continua

Al finalizar cada iteración o proyecto deberán registrarse:

- **Lecciones aprendidas:** Qué funcionó y qué no.
- **Oportunidades de mejora:** Áreas de optimización identificadas.
- **Riesgos identificados:** Problemas potenciales para futuros proyectos.
- **Acciones preventivas:** Medidas para evitar problemas recurrentes.

Toda mejora metodológica deberá:

1. Analizarse.
2. Documentarse.
3. Validarse.
4. Incorporarse primero al Manual_Metodologico_Proyecto_Profesional.md.
5. Actualizar posteriormente la Plantilla_Proyecto_Profesional.md.
6. Aplicarse únicamente a nuevos proyectos o mediante una migración controlada.

---

## 16. Integración y publicación

### 16.1 Objetivo

Definir el proceso de integración de los contenidos del Manual, la auditoría editorial previa a su publicación y las actividades necesarias para emitir una versión oficial consistente, completa y trazable.

### 16.2 Alcance

Este capítulo aplica a la consolidación del Manual Metodológico del Proyecto Profesional y a la verificación final de todos los documentos metodológicos asociados.

### 16.3 Integración documental

La integración deberá:

- Consolidar todas las subfases en un único documento.
- Eliminar duplicidades y redundancias.
- Mantener una estructura homogénea y coherente.
- Verificar enlaces y referencias cruzadas.
- Unificar la terminología utilizada en todo el documento.
- Asegurar una numeración continua y consistente.

### 16.4 Auditoría editorial

La revisión editorial verificará:

- Ortografía y gramática correctas.
- Coherencia terminológica en todo el documento.
- Formato uniforme y consistente.
- Numeración correcta de encabezados y secciones.
- Índice actualizado y completo.
- Tablas y listas consistentes y bien formateadas.
- Referencias internas válidas y funcionales.

### 16.5 Auditoría metodológica

Se comprobará que:

- Todos los capítulos definidos en la estructura estén presentes.
- No existan secciones pendientes o incompletas.
- Los criterios de aceptación de cada capítulo estén cumplidos.
- El Manual sea coherente con la Plantilla y los documentos de gobernanza.
- La metodología descrita sea aplicable y práctica.
- La información de ChatGPT Projects y chats especializados esté correctamente integrada.

### 16.6 Validación final

Antes de la publicación deberá confirmarse:

- Integridad del documento completo.
- Consistencia del contenido en todas sus secciones.
- Actualización del historial de versiones.
- Aprobación del responsable metodológico.

### 16.7 Publicación

La publicación oficial incluirá:

- **Manual Metodológico del Proyecto Profesional.md:** Documento principal.
- **VERSION.md:** Archivo actualizado con la nueva versión.
- **CHANGELOG_METODOLOGIA.md:** Historial de cambios actualizado.
- **Documentación complementaria:** Material adicional correspondiente.

### 16.8 Registro de publicación

La versión 3.0.0 del Manual se publica tras completar:

- Integración de las Subfases 2.1 a 2.10.
- Auditoría editorial y metodológica superada.
- Cumplimiento de todos los criterios de aceptación.
- Aprobación final del responsable metodológico.
- Consolidación con el contenido operativo del Manual 2.0.0.

> **Nota histórica:** Este proceso corresponde al cierre de la Fase 2 del desarrollo del framework.

### 16.9 Entregables

Los entregables de esta fase son:

- **Manual consolidado:** Versión final integrada.
- **Informe de auditoría:** Registro de las verificaciones realizadas.
- **Registro de validación:** Evidencias de aprobación.
- **Historial de versiones actualizado:** Documento de control de cambios.

---

## 17. Anexos

### 17.1 Criterios de aceptación históricos

Los siguientes criterios corresponden a las subfases que dieron origen a los capítulos de este Manual. Se conservan como registro histórico del proceso de desarrollo de la metodología.

#### Capítulo 8 – Fundamentos metodológicos

Este capítulo queda completo cuando los fundamentos metodológicos sirven como base normativa para todas las fases restantes del framework y pueden integrarse sin modificaciones al Manual definitivo.

#### Capítulo 9 – Ciclo de vida

Este capítulo queda aprobado cuando el ciclo de vida, los flujos de trabajo y los criterios de transición son suficientes para dirigir de forma consistente cualquier proyecto basado en la metodología y pueden integrarse sin modificaciones al Manual definitivo.

#### Capítulo 10 – Gobernanza documental

Este capítulo queda aprobado cuando el proceso de gobierno documental permite administrar el ciclo de vida completo de la documentación del framework de forma controlada, auditable y repetible, quedando lista para integrarse al Manual definitivo.

#### Capítulo 11 – Gestión del proyecto

Este capítulo queda aprobado cuando el proceso de gestión del proyecto define de forma completa la administración de requisitos, planificación, iteraciones, riesgos, tareas, decisiones arquitectónicas, seguimiento y cierre, permitiendo su integración directa en el Manual definitivo.

#### Capítulo 12 – Arquitectura y desarrollo

Este capítulo queda aprobado cuando define una guía técnica consistente para la arquitectura, organización del proyecto, desarrollo, control de versiones e integración con Git y GitHub, permitiendo su incorporación directa al Manual definitivo.

#### Capítulo 13 – Calidad y pruebas

Este capítulo queda aprobado cuando establece un proceso completo, repetible y auditable para la gestión de la calidad y las pruebas, permitiendo su integración directa en el Manual definitivo.

#### Capítulo 14 – Versionado y entregables

Este capítulo queda aprobado cuando el proceso de versionado y gestión de entregables garantiza el control completo de publicaciones, cambios e historial, permitiendo su integración directa en el Manual definitivo.

#### Capítulo 15 – Buenas prácticas

Este capítulo queda aprobado cuando proporciona un conjunto reutilizable de buenas prácticas y listas de verificación que permitan ejecutar proyectos de forma uniforme y auditable, quedando lista para su integración en el Manual definitivo.

#### Capítulo 16 – Integración y publicación

Este capítulo queda aprobado cuando el proceso de integración, auditoría y publicación garantiza que el Manual metodológico puede emitirse como documento oficial de la versión 3.0.0 del framework, listo para su uso y mantenimiento.

### 17.2 Tablas auxiliares

#### 17.2.1 Matriz de responsabilidades documentales

| **Actividad** | **Propietario** | **Autor** | **Revisor Técnico** | **Revisor Editorial** | **Aprobador** | **Chat 00** |
|---------------|-----------------|-----------|---------------------|----------------------|---------------|-------------|
| Creación | ✓ | ✓ | | | | ✓ |
| Actualización | ✓ | ✓ | | | | ✓ |
| Revisión técnica | | | ✓ | | | |
| Revisión editorial | | | | ✓ | | |
| Aprobación | ✓ | | | | ✓ | |
| Publicación | ✓ | | | | | ✓ |

#### 17.2.2 Matriz de criterios de transición

| **Fase** | **Entregables** | **Revisión** | **Documentación** | **Aprobación** |
|----------|-----------------|--------------|-------------------|----------------|
| Inicio | Completos | Aprobada | Actualizada | Obtenida |
| Planificación | Completos | Aprobada | Actualizada | Obtenida |
| Análisis | Completos | Aprobada | Actualizada | Obtenida |
| Diseño | Completos | Aprobada | Actualizada | Obtenida |
| Desarrollo | Completos | Aprobada | Actualizada | Obtenida |
| Pruebas | Completos | Aprobada | Actualizada | Obtenida |
| Documentación | Completos | Aprobada | Actualizada | Obtenida |
| Publicación | Completos | Aprobada | Actualizada | Obtenida |

#### 17.2.3 Jerarquía documental del framework

README.md
↓
Manual Metodológico del Proyecto Profesional (Este documento)
↓
Plantilla del Proyecto Profesional
↓
Documentos de Gobernanza
├── VERSION.md
└── CHANGELOG_METODOLOGIA.md
↓
Plantillas específicas
├── Plantilla de Requisitos
├── Plantilla de Pruebas
└── ...
↓
Ejemplos y casos de uso

#### 17.2.4 Mapa de Chats Especializados

Chat 00 – Gestión del Proyecto (Coordinador)
├── Chat 01 – Arquitectura
├── Chat 02 – Desarrollo
├── Chat 03 – Pruebas
├── Chat 04 – Documentación
└── Chat 05 – Git y GitHub


### 17.3 Referencias

- **README.md:** Guía de inicio del repositorio.
- **LICENSE.md:** Licencia del proyecto.
- **governance/VERSION.md:** Control de versiones del framework.
- **governance/CHANGELOG_METODOLOGIA.md:** Historial de cambios de la metodología.
- **Plantilla_Proyecto_Profesional.md:** Plantilla de implementación.
- **Manual_Metodologico_Proyecto_Profesional_v2.0.0.md:** Versión histórica (archivada).

---

**Fin del Manual Metodológico del Proyecto Profesional**

**Versión 3.0.0 - Aprobado y listo para publicación**

**Manual 2.0.0 archivado como versión histórica.**

