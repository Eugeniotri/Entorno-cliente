/*Libros 
Introducción 
En este ejercicio, vamos a crear un sistema que ges one una enda de libros.  
Este sistema contará con funciones para agregar libros, mostrarlos, buscar un libro por 
su tulo, calcular el precio total de todos los libros y aplicar un descuento bajo ciertas 
condiciones. 

1. Definición del Objeto Libro 
Pista: Comencemos por definir un constructor para el objeto Libro.  
Este objeto tendrá tres propiedades: tulo, autor y precio. La función constructor debe 
recibir estos parámetros y asignarlos a las propiedades correspondientes. 

*En este ejercicio me planteo el hacer una clase Libro en el cual le meta el constructor y las propiedades
 , pero creo q me pides que cree el objeto a traves de una función
*/
function Libro(titulo, autor, precio) {
    this.titulo = titulo;
    this.autor = autor;
    this.precio = precio;
}

/*2. Creación de la Clase Biblioteca 
Pista: La clase Biblioteca se encargará de ges onar los libros.  
En el constructor de la clase, inicializaremos un array vacío llamado libros donde 
almacenaremos todos los libros que se vayan agregando.
*aquí si que está claro que me pide crear una clase con su constructor , métodos y propiedades*/

class Biblioteca {
    constructor(nombre, poblacion) {
        this.nombre = nombre;
        this.poblacion = poblacion;
        this.libros = [];//aqui inicializo array vacio
    }
    agregarLibro(libro) {
        this.libros.push(libro);
        console.log(`El libro ${libro.titulo} se ha agregado a la biblioteca`);
    }


    /*3. Método para Agregar Libros 
    Pista: Crea un método agregarLibro(libro) dentro de la clase Biblioteca.  
    Este método debe aceptar un objeto Libro como parámetro y añadirlo al array libros 
    usando el método push().  
    Asegúrate de incluir un mensaje que confirme que el libro ha sido agregado.
    
    4. Método para Mostrar Libros 
    Pista: Implementa el método mostrarLibros(),
    que recorrerá el array libros y mostrará 
    los detalles de cada libro.  
    Usa forEach() para iterar sobre los libros y 
    verifica si la lista está vacía, mostrando un 
    mensaje adecuado si no hay libros.*/

    mostrarLibro() {
        if (this.libros.length === 0) {
            console.log("Biblioteca vacia");
        } else {
            this.libros.forEach(libro => {
                console.log(libro.titulo)
            });
        }


    }
    mostrarLibrofacil() {
        if (this.libros.length === 0) {
            console.log("Biblioteca vacía")
        } else {
            for (let i = 0; i < this.libros.length; i++) {
                let libro = this.libros[i];
                console.log(`${libro.titulo}`);
            }
        }
    }
    /*5. Método para Buscar un Libro 
    Pista: Crea un método buscarLibro( titulo) que buscará un libro en el array usando 
    f
     ind().  
    Para que la búsqueda no sea sensible a mayúsculas, convierte el título a minúsculas 
    con toLowerCase(). */
    buscarLibro(titulo) {
        const libroEncontrado = this.libros.find(libro =>
            libro.titulo.toLowerCase() === titulo.toLowerCase()
        );
        if (libroEncontrado) {
            console.log(`${libroEncontrado.titulo} encontrado`)

        } else {
            console.log("libro no encontrado");

        }
    }
    /*6. Método para Calcular el Precio Total 
    Pista: Implementa el método calcularPrecioTotal() que u lizará reduce() para sumar los 
    precios de todos los libros.  
    Retorna el precio total y muéstralo.*/

    calcularPrecioTotal() {
        let total = 0;
        for (let i = 0; i < this.libros.length; i++) {
            total = total + this.libros[i].precio;
        }
        console.log(`el precio total es ${total} euros`);
        return total;

    }
    /*7. Método para Aplicar Descuento 
    Pista: Crea el método aplicarDescuento(umbral, porcentajeDescuento).  
    Este método debe calcular el precio total y verificar si es mayor que el umbral. Si lo es, 
    aplica el descuento y muestra el nuevo precio. 
    */

    aplicarDescuento(umbral, porcentajeDescuento) {
        let total = this.calcularPrecioTotal();
        if (total >= umbral) {
            let descuento = total * (porcentajeDescuento / 100);
            let nuevoPrecio = total - descuento;
            console.log(`precio con decuento ${nuevoPrecio} euros`);
        } else {
            console.log(`Este libro no tiene descuento vale${total} euros`)
        }
    }
}
/*Ejemplo de Uso
Para poner a prueba el sistema, crea una instancia
 de Biblioteca, agrega algunos libros, 
muestra la lista,
 busca un libro y 
 aplica un descuento. */

let libro1 = new Libro("Viaje al centro de la tierra", "Julio Verne", 39);
let libro2 = new Libro("Los Pilares de la tierra","Adrián Asimov",27.50);
let libro3 = new Libro("Piratas del Caribe","Pedro Sánchez", 10);
let laCiberbiblioteca= new Biblioteca("Ciberbiblioteca","Vilamarxant");
laCiberbiblioteca.agregarLibro(libro1);
laCiberbiblioteca.agregarLibro(libro2);
laCiberbiblioteca.agregarLibro(libro3);
laCiberbiblioteca.mostrarLibro();
laCiberbiblioteca.buscarLibro("Piratas del caribe");
laCiberbiblioteca.aplicarDescuento(20, 25);