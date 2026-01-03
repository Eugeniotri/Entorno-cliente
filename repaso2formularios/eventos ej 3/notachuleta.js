// Comprobamos que el archivo JS está conectado correctamente
console.log("notas conectado");

// 1️⃣ Seleccionamos los elementos del DOM que vamos a usar
const notaInput = document.getElementById("notaInput");   // Input donde se escribe la nota
const btnAgregar = document.getElementById("btnAgregar"); // Botón para agregar la nota
const listaNotas = document.getElementById("listaNotas"); // Lista <ul> donde irán las notas

// 2️⃣ Escuchamos el evento click del botón "Agregar Nota"
btnAgregar.addEventListener("click", function () {

  // 3️⃣ Guardamos el texto escrito por el usuario
  const textoNota = notaInput.value;

  // 4️⃣ Creamos un elemento <li> (una nota)
  const li = document.createElement("li");

  // 5️⃣ Ponemos el texto de la nota dentro del <li>
  li.textContent = textoNota;

  // 6️⃣ Creamos el botón "Eliminar" para esta nota
  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";

  // 7️⃣ Evento click del botón Eliminar
  // Cuando se pulse, se eliminará SOLO esta nota
  btnEliminar.addEventListener("click", function () {
    li.remove(); // elimina el <li> completo del DOM
  });

  // 8️⃣ Metemos el botón Eliminar dentro del <li>
  li.appendChild(btnEliminar);

  // 9️⃣ Metemos el <li> dentro de la lista <ul>
  listaNotas.appendChild(li);

  // 🔟 Limpiamos el input para poder escribir otra nota
  notaInput.value = "";
});
// para hacerlo con el teclado enter
notaInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        btnAgregar.click();
    }
});
