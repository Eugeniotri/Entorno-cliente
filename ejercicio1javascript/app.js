console.log("Javascript conectado correctamente");
/*Libros
Introducción
En este ejercicio, vamos a crear un sistema que ges3one una 3enda de libros.
Este sistema contará con funciones para agregar libros, mostrarlos, buscar un libro por
su ;tulo, calcular el precio total de todos los libros y aplicar un descuento bajo ciertas
condiciones.
1. Definición del Objeto Libro
Pista: Comencemos por definir un constructor para el objeto Libro.
Este objeto tendrá tres propiedades: 3tulo, autor y precio. La función constructor debe
recibir estos parámetros y asignarlos a las propiedades correspondientes.*/
function crearLibro(titulo, autor, precio) {
    return {
        titulo: titulo,
        autor: autor,
        precio: precio
    };
}
const libro1 = crearLibro("El QUijote", "Cervantes", 19.95);
console.log(libro1);
alert(libro1.autor);

/*2. Creación de la Clase Biblioteca
Pista: La clase Biblioteca se encargará de ges3onar los libros.
En el constructor de la clase, inicializaremos un array vacío llamado libros donde
almacenaremos todos los libros que se vayan agregando.*/

class Biblioteca {
    constructor(nombre, ciudad) {
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.libros = [];
    }
    /*3. Método para Agregar Libros
Pista: Crea un método agregarLibro(libro) dentro de la clase Biblioteca.
Este método debe aceptar un objeto Libro como parámetro y añadirlo al array libros
usando el método push().Asegúrate de incluir un mensaje que confirme que el libro ha sido agregado.*/
    agregarLibro(libro) {
        this.libros.push(libro);
        console.log("El libro " + libro.titulo + " ha sido añadido.");
    }
    /*
4. Método para Mostrar Libros
Pista: Implementa el método mostrarLibros(), 
que recorrerá el array libros y mostrará
los detalles de cada libro.
Usa forEach() para iterar sobre los libros y
 verifica si la lista está vacía, mostrando un
mensaje adecuado si no hay libros.´*/
    mostrarLibros() {

        if (this.libros.length === 0) {
            console.log("No hay libros.");
            return;
        }
        this.libros.forEach(function (libro) {
            console.log(libro.titulo+ "-" + libro.autor+ "-"+ libro.precio);
        });

    }
    /*5. Método para Buscar un Libro
Pista: Crea un método buscarLibro(3tulo) que buscará un libro en el array usando
find().
Para que la búsqueda no sea sensible a mayúsculas, convierte el ;tulo a minúsculas
con toLowerCase().*/

    buscarLibro(tituloBuscado) {
        const libroEncontrado =this.libros.find(function (libro) {
            return libro.titulo.toLowerCase()=== tituloBuscado.toLowerCase();
        });
            if (libroEncontrado) {
                console.log("Libro encontrado " + libro.titulo);
                return libroEncontrado;
            }else{
                console.log("Libro no encontrado");
                return null;
            }

        
    }

    /*6. Método para Calcular el Precio Total
    Pista: Implementa el método calcularPrecioTotal() que u3lizará reduce() para sumar los
    precios de todos los libros.
    Retorna el precio total y muéstralo.*/
    calcularPrecioTotal() {
        const total = this.libros.reduce(function (acumulador, libro) {
            return acumulador + libro.precio;
        }, 0);
        console.log("Precio total: "+ total);
        return total;}
    
    /*
    7. Método para Aplicar Descuento
    Pista: Crea el método aplicarDescuento(umbral, porcentajeDescuento).
    Este método debe calcular el precio total y verificar si es mayor que el umbral. Si lo es,
    aplica el descuento y muestra el nuevo precio.*/

    aplicarDescuento(porcentaje) {
        const total = this.libros.reduce(function (acumulador, libro) {
            return acumulador + libro.precio;
        }, 0);
        if (total <= 50) {
            const descuento = total * (porcentaje / 100);
            const totalDescuento = total - descuento;
            console.log("Total con descuento:" + totalDescuento);
        } elseconsole.log("No se aplica descuento " + total);

    }
}

const miBiblioteca = new Biblioteca("Central", "Valencia");
console.log(miBiblioteca);
miBiblioteca.agregarLibro(libro1);
miBiblioteca.calcularPrecioTotal();
miBiblioteca.mostrarLibros();