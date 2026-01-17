//CLASES

class Entrenamiento {
  constructor(distancia, tiempo, fecha) {
    this.distancia = distancia;
    this.tiempo = tiempo;
    this.fecha = fecha;
    this.comentarios = [];
  }
}

class Persona {
  constructor(nombre, correo, altura, peso, edad, usuario, pass) {
    this.nombre = nombre;
    this.correo = correo;
    this.altura = altura;
    this.peso = peso;
    this.edad = edad;
    this.usuario = usuario;
    this.pass = pass;
    this.entrenamientos = [];
  }
}











//Botones
const btnInicio = document.getElementById("btnInicio");



const btnForo = document.getElementById("btnForo");

const btnCerrarSesion = document.getElementById("btnCerrarSesion");
const btnIrRegistro = document.getElementById("btnIrRegistro");
const btnIrLogin = document.getElementById("btnIrLogin");
const btnIrForo = document.getElementById("btnIrForo");

// Secciones (pantallas) en variables
const inicio = document.getElementById("inicio");
const registro = document.getElementById("registro");
const login = document.getElementById("login");
const panel = document.getElementById("panel");
const foro = document.getElementById("foro");


//login form
const loginUsuario = document.getElementById("loginUsuario");
const loginPass = document.getElementById("loginPass");
const loginMsg = document.getElementById("loginMsg");
const formLogin = document.getElementById("formLogin");

//Registro form
const formRegistro = document.getElementById("formRegistro");
const regUsuario = document.getElementById("regUsuario");
const regPass = document.getElementById("regPass");
const regMsg = document.getElementById("regMsg");
const regNombre = document.getElementById("regNombre");
const regCorreo = document.getElementById("regCorreo");
const regAltura = document.getElementById("regAltura");
const regPeso = document.getElementById("regPeso");
const regEdad = document.getElementById("regEdad");


//form entrenamiento
const formEntrenamiento = document.getElementById("formEntrenamiento");
const distanciaInput = document.getElementById("distancia");
const tiempoInput = document.getElementById("tiempo");
const entrenoMsg = document.getElementById("entrenoMsg");
const listaEntrenos = document.getElementById("listaEntrenos");

//entrenamientos
const resumenEntrenos = document.getElementById("resumenEntrenos");
const tipoMejor = document.getElementById("tipoMejor");
const btnMejor = document.getElementById("btnMejor");
const mejorResultado = document.getElementById("mejorResultado");

//FORO
const formForo = document.getElementById("formForo");
const foroMsg = document.getElementById("foroMsg");
const foroInfo = document.getElementById("foroInfo");
const listaForo = document.getElementById("listaForo");





// miramos si hay usuarios al cargar y si no creamos 2 DEMO
if (!localStorage.getItem("personas")) {
  const admin = new Persona(
    "Admin Demo",
    "admin@demo.com",
    180,
    75,
    30,
    "admin",
    "1234"
  );

  const user = new Persona(
    "User Demo",
    "user@demo.com",
    170,
    70,
    25,
    "user",
    "1234"
  );

  localStorage.setItem("personas", JSON.stringify([admin, user]));
}

//inicializo foro en localSotorage

if (!localStorage.getItem("foro")) {
  localStorage.setItem("foro", JSON.stringify([]));
}


//FUNCIONES

function mostrarSeccion(seccion) {
  // Ocultamos todas las secciones
  inicio.classList.add("oculta");
  registro.classList.add("oculta");
  login.classList.add("oculta");
  panel.classList.add("oculta");
  foro.classList.add("oculta");

  // la sección elegida es la q quiero mostrar
  seccion.classList.remove("oculta");
}





//voy a controlar los botones q se muestran
function actualizarMenu(usuarioLogueado) {
  // Siempre visibles
  btnInicio.classList.remove("oculta");
  btnForo.classList.remove("oculta");

  // Solo si hay sesión
  if (usuarioLogueado) {
    btnCerrarSesion.classList.remove("oculta");
  } else {
    btnCerrarSesion.classList.add("oculta");
  }
}



// FUNCION PINTARENTRENAMIENTOS


