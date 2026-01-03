
console.log("FORM CONECTADO CON JS");
const form = document.getElementById("form");
const nombreInput = document.getElementById("nombreInput");
const emailInput = document.getElementById("email");
const telefonoInput = document.getElementById("telefono");
const fechaInput = document.getElementById("fecha");
const paisInput = document.getElementById("pais");
const terminos = document.getElementById("terminos");
const resultado = document.querySelector("#resultado");
//const generoSeleccionado = document.querySelector('input[name="genero"]:checked');
//dentro del evento porque no está chequeado al cargar, se chequea al SUBMITEAR
const regexTelefono = /^[67]\d{8}$/;

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let esValido=true;
    console.log("submit capturado");
    const generoSeleccionado = document.querySelector('input[name="genero"]:checked');
    
    const nombre = nombreInput.value.trim();
    if (nombre === "") {
        nombreInput.classList.add("error");
        esValido = false;
    } else {
        nombreInput.classList.remove("error");
    }


    const email = emailInput.value.trim();
    if (email === "" || !emailInput.checkValidity()) {
        emailInput.classList.add("error");
        esValido = false;
    } else {
        emailInput.classList.remove("error");
    }

    const telefono = telefonoInput.value.trim();
    if ((telefono !== "") && (!regexTelefono.test(telefono))) {
        telefonoInput.classList.add("error");
        esValido = false;
    }
    else {
        telefonoInput.classList.remove("error");
    }
    const pais = paisInput.value;
    if (pais === "") {
        paisInput.classList.add("error");
        esValido=false;
    }
    else {
        paisInput.classList.remove("error");
    }

    if (!terminos.checked) {
        terminos.classList.add("error");
        esValido=false;
    }
    else { terminos.classList.remove("error") 

    }
    if(esValido===true){
        resultado.textContent="Formulario enviado correctamente";
    }else{resultado.textContent=""};
});
