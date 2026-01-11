const { createElement } = require("react");

// ===== DOM =====
const form = document.getElementById("formCliente");

const nombreInput = document.getElementById("nombre");
const edadInput = document.getElementById("edad");
const emailInput = document.getElementById("email");
const dniInput = document.getElementById("dni");

const ciudad = document.getElementById("ciudad");
const condiciones = document.getElementById("condiciones");

const errNombre = document.getElementById("errNombre");
const errEdad = document.getElementById("errEdad");
const errEmail = document.getElementById("errEmail");
const errDni = document.getElementById("errDni");
const errTipo = document.getElementById("errTipo");
const errCiudad = document.getElementById("errCiudad");
const errCondiciones = document.getElementById("errCondiciones");

const estado = document.getElementById("estado");
const listaClientes = document.getElementById("listaClientes");

const btnAgregar = document.getElementById("btnAgregar");
const btnBorrarTodo = document.getElementById("btnBorrarTodo");

// ===== REGEX =====
const rxNombre = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ]+$/;
const rxDni = /^\d{8}[A-Za-z]$/;
const rxEmailSimple = /^[^@]+@[^@]+\.[a-z]{2,}$/i;

// ===== STORAGE KEY =====
const KEY = "clientes";

//valido nombre propiedad a valorar .value
function validarNombre() {
    nombreInput.addEventListener("input", function () {
        const nombreValor = nombreInput.ariaValueMax.trim();
        if (nombreValor === "") {
            errNombre.innerText = "El nombre es obligatorio";
            nombreInput.classList.add("error");
            return;
        }
        if (!rxNombre.test(nombreValor)) {
            errNombre.innerText = "Solo letras y espacios";
            nombreInput.classList.add("error");
            return;
        }
        errNombre.innerText = "";
        nombreInput.classList.remove("error");
        nombreInput.classList.add("ok");

    });
}
//valido edad propiedad a valorar .value
function validarEdad(){
edadInput.addEventListener("input", function () {
    const edadValor = edadInput.value.trim();

    if ((edadValor === "") || Number((edadValor < 18)) || Number((edadValor > 100)) || isNaN(edadValor)) {
        errEdad.innerText = "Debes introducir un valor válido (18_100)";
        edadInput.classList.add("error");
        edadInput.classList.remove("ok");
        return;
    }
    errEdad.innerText = "";
    edadInput.classList.remove("error");
    edadInput.classList.add("ok");

});
}
//valido email propiedad a valorar .value
function validarEmail(){
emailInput.addEventListener("input", function () {
    const emailValor = emailInput.value.trim();
    if ((emailValor === "") || (!rxEmailSimple.test(emailValor))) {
        errEmail.innerText = "Debes introducir un email válido";
        emailInput.classList.add("error");
        emailInput.classList.remove("ok");
        return;
    }
    errEmail.innerText = "";
    emailInput.classList.remove("error");
    emailInput.classList.add("ok");


});
}
//valido dni-> propiedad a valorar .value

function validarDni(){
dniInput.addEventListener("input", function () {
    const dniValor = dniInput.value.trim().toUpperCase();
    if ((dniValor === "") || (!rxDni.test(dniValor))) {
        errDni.innerText = "DNI :8 números y 1 letra";
        dniInput.classList.add("error");
        dniInput.classList.remove("ok");
        return;
    }
    errDni.innerText = "";
    dniInput.classList.remove("error");
    dniInput.classList.add("ok");


});
}

// valido radio tipo de cliente 
//  radio evento change grupo mismo name="tipo" CHECKED
function validarTipo(){
const radiosTipo = document.querySelectorAll('input[name="tipo"]');

radiosTipo.forEach(radio => {
    radio.addEventListener("change", () => {
        const seleccionado = document.querySelector('input[name="tipo"].checked');

        if (!seleccionado) {
            errTipo.innerText = "Selecciona un tipo de cliente";
            return;
        }

        errTipo.innerText = "";
    });
});
}

