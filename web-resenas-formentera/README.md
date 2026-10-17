# [NOMBRE DEL SERVICIO]: web y kit de marketing

Web y materiales para un servicio de gestión del perfil de Google y de las reseñas para negocios locales de Formentera.

## Qué hay en cada carpeta

| Carpeta | Qué contiene | ¿Se publica? |
|---|---|---|
| `web/` | La web: páginas HTML, estilos, scripts, sitemap y robots.txt | **Sí**, solo esta carpeta |
| `marketing/` | Textos para captar clientes: correos, WhatsApp, guion, objeciones, calendario | No, es material interno |
| `plantillas/` | Plantillas del trabajo mensual con cada cliente | No, es material interno |

Para ver la web en tu ordenador, abre `web/index.html` con doble clic en el navegador.

---

## Cómo encontrar todo lo que falta por rellenar

Busca estas marcas en todos los archivos. En VS Code o en otro editor: "Buscar en archivos", `Ctrl+Shift+F` o `Cmd+Shift+F`.

| Marca | Qué significa |
|---|---|
| `[NOMBRE DEL SERVICIO]` | El nombre de la marca. Cámbialo en todos los archivos a la vez con "Reemplazar en archivos". |
| `[DOMINIO]` | Tu dominio, por ejemplo `midominio.es`, sin `https://`. Aparece en las páginas, en `sitemap.xml` y en `robots.txt`. |
| `[X €]` | Precios pendientes. |
| `[REVISAR]` | Texto provisional que tienes que decidir o validar (precios, condiciones, textos legales). |
| `[PENDIENTE DE VERIFICAR]` | Dato que no se ha podido confirmar y no se ha inventado. Hay que comprobarlo. |
| `[PLACEHOLDER]`, `[TELÉFONO]`, `[EMAIL DE CONTACTO]`, `[NIF]`… | Datos tuyos que faltan. |
| `[ENDPOINT]` | La dirección del servicio que recibirá los formularios (ver más abajo). |

En la web, las marcas `[REVISAR]` salen con **fondo amarillo**, así se ven a simple vista. Cuando las resuelvas, borra también el `<span class="revisar">…</span>` que las rodea.

---

## Cómo cambiar precios y textos

Todo el texto está dentro de los archivos `.html`, en español y legible. No hace falta saber programar: ábrelos con un editor de texto (VS Code, Notepad++, TextEdit en modo texto plano) y cambia solo el texto que está **entre** las etiquetas.

- **Precios:** en `web/servicios.html`, busca `[X €]`. También aparecen en `marketing/objeciones.md` (objeción 7).
- **Qué incluye cada plan:** en `web/servicios.html`, las listas debajo de "Plan Básico" y "Plan Completo".
- **Preguntas frecuentes:** en `web/preguntas-frecuentes.html` cada pregunta aparece **dos veces**: una visible (`<details>`) y otra en los datos para Google (`<script type="application/ld+json">`, arriba del todo). Si cambias una, cambia la otra igual.
- **Menú y pie de página:** se repiten en las 12 páginas. Para cambiarlos, usa "Reemplazar en archivos" dentro de la carpeta `web/`.
- **Título y descripción de cada página** (lo que sale en Google): están arriba del todo en cada archivo, en `<title>` y `<meta name="description">`.
- **Colores:** al principio de `web/css/estilos.css`, en el bloque `:root`.
- **Logo:** sustituye `web/img/logo.svg` por el tuyo con el mismo nombre. Ahora es un logo provisional.
- **Datos del negocio para Google:** en `web/index.html`, el bloque `<script type="application/ld+json">` (teléfono, dirección, horario).

---

## Cómo conectar el formulario de contacto

Ahora mismo el formulario **no envía nada**: comprueba los campos y muestra el mensaje de confirmación, nada más.

Para que funcione:
1. Elige un servicio de formularios para webs estáticas (Netlify Forms, Formspree o similar). [PENDIENTE DE VERIFICAR: precio, límites y dónde guarda los datos]
2. Abre `web/js/contacto.js` y cambia estas dos líneas:
   ```js
   var ENDPOINT = 'https://la-direccion-que-te-de-el-servicio';
   var ENVIO_ACTIVO = true;
   ```
