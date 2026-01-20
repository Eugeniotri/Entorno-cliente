//VAMOS CON EL GET PEDIR A LA API LAS 10 PRIMERAS TAREAS
//  Y AÑADIR A LA LISTA

//cojo la lista y la meto en una variable
const lista = document.getElementById("listaTareas");
//pido datos al servidor

fetch("https://jsonplaceholder.typicode.com/todos")
    //el servidor me devuelve datos
    .then(res => res.json())
    .then(tareas => {
        //recorro del índice 0 al 10 excluido y meto en li
        tareas.slice(0, 10).forEach(tarea => {
            const li = document.createElement("li");
            const titulo = tarea.title;
            const estado = tarea.completed ? "completada" : "pendiente";
           
            //otra forma con el if en lugar de ternario
            //let estado;
            //if(tarea.completed===true){ estado="completada";
            //}else{estado="pendiente";
            //}
            
            
            //relleno el li q tb se puede hacer con textContent
            li.innerText = `Título: ${titulo} - Estado: ${estado}`;
            //añado el li a la lista
            lista.appendChild(li);
        })
    });

//VAMOS CON EL POST ENVIAR
const formulario = document.getElementById("formulario");
const inputTitulo = document.getElementById("titulo");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const titulo = inputTitulo.value;

    const tarea = {
        title: titulo,
        completed: false
    };
    //voy a enviar una tarea a este servidor(POST) con el fetch ASINCRONO
    fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tarea)

    })//Devuelve cuando los tiene promesas
        //primera promesa devuelve res y los paso a  json
        .then(res => res.json())
        //segunda promesa , ya con los datos puedo trabjar
        .then(respuesta => {
            const li = document.createElement("li");
            li.textContent = `Título: ${respuesta.title}-Estado: pendiente`;
            lista.appendChild(li);
            inputTitulo.value = "";
        })
        .catch(error => console.log("Error en POST", error));
});



