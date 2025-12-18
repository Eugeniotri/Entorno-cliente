"use strict";

/* =========================================================
   0) SELECCIÓN DE ELEMENTOS (siempre arriba)
========================================================= */
const titulo = document.getElementById("titulo");
const mensaje = document.getElementById("mensaje");
const parrafosTexto_HTMLCollection = document.getElementsByClassName("texto"); // HTMLCollection
const primerTexto = document.querySelector(".texto"); // primer match
const todosLosParrafos = document.querySelectorAll("p"); // NodeList
const items = document.querySelectorAll(".item"); // NodeList
const botones = document.querySelectorAll(".btn"); // NodeList

const btnCambiarTexto = document.getElementById("btnCambiarTexto");

const form = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
const inputEdad = document.getElementById("edad");

/* =========================================================
   1) PROPIEDADES DE TEXTO: textContent vs innerHTML
========================================================= */

// textContent (texto plano)
mensaje.textContent = "Texto cambiado desde JavaScript (textContent)";

// innerHTML (interpreta HTML) - úsalo con cuidado
// mensaje.innerHTML = "Texto con <strong>HTML</strong> desde JS";

/* =========================================================
   2) ESTILOS: style (rápido) vs classList (real/pro)
========================================================= */

// style (rápido, didáctico)
mensaje.style.color = "red";

// classList (forma recomendada) -> define en tu CSS .activo { ... }
//mensaje.classList.add("activo");      // añade clase
// mensaje.classList.remove("activo"); // quita clase
 mensaje.classList.toggle("activo"); // alterna clase (muy útil en eventos)

/* =========================================================
   3) RECORRER COLECCIONES: HTMLCollection vs NodeList
========================================================= */

// getElementsByClassName -> HTMLCollection (NO forEach)
for (let i = 0; i < parrafosTexto_HTMLCollection.length; i++) {
  parrafosTexto_HTMLCollection[i].style.color = "blue";
}

// querySelectorAll -> NodeList (SÍ forEach)
todosLosParrafos.forEach(p => {
  p.style.fontWeight = "bold";
});

/* =========================================================
   4) ATRIBUTOS: getAttribute / setAttribute / removeAttribute
========================================================= */

// Ejemplo: añadir un title al h1 (tooltip)
titulo.setAttribute("title", "Soy el título principal (setAttribute)");

// Leer atributos
console.log("title del h1:", titulo.getAttribute("title"));

// Quitar atributos (si existiera)
// titulo.removeAttribute("title");

/* =========================================================
   5) LISTA (querySelectorAll + forEach)
========================================================= */

items.forEach((li, index) => {
  li.textContent = `Elemento ${index + 1} (modificado)`;
});

/* =========================================================
   6) EVENTOS (IMPRESCINDIBLE EXAMEN)
========================================================= */

/* 6.1 Click: botón cambia el texto y alterna una clase */
btnCambiarTexto.addEventListener("click", () => {

  // Cambia texto del párrafo
  mensaje.textContent = "Has pulsado el botón: texto actualizado ✅";

  // Alterna una clase (si existe en CSS)
  mensaje.classList.toggle("activo");

  // Cambia el texto del propio botón
  btnCambiarTexto.textContent = "Texto cambiado (click)";
});

/* 6.2 input: mientras escribes, se refleja en el h1 */
inputNombre.addEventListener("input", () => {
  const nombre = inputNombre.value.trim();
  titulo.textContent = nombre ? `Hola, ${nombre}` : "Práctica DOM UF3";
});

/* 6.3 submit: formulario (preventDefault) + validación simple */
form.addEventListener("submit", (e) => {
  e.preventDefault(); // evita recarga (CLAVE)

  const nombre = inputNombre.value.trim();
  const edad = Number(inputEdad.value);

  // Validación mínima (examen práctico)
  if (!nombre) {
    mensaje.textContent = "❌ Falta el nombre";
    mensaje.classList.add("error");
    return;
  }

  if (!Number.isFinite(edad) || edad <= 0) {
    mensaje.textContent = "❌ La edad debe ser un número mayor que 0";
    mensaje.classList.add("error");
    return;
  }

  mensaje.classList.remove("error");
  mensaje.textContent = `✅ Formulario OK. Nombre: ${nombre} · Edad: ${edad}`;
});
