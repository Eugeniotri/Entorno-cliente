class Estudiante {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.calificaciones = [];
    }

    mostrarInfoEstudiante() {
        console.log("nombre: " + this.nombre);
        console.log("edad:" + this.edad);
        console.log("calificaciones: " + this.calificaciones)
    }

    calcularPromedio() {
        if (this.calificaciones.length === 0) {
            console.log("no hay calificaciones");
            return 0;
        } else {
            const total = this.calificaciones.reduce((acumulador, nota) => acumulador + nota, 0);
            const promedio = total / this.calificaciones.length;
            console.log(`el promedio es ${promedio}`);
            return promedio;
        }

    }

    agregarCalificacionNueva(nuevaNota){
        this.calificaciones.push(nuevaNota);

    }
}
    const e1=new Estudiante("ana",7);
 e1.agregarCalificacionNueva(10);
 e1.agregarCalificacionNueva(8);
 e1.mostrarInfoEstudiante();
 e1.calcularPromedio();
const dobleNota= e1.calcularPromedio()*2;
 


