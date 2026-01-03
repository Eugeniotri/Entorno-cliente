console.log("notas conectado");
//METO EN CONST EL INPUT EL BOTON Y LA LISTA (ul)
const notaInput = document.getElementById("notaInput");
const btnAgregar = document.getElementById("btnAgregar");
const listaNotas = document.getElementById("listaNotas");
//CREO EVENTO PARA EL BOTON (primero creo li para 
// poder agregar al listaNotas con appendChild,
//  este li lo voy a rellenar con notaInput.value)
btnAgregar.addEventListener("click", function () {
    const li = document.createElement("li");
    const textoNota = notaInput.value;

    li.textContent = textoNota;
    listaNotas.appendChild(li);
    notaInput.value = "";

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener("click",function(){
        li.remove();
    });
        li.appendChild(btnEliminar);
        notaInput.value = "";
    });

    notaInput.addEventListener("keydown", function(event){
        if(event.key === "Enter"){
            event.preventDefault();
            btnAgregar.click();
        }
        

    });
