//primer evento CARGAR LA PAGINA document escucha un evento 
// q se dispara cuando cargo elhtml y DOM esta listo
//  y loq hace es la funcion de cargar en las variables
document.addEventListener("DOMContentLoaded", function () {
    //meto en la variable formulario el elemento form a través de Id  
    const formulario = document.getElementById("formContacto");
    //meto en la variable preview el elemento etiqueta p
    //  con este id para escribir ahí el texto con textContent
    const preview = document.getElementById("previsualizacion");
    /*al cargar la pagina recupero datos guardados en el storage
    del navegador y getItem busca el el almacen si hay algo
    con la clave "contacto"*/
    const guardado = localStorage.getItem("contacto");
    //si hay algo guardado en el preview muestramelo
    if (guardado !== null) {
        preview.textContent = guardado;

    }


    //Segundo evento ENVIAR FORMULARIO
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();//evita recrgar, enviar datos
// En las siguiente variables almaceno loq
//  el usuario rellena con .value y lo guardo en la
//  variable texto

        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const mensaje = document.getElementById("mensaje").value;
        const texto =
            "Nombre: " + nombre + "\n" +
            "Email: " + email + "\n" +
            "Mensaje: " + mensaje;
        preview.textContent =  texto;
        //guardo en localStorage
        localStorage.setItem("contacto", texto);
    });

});