function pintarEntrenamientos() {
  listaEntrenos.innerHTML = "";

  const currentUser = localStorage.getItem("currentUser");
  if (!currentUser) {
    listaEntrenos.textContent = "Inicia sesión para ver tus entrenamientos.";
    return;
  }

  const personas = JSON.parse(localStorage.getItem("personas")) || [];
  const persona = personas.find(p => p.usuario === currentUser);

  if (!persona) {
    listaEntrenos.textContent = "Usuario no encontrado.";
    return;
  }

  const entrenos = persona.entrenamientos || [];

  if (entrenos.length === 0) {
    listaEntrenos.textContent = "Todavía no tienes entrenamientos guardados.";
    return;
  }

  const ul = document.createElement("ul");

  entrenos.forEach((e, i) => {
    const li = document.createElement("li");

    const fecha = new Date(e.fecha).toLocaleString();

    // Texto del entrenamiento
    const span = document.createElement("span");
    span.textContent = `#${i + 1} - ${e.distancia} m - ${e.tiempo} min - ${fecha}`;

    // Botón eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.type = "button";
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener("click", () => eliminarEntrenamiento(i));

    li.appendChild(span);
    li.appendChild(document.createElement("br"));
    li.appendChild(btnEliminar);

    // ---- COMENTARIOS ----

    const divComentarios = document.createElement("div");

    // Lista de comentarios
    if (e.comentarios.length > 0) {
      const ulCom = document.createElement("ul");

      e.comentarios.forEach(c => {
        const liCom = document.createElement("li");
        liCom.textContent = c;
        ulCom.appendChild(liCom);
      });

      divComentarios.appendChild(ulCom);
    }

    // Input para nuevo comentario
    const inputCom = document.createElement("input");
    inputCom.type = "text";
    inputCom.placeholder = "Añadir comentario";

    const btnCom = document.createElement("button");
    btnCom.type = "button";
    btnCom.textContent = "Añadir comentario";

    btnCom.addEventListener("click", () => {
      añadirComentario(i, inputCom.value);
    });

    divComentarios.appendChild(inputCom);
    divComentarios.appendChild(btnCom);

    li.appendChild(divComentarios);
    ul.appendChild(li);
  });


  listaEntrenos.appendChild(ul);
}

//FUNCION ELIMINAR_ENTRENAMIENTOS


function eliminarEntrenamiento(indice) {
  const currentUser = localStorage.getItem("currentUser");
  if (!currentUser) return;

  const personas = JSON.parse(localStorage.getItem("personas")) || [];
  const idxPersona = personas.findIndex(p => p.usuario === currentUser);
  if (idxPersona === -1) return;

  if (!Array.isArray(personas[idxPersona].entrenamientos)) {
    personas[idxPersona].entrenamientos = [];
  }

  // borrar 1 elemento en la posición "indice"
  personas[idxPersona].entrenamientos.splice(indice, 1);

  localStorage.setItem("personas", JSON.stringify(personas));

  // repintar lista
  pintarEntrenamientos();
  pintarResumen();

}


//FUNCION  PINTARRESUMEN

function pintarResumen() {
  // por si no existe aún el elemento
  if (!resumenEntrenos) return;

  const currentUser = localStorage.getItem("currentUser");
  if (!currentUser) {
    resumenEntrenos.textContent = "Inicia sesión para ver el resumen.";
    return;
  }

  const personas = JSON.parse(localStorage.getItem("personas")) || [];
  const persona = personas.find(p => p.usuario === currentUser);

  if (!persona) {
    resumenEntrenos.textContent = "Usuario no encontrado.";
    return;
  }

  const entrenos = persona.entrenamientos || [];

  let totalDistancia = 0;
  let totalTiempo = 0;

  entrenos.forEach(e => {
    totalDistancia += Number(e.distancia) || 0;
    totalTiempo += Number(e.tiempo) || 0;
  });

  resumenEntrenos.textContent =
    `Entrenamientos: ${entrenos.length} | Total distancia: ${totalDistancia} m | Total tiempo: ${totalTiempo} min`;
}

//FUNCION MEJORENTRENAMIENTO
function calcularMejorEntrenamiento() {
  mejorResultado.textContent = "";

  const currentUser = localStorage.getItem("currentUser");
  if (!currentUser) {
    mejorResultado.textContent = "Inicia sesión.";
    return;
  }

  const personas = JSON.parse(localStorage.getItem("personas")) || [];
  const persona = personas.find(p => p.usuario === currentUser);

  if (!persona || persona.entrenamientos.length === 0) {
    mejorResultado.textContent = "No hay entrenamientos.";
    return;
  }

  let mejor = persona.entrenamientos[0];
  const tipo = tipoMejor.value;

  persona.entrenamientos.forEach(e => {
    if (tipo === "tiempo" && e.tiempo < mejor.tiempo) {
      mejor = e;
    }
    if (tipo === "distancia" && e.distancia > mejor.distancia) {
      mejor = e;
    }
    if (tipo === "velocidad") {
      const velE = e.distancia / e.tiempo;
      const velMejor = mejor.distancia / mejor.tiempo;
      if (velE > velMejor) {
        mejor = e;
      }
    }
  });

  const fecha = new Date(mejor.fecha).toLocaleString();

  mejorResultado.textContent =
    `Distancia: ${mejor.distancia} m | Tiempo: ${mejor.tiempo} min | Fecha: ${fecha}`;
}