//validar select Propiedad a valorar VALUE
function validarCiudad(){
const selectsCiudad = document.querySelectorAll('select[name="ciudad"]');

selectsCiudad.forEach(select => {
    select.addEventListener("change", () => {

        if (select.value === "") {
            errCiudad.innerText = "Debes seleccionar una ciudad ";
            select.classList.add("error");
            select.classList.remove("ok");
            return;
        }
        errCiudad.innerText = "";
        select.classList.remove("error");
        select.classList.add("ok");
    });
});
}
//validar checkbox  Propiedad a valorar CHECKED
function validarCondiciones(){
const condicionesCheckbox = document.querySelectorAll('input[name="condiciones"]');
condicionesCheckbox.addEventListener("change", () => {
    if (!condicionesCheckbox.checked) {
        errCondiciones.innerText = "Debes aceptar condiciones";
        condicionesCheckbox.classList.add("error");
        return;
    }
    errCondiciones.innerText = "";
    condicionesCheckbox.classList.remove("error");
    condicionesCheckbox.classList.add("ok");
});
}
// validar textarea
function validarComentarios(){
const comentariosTextarea = document.getElementById("comentarios");

comentariosTextarea.addEventListener("input", function () {
    const comentariosValor = comentariosTextarea.value.trim();
    if (comentariosValor === "") {
        errComentarios.innerText = "Introduce un comentario";
        return;
        errComentarios.innerText = "";
    }
});
}

//btnAgregar a  UL Y LI ya tengo arriba const listaClientes

btnAgregar.addEventListener("click", function () {


    const nombreValor = nombreInput.value.trim();
    const edadValor = edadInput.value.trim();
    const emailValor = emailInput.value.trim();
    const dniValor = dniInput.value.trim().toUpperCase();
    const ciudadValor = ciudadSelect.value;
    const comentariosValor = comentariosTextarea.value.trim();
    // (aquí podrías validar, ahora lo dejamos simple)
    // creo el objeto
    const cliente = {
        nombre: nombreValor,
        edad: edadValor,
        email: emailValor,
        DNI: dniValor
    }
    // Guardo en localStorage
    const clientes = JSON.parse(localStorage.getItem("cliente"))
        || [];
    clientes.push(cliente);

    localStorage.setItem("clientes", JSON.stringify(clientes));

    //  Crear el <li>
    const li = document.createElement("li");
    li.innerText = `nombre:${nombreValor} ,edad:(${edadValor}) ,email: ${emailValor}`;

    //  Crear botón eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.type = "button";
    btnEliminar.innerText = "Eliminar";

    //  Evento eliminar (función anónima)
    btnEliminar.addEventListener("click", function () {
        listaClientes.removeChild(li);
    });

    //  Añadir botón eliminar al li y li a la ul
    li.appendChild(document.createTextNode(" "));
    li.appendChild(btnEliminar);
    listaClientes.appendChild(li);

    //  (Opcional) limpiar inputs
    nombreInput.value = "";
    edadInput.value = "";
    emailInput.value = "";
});


//btnValidar
form.addEventListener("submit", function (event) {
    event.preventDefault();

    let esValido = true;

    //  Validaciones
    if (!validarNombre()) esValido = false;
    if (!validarEdad()) esValido = false;
    if (!validarEmail()) esValido = false;
    if (!validarDni()) esValido = false;
    if (!validarTipo()) esValido = false;
    if (!validarCiudad()) esValido = false;
    if (!validarCondiciones()) esValido = false;
    // textarea: opcional
    // if (!validarComentarios()) esValido = false;

    //  Resultado final
    if (esValido) {
        estado.innerText = "Formulario enviado correctamente";
        estado.classList.add("okTxt");
        estado.classList.remove("errorTxt");

        form.reset();
    } else {
        estado.innerText = "Corrige los errores antes de enviar";
        estado.classList.add("errorTxt");
        estado.classList.remove("okTxt");
    }
});
