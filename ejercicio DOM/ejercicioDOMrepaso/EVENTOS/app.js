const inputNota = document.getElementById("inputNota");
const btnAgregar = document.getElementById("btnAgregar");
const lista = document.getElementById("lista");

console.log(inputNota, btnAgregar, lista);




    function agregarNota() {
        const entrada = inputNota.value.trim();
        if (entrada === "") {
            return;
        }
        const li = document.createElement("li");
        li.textContent = entrada;
        inputNota.value="";
        lista.appendChild(li);
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.addEventListener("click", function () {
            li.remove();
            entrada.textContent = "";

        });
        li.appendChild(btnEliminar);
    };

    btnAgregar.addEventListener("click", function () {
        agregarNota();
    });

    
inputNota.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        agregarNota();
    }


});