//FUNCION AÑADIRCOMENTARIO

function añadirComentario(indiceEntreno, texto) {
  if (!texto.trim()) return;

  const currentUser = localStorage.getItem("currentUser");
  if (!currentUser) return;

  const personas = JSON.parse(localStorage.getItem("personas")) || [];
  const idxPersona = personas.findIndex(p => p.usuario === currentUser);
  if (idxPersona === -1) return;

  personas[idxPersona].entrenamientos[indiceEntreno].comentarios.push(texto);

  localStorage.setItem("personas", JSON.stringify(personas));

  pintarEntrenamientos();
}

//FUNCION PINTAR_FORO

function pintarForo() {
  listaForo.innerHTML = "";

  const mensajes = JSON.parse(localStorage.getItem("foro")) || [];

  if (mensajes.length === 0) {
    listaForo.textContent = "Todavía no hay mensajes.";
    return;
  }

  const ul = document.createElement("ul");

  mensajes.forEach(m => {
    const li = document.createElement("li");
    const fecha = new Date(m.fecha).toLocaleString();
    li.textContent = `[${fecha}] ${m.usuario}: ${m.texto}`;
    ul.appendChild(li);
  });

  listaForo.appendChild(ul);
}


// ESTADO INICIAL (AL CARGAR)
let usuarioLogueado = !!localStorage.getItem("currentUser");
actualizarMenu(usuarioLogueado);
mostrarSeccion(inicio);



//EVENTOS


//EVENTO BOTONES

btnInicio.addEventListener("click", () => {
  mostrarSeccion(inicio);
});


btnMejor.addEventListener("click", calcularMejorEntrenamiento);

//EVENTO BOTONES DE INICIO
btnIrRegistro.addEventListener("click", () => mostrarSeccion(registro));
btnIrLogin.addEventListener("click", () => mostrarSeccion(login));







//EVENTO BTNCERRARSESION

btnCerrarSesion.addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  usuarioLogueado = false;
  actualizarMenu(usuarioLogueado);
  mostrarSeccion(inicio);
});

//EVENTO BOTONES FORO
btnForo.addEventListener("click", () => {
  mostrarSeccion(foro);
  pintarForo();
});

btnIrForo.addEventListener("click", () => {
  mostrarSeccion(foro);
  pintarForo();
});


// EVENTO SUBMIT FORMLOGIN

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();

  // 1) Leer datos del formulario
  const user = loginUsuario.value.trim();
  const pass = loginPass.value;

  loginMsg.textContent = "";

  // 2) Validación mínima
  if (user === "" || pass === "") {
    loginMsg.textContent = "Rellena usuario y contraseña.";
    return;
  }

  // 3) Cargar personas
  const personas = JSON.parse(localStorage.getItem("personas")) || [];

  // 4) Buscar usuario
  const persona = personas.find(p => p.usuario === user);
  if (!persona) {
    loginMsg.textContent = "Usuario no encontrado.";
    return;
  }

  // 5) Comprobar contraseña
  if (persona.pass !== pass) {
    loginMsg.textContent = "Contraseña incorrecta.";
    return;
  }

  // 6) Login OK -> guardar sesión
  localStorage.setItem("currentUser", user);

  usuarioLogueado = true;
  actualizarMenu(usuarioLogueado);
  mostrarSeccion(panel);
  pintarEntrenamientos();
  pintarResumen();



  formLogin.reset();
});



