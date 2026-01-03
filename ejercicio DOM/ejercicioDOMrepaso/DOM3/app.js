console.log("JS DOM3 FUNCIONANDO");
const textoInput=document.getElementById("textoInput");
const boton = document.querySelector("#btnMostrar");
const resultado=document.getElementById("resultado");

boton.addEventListener("click",function(){
    if(textoInput.value===""){
        resultado.textContent="No has escrito nada";
        resultado.style.fontWeight = "bold";
        resultado.style.color="red";
    }else{
resultado.textContent=textoInput.value;
resultado.style.color="green";
textoInput.value="";}
});