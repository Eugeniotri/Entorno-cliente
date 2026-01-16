function obtenerDatos() {
    return new Promise((resolve, reject) => {
        //const personas =[];
        const personas = [
            { nombre: "Eugenio", edad: 50 },
            { nombre: "Luz", edad: 29 }]


        setTimeout(() => {
            resolve(personas);
        }, 2000);

    });
}


function procesarDatos(personas) {
    return new Promise((resolve, reject) => {
        if (personas.length === 0) {
            reject("No hay personas disponibles")
            return;
        }
        setTimeout(() => {
            const procesadas = personas.map(persona => ({
                ...persona,
                edad: persona.edad + 1
            }));
            resolve(procesadas);
        }, 1000);

    });

}


obtenerDatos()
    .then(personas => {
        console.log("Datos obtenidos:", personas)
        return procesarDatos(personas);
    })

    .then(procesadas => {
        console.log(
            "Datos procesados:",
            procesadas.forEach(persona =>
                console.log(`nombre: ${persona.nombre}, edad:${persona.edad}`)
            ))
    })

    .catch(error => { console.log(error) });


