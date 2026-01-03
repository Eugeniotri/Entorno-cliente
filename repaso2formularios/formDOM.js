const form = document.querySelector("#contactForm");
const nombreInput = document.getElementById("nombre");
const emailInput = document.querySelector("#email");
const mensajeInput = document.getElementById("mensaje");
const pNombre = document.getElementById("p_nombre");
const pEmail = document.getElementById("p_mail");
const pMensaje = document.getElementById("p_mensaje");
const btnBorrar = document.getElementById("btnBorrar");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = nombreInput.value;
    const email = emailInput.value;
    const mensaje = mensajeInput.value;

    pNombre.textContent = nombre;
    pEmail.textContent = email;
    pMensaje.textContent = mensaje;

    const datos={
    nombre: nombre,
    email: email,
    mensaje:mensaje 
};

localStorage.setItem("contacto", JSON.stringify(datos));
});

const datosGuardados = localStorage.getItem("contacto");
if(datosGuardados){

    const datos = JSON.parse(datosGuardados);

    pNombre.textContent=datos.nombre;
    pEmail.textContent=datos.email;
    pMensaje.textContent=datos.mensaje;
}
form.addEventListener("reset",function(event){
   console.log("Formulario reseteado"); 
});

btnBorrar.addEventListener("click", function(){
localStorage.removeItem("contacto");

pNombre.textContent = "-";
pEmail.textContent = "-";
pMensaje.textContent = "-";

nombreInput.value = "";
emailInput.value = "";
mensajeInput.value = "";
});