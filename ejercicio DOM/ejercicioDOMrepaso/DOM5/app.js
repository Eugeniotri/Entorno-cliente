console.log("Conectado a DOM5");
const nombreInput= document.getElementById("nombreInput");
const boton = document.querySelector("#btnMostrar");
const resultado = document.getElementById("resultado");
const btnBorrar = document.getElementById("btnBorrar");
const btnRecuperar = document.getElementById("btnRecuperar");
const guardado = JSON.parse(localStorage.getItem("resultado"));
const btnBorrarStorage = document.getElementById("btnBorrarStorage");
if(guardado){
    resultado.textContent = guardado;
    resultado.style.color="orange";
}else{resultado.textContent = "";}

boton.addEventListener("click", function(){
    const entrada =nombreInput.value;
    if (entrada === ""){
        resultado.textContent="Campo obligatorio";
        resultado.style.color= "red";
    }else{
    resultado.textContent= entrada;
    resultado.style.color="green";
    nombreInput.value="";
    }
});
btnBorrar.addEventListener("click", function(){
    if(resultado.textContent !==""){
        
        localStorage.setItem("resultado",JSON.stringify(resultado.textContent));
        resultado.textContent = "";
    }
    }

);
btnRecuperar.addEventListener("click", function(){
    const resultadoRecuperado = JSON.parse(localStorage.getItem("resultado"));
resultado.textContent = resultadoRecuperado;
resultado.style.color = "blue";
});
btnBorrarStorage.addEventListener("click", function(){
    localStorage.removeItem("resultado")
});
