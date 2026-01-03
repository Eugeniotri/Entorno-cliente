const parrafo = document.getElementById("texto");
const boton = document.querySelector("#btnCambiar");

boton.addEventListener("click",function(){
    parrafo.textContent="Párrafo cambiado con éxito";
    parrafo.style.color="red";
    parrafo.style.fontSize="50px";
});