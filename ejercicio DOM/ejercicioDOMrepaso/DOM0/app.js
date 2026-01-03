console.log("Conectado a DOM 0");
const texto = document.querySelector("#texto");
const boton = document.getElementById("btnCambiar");
console.log(texto);
console.log(boton);

boton.addEventListener("click",function(){
    texto.textContent="Texto Cambiado";
    texto.style.color= "red";
});