# TEST_PLAN - Plan de Pruebas

**Versión:** 0.1.0

**Última actualización:** 04-08-2026

---

## 1. Objetivo

Definir el plan de pruebas para PaginaWebTest, incluyendo casos de prueba, criterios de aceptación y cobertura.

---

## 2. Alcance de Pruebas

| **Componente** | **Alcance** | **Responsable** |
|----------------|-------------|-----------------|
| Frontend | Verificar funcionalidad y diseño | Chat 03 |
| Responsive | Verificar adaptación a dispositivos | Chat 03 |

---

## 3. Casos de Prueba

| **ID** | **Requisito** | **Descripción** | **Pasos** | **Resultado Esperado** | **Estado** |
|--------|---------------|-----------------|-----------|----------------------|------------|
| TC-001 | RF-001 | Carga de página principal | Abrir index.html | La página se muestra correctamente | ✅ Aprobado |
| TC-002 | RF-002 | Navegación entre secciones | Hacer clic en los enlaces del menú | Cada sección se carga correctamente | ✅ Aprobado |
| TC-003 | RF-003 | Adaptación a dispositivos móviles | Redimensionar ventana | El diseño se adapta correctamente | ✅ Aprobado |
| TC-004 | RF-004 | Botón de saludo interactivo | Hacer clic en el botón | Aparece mensaje de bienvenida | ✅ Aprobado |
| TC-005 | RF-004 | Formulario de contacto válido | Llenar todos los campos y enviar | Mensaje de éxito con el nombre | ✅ Aprobado |
| TC-006 | RF-004 | Formulario de contacto inválido | Enviar sin llenar campos | Mensaje de error | ✅ Aprobado |

---

## 4. Criterios de Aceptación

| **ID** | **Criterio** | **Verificación** | **Estado** |
|--------|--------------|------------------|------------|
| CA-001 | La página carga en menos de 3 segundos | Medir tiempo de carga | ✅ Aprobado |
| CA-002 | Diseño responsive funcional | Probar en diferentes tamaños | ✅ Aprobado |
| CA-003 | Formulario valida campos vacíos | Intentar enviar sin datos | ✅ Aprobado |

---

## 5. Evidencias

| **ID** | **Prueba** | **Evidencia** | **Ubicación** |
|--------|------------|---------------|---------------|
| TC-001 | Carga de página | Captura de pantalla | `docs/evidencias/01_pagina_principal.png` |
| TC-002 | Navegación | Captura de pantalla | `docs/evidencias/02_navegacion.png` |
| TC-003 | Responsive | Captura de pantalla | `docs/evidencias/03_responsive.png` |
| TC-004 | Botón de saludo | Captura de pantalla | `docs/evidencias/04_boton_saludo.png` |
| TC-005 | Formulario éxito | Captura de pantalla | `docs/evidencias/05_formulario_exito.png` |
| TC-006 | Formulario error | Captura de pantalla | `docs/evidencias/06_formulario_error.png` |

---

## 6. Cobertura de Pruebas

| **Requisito** | **Casos de Prueba** | **Cobertura** |
|---------------|---------------------|---------------|
| RF-001 | TC-001 | ✅ Completado |
| RF-002 | TC-002 | ✅ Completado |
| RF-003 | TC-003 | ✅ Completado |
| RF-004 | TC-004, TC-005, TC-006 | ✅ Completado |

---

## 7. Resumen de Pruebas

| **Estado** | **Casos de Prueba** | **Porcentaje** |
|------------|---------------------|----------------|
| Aprobados | 6 | 100% |
| Fallidos | 0 | 0% |
| Pendientes | 0 | 0% |
| **Total** | **6** | **100%** |

---

## 8. Conclusiones

Todas las pruebas han sido ejecutadas y aprobadas exitosamente. La página web funciona correctamente en todos los aspectos probados:

- ✅ Carga correcta de la página
- ✅ Navegación funcional
- ✅ Diseño responsive
- ✅ Interactividad (botón de saludo)
- ✅ Formulario con validación
- ✅ Tiempo de carga aceptable

---

**Fecha de ejecución:** 04-08-2026

**Responsable:** Chat 03 - Pruebas

**Versión 0.1.0 - Pruebas completadas exitosamente**