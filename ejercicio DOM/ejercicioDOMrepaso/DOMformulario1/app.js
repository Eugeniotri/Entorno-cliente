const { jsxs } = require("react/jsx-runtime");

console.log("CONECTADO ");

const form = document.getElementById("formulario");
const nombreInput = document.getElementById("nombre");
const edadInput = document.getElementById("edad");
const resultado = document.getElementById("resultado");
const lista = document.getElementById("listaPersonas");

console.log("form,nombreInput,edadInput,resultado, lista");
let personas = JSON.parse(localStorage.getItem("personas"))||[];
const personaGuardada =JSON.parse(localStorage.getItem("persona"));
resultado.textContent=personaGuardada.nombre;

form.addEventListener("submit",function(event){
    event.preventDefault();
    const nombre = nombreInput.value.trim();
    const edad = edadInput.value.trim(); 

    if(nombre==="" ||edad===""){
        resultado.textContent ="Debes introducir nombre y edad";
        return;
    }
    persona={
        nombre:nombre,
        edad:Number(edad)
    };
localStorage.setItem("persona",JSON.stringify(persona));
resultado.textContent="Persona guardada";
nombreInput.value="";
edadInput.value="";
});