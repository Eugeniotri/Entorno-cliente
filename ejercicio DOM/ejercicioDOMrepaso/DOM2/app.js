console.log("JS DOM2 CONECTADO");
const boton=document.getElementById("btnToggle");
const parrafo=document.querySelector("#parrafo");
let visible = true;

boton.addEventListener("click",function(){
 if(visible ===true){
    parrafo.style.display = "none";
    boton.textContent = "Mostrar";
    visible =false;
 }else{
    parrafo.style.display = "block";
    boton.textContent ="Ocultar";
    visible = true;
 }
});