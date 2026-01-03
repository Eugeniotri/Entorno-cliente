console.log("Videoclub")

function crearPelicula(titulo, director, precio) {
    return {
        titulo: titulo,
        director: director,
        precio: precio
    };
}
const peli1 = crearPelicula("Matrix", "Wachowski", 10);

class Videoclub {
    constructor(nombre, ciudad) {
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.peliculas = [];
    }
    agregarPelicula(pelicula) {
        this.peliculas.push(pelicula);
        console.log(`la película ${pelicula.titulo} se ha agregado`);
    }
    mostrarPeliculas() {
        if (this.peliculas.length === 0) {
            console.log("No hay películas");
            return;
        } else {
            this.peliculas.forEach(function (pelicula) {
                console.log(
                    pelicula.titulo + "-" + pelicula.director + "-" + pelicula.precio);

            });

        }
    }
    buscarPelicula(tituloBuscado){
        const tituloEncontrado = this.peliculas.find(function(pelicula){
            return pelicula.titulo.toLowerCase()===tituloBuscado.toLowerCase();
        });
        if(tituloEncontrado){
            console.log(peliculaEncontrada.titulo);
            return tituloEncontrado;
        }else{
            console.log("pelicula No encontrada");
            return null;
        }
    }

    calcularPreciototal(){
        const total = this.peliculas.reduce(function(acumulador,pelicula){
            return acumulador+pelicula.precio;
        },0);
        console.log("Precio total: "+ total);
        return total;
    }
    
}