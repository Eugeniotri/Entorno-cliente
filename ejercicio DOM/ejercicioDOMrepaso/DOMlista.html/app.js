console.log("DOM lista conectado");
const input = document.getElementById("textoInput");
const btnAgregar = document.getElementById("btnAgregar");
const lista = document.getElementById("lista");
console.log(input,btnAgregar,lista);


btnAgregar.addEventListener("click", function () {
    const entrada = input.value.trim();
    if (entrada === "") {
        entrada.textContent = "Debes escribir algo";
        return;
    }
    entrada.textContent="";

    const li = document.createElement("li");
    li.textContent = entrada ;
    
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener("click", function () {
        li.remove();
    });
    li.appendChild(btnEliminar);
    lista.appendChild(li);
    input.value="";
    

});
