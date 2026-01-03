console.log("CONECTAdo a DOM");
const nombreInput = document.getElementById("nombre");
const edadInput = document.getElementById("edad");
const btnGuardar = document.getElementById("btnGuardar");
const btnBorrar = document.getElementById("btnBorrartodo");
const resultado = document.getElementById("resultado");
const listaPersonas = document.getElementById("listaPersonas");

console.log(nombreInput, edadInput, btnGuardar, btnBorrar, resultado);
let personas = JSON.parse(localStorage.getItem("personas"))||[];
const personaGuardada = JSON.parse(localStorage.getItem("persona"));

if (personaGuardada) {
    resultado.textContent = `Nombre: ${personaGuardada.nombre}, Edad: ${personaGuardada.edad}.`;
    resultado.style.color = "blue";

}
btnGuardar.addEventListener("click", function () {
    const nombre = nombreInput.value.trim();
    const edad = edadInput.value.trim();

    if (nombre === "" || edad === "") {
        resultado.textContent = "Tienes que rellenar los campos";
        resultado.style.color = "red";
        return;
    }


    const persona = {
        nombre: nombre,
        edad: Number(edad)
    }
    console.log(persona);
    localStorage.setItem("personaGuardada",JSON.stringify(persona));
    resultado.textContent = "persona guardada";
    resultado.style.color = "green";
    nombreInput.value = "";
    edadInput.value = "";

});

btnBorrar.addEventListener("click", function () {
    localStorage.removeItem("persona");
    resultado.textContent = "-";
    resultado.style.color = "black";
    nombreInput.value = "";
    edadInput.value = "";

});