const form = document.getElementById("form_cliente");

const nombreInput = document.getElementById("nombre");
const telInput = document.getElementById("telefono");
const emailInput = document.getElementById("email");
const fechaInput = document.getElementById("fecha_nac");
//const generoSeleccionado = document.querySelectorAll('input[name="genero"]'checked);
//esta la declaro dentro del submit porque hasta
//  no enviar no lo marcas
//y saldría null
const paisSelect = document.getElementById("pais");
const terminosCheckbox = document.getElementById("terminos");

const errNombre = document.getElementById("errNombre");
const errTel = document.getElementById("errTelefono");
const errEmail = document.getElementById("errEmail");
const errFecha = document.getElementById("errFecha");
const errGenero = document.getElementById("errGenero");
const errPais = document.getElementById("errPais");
const errTerminos = document.getElementById("errTerminos");

function limpiar() {
  // borra mensajes
  errNombre.innerText = "";
  errEmail.innerText = "";
  errTel.innerText = "";
  errFecha.innerText = "";
  errGenero.innerText = "";
  errPais.innerText = "";
  errTerminos.innerText = "";

  // quita clases , OPCION A creo un array y
  //  meto los inputs, luego lo recorro 
  //con un forEach que voy metiendo como 
  // parámetro cada elemnto del array y 
  // de salida les quito las clases input-error y input-ok
  //  que son las q me aplican los estilos tambien lo podia 
  //haber hecho uno a uno OPCION B 
  // nombreInput.addClassList.remove("input-error,input-ok");


  
  const campos = [
    nombreInput,
    emailInput,
    telInput,
    fechaInput,
    paisSelect,
    terminosCheckbox
  ];

  campos.forEach(campo => {
    campo.classList.remove("input-error", "input-ok");
  });
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    limpiar();

    let esValido = true;//para controlar cada validación

    // valido nombre
   
    const nombre = nombreInput.value.trim();
    if (nombre.length < 3) {
        errNombre.innerText = "El nombre debe tener al menos 3 caracteres.";
        nombreInput.classList.add("input-error");

        esValido = false;
    } else {
        nombreInput.classList.add("input-ok");

    }

    //valido email
    const email = emailInput.value.trim();
    //aquí he puesto este regex pero se puede poner otro
    // en este caso q no empiece por vacio o @ cuantificador 1 o mas
    //luego @ si, luego para el dominio otra vez q no tengan esoacio o @
    //luego el punto \. y finalmente q acabe en .com  
    const emailRegex = /^[^\s@]+@[^\s@]+\.com$/;
    if (email === "") {
        errEmail.innerText = "El email es obligatorio.";
        emailInput.classList.add("input-error");
        esValido = false;
    } else if (!emailRegex.test(email)) {
        errEmail.innerText = "Formato de email no válido. Ej: usuario@dominio.com";
        emailInput.classList.add("input-error");
        esValido = false;
    } else {
        emailInput.classList.add("input-ok");
    }

    //valido teléfono

    const tel = telInput.value.trim();
    //aqui el regex solo numeros tb podia poner/^[0-9]+$/
    const telRegex = /^\d+$/;

    if ((tel !== "") && (!telRegex.test(tel))) {
        errTel.innerText = "El teléfono solo puede contener números.";
        telInput.classList.add("input-error");
        esValido = false;
    } else if (tel !== "") {
  telInput.classList.add("input-ok");
}

    //valido fecha nacimiento
    const fecha = fechaInput.value.trim();
    if (fecha === "") {
        errFecha.innerText="La fecha de nacimiento es obligatoria";
        fechaInput.classList.add("input-error");
        esValido = false;
    } else {
        fechaInput.classList.add("input-ok");
    }

    //género es distinto trabajo con NodeList y trabajo sobre el checked

    const generoSeleccionado = document.querySelector('input[name="genero"]:checked');
    if (!generoSeleccionado) {
        errGenero.innerText = "Debes seleccionar un genero";
        esValido = false;
    } else {
        errGenero.innerText = "";
    }
    // validamos país

    const pais = paisSelect.value;

    if (pais === "") {
        errPais.innerText = "Selecciona un país.";
        paisSelect.classList.add("input-error");
        esValido = false;
    } 


    // validamos el checkbox que debe estar checkado

    if (!terminosCheckbox.checked) {
        errTerminos.innerText = "Debes aceptar los términos y condiciones.";
        terminosCheckbox.classList.add("input-error");
        esValido = false;
    } else {
        terminosCheckbox.classList.add("input-ok");
    }

    if(esValido){
        form.reset();
    limpiar();    }

});