//EVENTO SUBMIT FORMREGISTRO
formRegistro.addEventListener("submit", (event) => {
  event.preventDefault();

  // 1) Leer datos
  const nombre = regNombre.value.trim();
  const correo = regCorreo.value.trim();
  const altura = Number(regAltura.value);
  const peso = Number(regPeso.value);
  const edad = Number(regEdad.value);
  const user = regUsuario.value.trim();
  const pass = regPass.value;


  // 2) Validación mínima
  regMsg.textContent = "";

  if (!nombre || !correo || !user || !pass) {
    regMsg.textContent = "Rellena todos los campos.";
    return;
  }
  if (Number.isNaN(altura) || altura <= 0) {
    regMsg.textContent = "Altura no válida.";
    return;
  }
  if (Number.isNaN(peso) || peso <= 0) {
    regMsg.textContent = "Peso no válido.";
    return;
  }
  if (Number.isNaN(edad) || edad <= 0) {
    regMsg.textContent = "Edad no válida.";
    return;
  }
  if (pass.length < 4) {
    regMsg.textContent = "La contraseña debe tener al menos 4 caracteres.";
    return;
  }


  // 3) Cargar personas
  const personas = JSON.parse(localStorage.getItem("personas")) || [];

  // 4) Comprobar si existe el usuario
  const persona = personas.find(p => p.usuario === user);
  if (persona) {
    regMsg.textContent = "Ese usuario ya existe.";
    return;
  }


  // 5) Guardar nuevo usuario

  const nuevaPersona = new Persona(
    nombre,
    correo,
    altura,
    peso,
    edad,
    user,
    pass
  );

  personas.push(nuevaPersona);



  localStorage.setItem("personas", JSON.stringify(personas));

  // 6) Mensaje y limpiar
  regMsg.textContent = "Usuario registrado correctamente. Ya puedes hacer login.";
  formRegistro.reset();

  // (opcional) llevar al login automáticamente
  mostrarSeccion(login);
});



//EVENTO SUBMIT FORMENTRENAMIENTO
formEntrenamiento.addEventListener("submit", (event) => {
  event.preventDefault();

  // 1) Leer inputs
  const distancia = Number(distanciaInput.value);
  const tiempo = Number(tiempoInput.value);

  entrenoMsg.textContent = "";

  // 2) Validación básica
  if (Number.isNaN(distancia) || distancia <= 0) {
    entrenoMsg.textContent = "La distancia debe ser un número mayor que 0.";
    return;
  }
  if (Number.isNaN(tiempo) || tiempo <= 0) {
    entrenoMsg.textContent = "El tiempo debe ser un número mayor que 0.";
    return;
  }

  // 3) Usuario actual
  const currentUser = localStorage.getItem("currentUser");
  if (!currentUser) {
    entrenoMsg.textContent = "Tienes que iniciar sesión para añadir entrenamientos.";
    mostrarSeccion(login);
    return;
  }

  // 4) Cargar personas
  const personas = JSON.parse(localStorage.getItem("personas")) || [];

  // 5) Buscar persona logueada
  const idx = personas.findIndex(p => p.usuario === currentUser);
  if (idx === -1) {
    entrenoMsg.textContent = "Usuario no encontrado. Vuelve a iniciar sesión.";
    return;
  }

  // 6) Asegurar array de entrenamientos
  if (!Array.isArray(personas[idx].entrenamientos)) {
    personas[idx].entrenamientos = [];
  }

  // 7) Crear entrenamiento
  const entrenamiento = new Entrenamiento(
    distancia,
    tiempo,
    new Date().toISOString()
  );


  // 8) Guardar
  personas[idx].entrenamientos.push(entrenamiento);
  localStorage.setItem("personas", JSON.stringify(personas));

  // 9) Mensaje + limpiar
  entrenoMsg.textContent = "Entrenamiento añadido correctamente.";
  formEntrenamiento.reset();
  // 10) Pinta el entrenamiento
  pintarEntrenamientos();
  pintarResumen();


});


//EVENTO SUBMIT FORMFORO
formForo.addEventListener("submit", (event) => {
  event.preventDefault();

  const texto = foroMsg.value.trim();
  foroInfo.textContent = "";

  if (texto.length === 0) {
    foroInfo.textContent = "Escribe un mensaje.";
    return;
  }

  // Si hay usuario logueado lo usamos, si no: Anónimo
  const usuario = localStorage.getItem("currentUser") || "Anónimo";

  const mensajes = JSON.parse(localStorage.getItem("foro")) || [];

  mensajes.push({
    usuario: usuario,
    texto: texto,
    fecha: new Date().toISOString()
  });

  localStorage.setItem("foro", JSON.stringify(mensajes));

  foroMsg.value = "";
  foroInfo.textContent = "Mensaje publicado.";
  pintarForo();
});



