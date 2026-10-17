// Formulario de contacto.
// Comprueba los campos y muestra un mensaje de confirmación.
// IMPORTANTE: ahora mismo NO envía los datos a ningún sitio.
// Cuando tengas un servicio de formularios, pon su dirección en ENDPOINT
// y cambia ENVIO_ACTIVO a true. Ver README.md.

var ENDPOINT = '[ENDPOINT]';
var ENVIO_ACTIVO = false;

(function () {
  var form = document.getElementById('form-contacto');
  if (!form) return;

  var confirmacion = document.getElementById('confirmacion');

  function mostrarError(campo, texto) {
    var id = 'error-' + campo.name;
    var error = document.getElementById(id);
    if (!error) {
      error = document.createElement('p');
      error.id = id;
      error.className = 'error';
      campo.closest('.campo, .casilla').appendChild(error);
    }
    error.textContent = texto;
    campo.setAttribute('aria-invalid', 'true');
    campo.setAttribute('aria-describedby', id);
  }

  function limpiarErrores() {
    form.querySelectorAll('.error').forEach(function (e) { e.remove(); });
    form.querySelectorAll('[aria-invalid]').forEach(function (c) {
      c.removeAttribute('aria-invalid');
      c.removeAttribute('aria-describedby');
    });
  }

  function validar() {
    limpiarErrores();
    var ok = true;
    var primero = null;

    function fallo(campo, texto) {
      mostrarError(campo, texto);
      if (!primero) primero = campo;
      ok = false;
    }

    if (!form.nombre.value.trim()) fallo(form.nombre, 'Escribe tu nombre.');
    if (!form.negocio.value.trim()) fallo(form.negocio, 'Escribe el nombre de tu negocio.');
    if (!form.zona.value) fallo(form.zona, 'Elige una zona.');

    var contacto = form.contacto.value.trim();
    var esEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contacto);
    var esTelefono = /^[+\d][\d\s-]{7,}$/.test(contacto);
    if (!contacto) {
      fallo(form.contacto, 'Déjanos un teléfono o un email para poder responderte.');
    } else if (!esEmail && !esTelefono) {
      fallo(form.contacto, 'Revisa el teléfono o el email, parece que falta algo.');
    }

    if (!form.mensaje.value.trim()) fallo(form.mensaje, 'Cuéntanos en pocas palabras qué necesitas.');
    if (!form.privacidad.checked) fallo(form.privacidad, 'Necesitamos que aceptes la política de privacidad.');

    if (primero) primero.focus();
    return ok;
  }

  function mostrarConfirmacion() {
    form.hidden = true;
    confirmacion.hidden = false;
    confirmacion.focus();
  }

  form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    if (!validar()) return;

    if (!ENVIO_ACTIVO) {
      // Modo prueba: no se envía nada.
      mostrarConfirmacion();
      return;
    }

    fetch(ENDPOINT, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    })
      .then(function (respuesta) {
        if (!respuesta.ok) throw new Error('Error de envío');
        mostrarConfirmacion();
      })
      .catch(function () {
        alert('No hemos podido enviar el mensaje. Prueba de nuevo o escríbenos a [EMAIL DE CONTACTO].');
      });
  });
})();