3. Cambia también `action="[ENDPOINT]"` en `web/contacto.html`.
4. Sigue las instrucciones del servicio elegido. Algunos piden añadir un atributo al formulario.
5. Añade el servicio en la política de privacidad (`web/privacidad.html`, apartado 6).
6. Haz una prueba real y comprueba que el mensaje te llega.

---

## Cómo publicar la web

### Opción A: Netlify (la más fácil)
1. Crea una cuenta gratuita en netlify.com. [PENDIENTE DE VERIFICAR: condiciones del plan gratuito]
2. Entra en "Add new site" → "Deploy manually".
3. Arrastra **la carpeta `web`** (no la carpeta entera del proyecto) a la ventana.
4. En unos segundos te da una dirección provisional del tipo `algo.netlify.app`.
5. Para usar tu dominio: "Domain settings" → "Add custom domain" y sigue los pasos.

Para actualizar la web, vuelve a arrastrar la carpeta `web` en la pestaña "Deploys".

### Opción B: GitHub Pages
1. Crea un repositorio nuevo en GitHub, por ejemplo `web-servicio`.
2. Sube **solo el contenido de la carpeta `web`** (que `index.html` quede en la raíz). No subas `marketing/` ni `plantillas/` a ese repositorio: si el repositorio es público, cualquiera podría leerlos.
3. En el repositorio: Settings → Pages → "Deploy from a branch" → rama `main`, carpeta `/ (root)` → Save.
4. En unos minutos estará en `tu-usuario.github.io/web-servicio/`.
5. Para usar tu dominio: en la misma pantalla, "Custom domain".

> Si usas la dirección `tu-usuario.github.io/web-servicio/` sin dominio propio, la página 404 puede verse sin estilos en direcciones con subcarpetas. Con dominio propio funciona bien.

---

## Lista de comprobación antes de publicar

**Datos y textos**
- [ ] No queda ningún `[NOMBRE DEL SERVICIO]`, `[DOMINIO]`, `[TELÉFONO]`, `[EMAIL DE CONTACTO]` ni `[X €]` en `web/`.
- [ ] Todos los `[REVISAR]` y `[PENDIENTE DE VERIFICAR]` de `web/` están resueltos, y se ha quitado el fondo amarillo.
- [ ] Los precios dicen si llevan IVA o no.
- [ ] Ningún texto promete reseñas, estrellas ni posiciones en Google.
- [ ] Ningún texto sugiere regalos, descuentos o premios a cambio de reseñas.
- [ ] No hay testimonios, logos de clientes ni cifras inventadas.

**Legal**
- [ ] Aviso legal, privacidad y cookies revisados por una persona experta, con los datos del titular completos.
- [ ] La privacidad menciona el alojamiento y el servicio de formularios reales.
- [ ] Si se han añadido estadísticas, mapas o vídeos: revisar cookies y, si hace falta, poner un aviso de cookies.
- [ ] Revisado si hace falta un contrato de encargado del tratamiento con los clientes. [PENDIENTE DE VERIFICAR]

**Formulario**
- [ ] `ENDPOINT` configurado y `ENVIO_ACTIVO = true`.
- [ ] Enviada una prueba real y recibida.
- [ ] La casilla de privacidad es obligatoria (ya lo es) y enlaza a la política.

**SEO técnico**
- [ ] `[DOMINIO]` cambiado en todas las páginas (`canonical`, `og:url`, datos estructurados), en `sitemap.xml` y en `robots.txt`.
- [ ] La fecha `lastmod` de `sitemap.xml` está actualizada.
- [ ] Los datos de `index.html` (teléfono, dirección, horario) coinciden con el perfil de Google del servicio.
- [ ] Datos estructurados comprobados con la "Prueba de resultados enriquecidos" de Google.
- [ ] Tras publicar: web dada de alta en Google Search Console y sitemap enviado.

**Funcionamiento**
- [ ] Revisada en un móvil real: menú, botones, formulario y preguntas frecuentes.
- [ ] Todos los enlaces funcionan (menú, pie, botones).
- [ ] La tarjeta NFC y el QR de prueba abren la página correcta en iPhone y en Android.

**Recuerda:** sube a internet solo la carpeta `web/`.
