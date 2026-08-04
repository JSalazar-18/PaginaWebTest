// ============================================================
// SALUDO INTERACTIVO
// ============================================================
const btnSaludo = document.getElementById('btnSaludo');
const mensajeSaludo = document.getElementById('mensajeSaludo');

btnSaludo.addEventListener('click', function() {
    mensajeSaludo.textContent = '¡Hola! 👋 Bienvenido a PaginaWebTest. Este proyecto sigue la Metodología del Proyecto Profesional v3.0.0.';
    mensajeSaludo.style.color = '#1abc9c';
});

// ============================================================
// FORMULARIO DE CONTACTO
// ============================================================
const formulario = document.getElementById('formularioContacto');
const mensajeFormulario = document.getElementById('mensajeFormulario');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre && email && mensaje) {
        mensajeFormulario.textContent = `✅ Gracias ${nombre}, tu mensaje ha sido enviado correctamente. Te contactaremos pronto.`;
        mensajeFormulario.style.color = 'green';
        formulario.reset();
    } else {
        mensajeFormulario.textContent = '❌ Por favor, completa todos los campos del formulario.';
        mensajeFormulario.style.color = 'red';
    }
});

// ============================================================
// MENSAJE DE BIENVENIDA EN CONSOLA (para desarrolladores)
// ============================================================
console.log('✅ PaginaWebTest - Versión 0.1.0');
console.log('📁 Estructura alineada con el Manual Metodológico v3.0.0');