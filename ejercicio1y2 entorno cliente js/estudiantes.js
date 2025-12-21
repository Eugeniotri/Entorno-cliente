

/*Ejercicio: Gestión de Estudiantes
 1.
 Crea un objeto Estudiante que tenga las 
 siguientes propiedades:
  o nombre (cadena de texto)
   o edad (número)
    o calificaciones (array de números)*/


function Estudiante(nombre,edad,calificaciones){
    this.nombre=nombre;
    this.edad=edad;
    this.calificaciones=calificaciones;
}
/*2. Crea una función mostrarInfoEstudiante() 
que acepte un objeto Estudiante como parámetro
 y muestre su información en la consola.*/
 function mostrarInfoEstudiante(estudiante){
    console.log(`Estudiante ${estudiante.nombre}, Edad ${estudiante.edad}, notas ${estudiante.calificaciones}`);
 }
/*3. Crea una función calcularPromedio()
 que acepte un objeto Estudiante y 
 devuelva el promedio de sus calificaciones.*/
 function calcularPromedio(estudiante){
    let total=0;
    for (let i=0;i<estudiante.calificaciones.length;i++){
        total+=estudiante.calificaciones[i];
    }
    let promedio=total/estudiante.calificaciones.length;
    console.log(`El promedio de ${estudiante.nombre} es de ${promedio}`);
    return promedio;
 }

 //ahora lo hago con array.reduce(acumuladori=0,nota i=1)=>resultado acumulador+nota,empezandodesdeacumulador=0
 function calcularPromedio2(estudiante){
    let suma = estudiante.calificaciones.reduce((acumulador, nota)=>acumulador+nota, 0);
        let promedio= suma/estudiante.calificaciones.length;
        console.log(`el promedio de ${estudiante.nombre} es de ${promedio}`);
        return promedio;
    }
 /*4. Función agregarCalificacion(): 
o Pista: Esta función debe tomar el objeto Estudiante y una nueva 
calificación. Debes agregar esa nueva calificación al array de 
calificaciones existente.*/

function agregarCalificacion(estudiante, nuevaNota){
    estudiante.calificaciones.push(nuevaNota);
    console.log(`El estudiante ${estudiante.nombre} ha añadido la calificación de ${nuevaNota} y ahora sus notas son ${estudiante.calificaciones}`);
}
/*5. Crea varios objetos Estudiante y prueba las funciones con ellos. */


estudiante1= new Estudiante("Pablo",35,[9,5,6]);
estudiante2= new Estudiante("Pedro", 49, [7,8,9]);
estudiante3 = new Estudiante("Marta",29,[9,8,7]);

agregarCalificacion(estudiante1,10);
mostrarInfoEstudiante(estudiante1);
calcularPromedio(estudiante2);
mostrarInfoEstudiante(estudiante3);
calcularPromedio2(estudiante3);
