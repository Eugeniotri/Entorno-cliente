console.log("CONECTADO A DOM");
const textoInput = document.getElementById("textoInput");
const btnGuardar = document.querySelector("#btnGuardar");
const btnBorrar = document.getElementById("btnBorrar");
const resultado = document.getElementById("resultado");
 console.log(textoInput, btnGuardar, btnBorrar, resultado);
 const datoGuardado= JSON.parse(localStorage.getItem("dato"));

 if(datoGuardado){
    resultado.textContent =datoGuardado.texto;
    resultado.style.color = "blue";
 }
 btnGuardar.addEventListener("click",function(){
const texto= textoInput.value;
if (texto === ""){
    resultado.textContent = "Campo obligatorio";
    resultado.style.color="red";
    return;
}
const objeto ={
    texto:texto
}
 
 localStorage.setItem("dato",JSON.stringify(objeto));

 resultado.textContent = objeto.texto;
 resultado.style.color = "green";
 textoInput.value = "";

 });

 btnBorrar.addEventListener("click", function(){
    localStorage.removeItem("dato");
    resultado.textContent = "-";
    resultado.style.color = "black";
    textoInput.value="";

 });