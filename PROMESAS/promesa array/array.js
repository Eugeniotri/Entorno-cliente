function obtenerDatos() {
    return new Promise((resolve, reject) => {

        const personas = [
            { nombre: "Ana", nota: 7 },
            { nombre: "Luis", nota: 5 },
            { nombre: "Eva", nota: 9 }
        ]

        setTimeout(() => {
            resolve(personas)
        }, 3000);
    }

    );
}

function procesarDatos(personas) {
    return new Promise((resolve, reject) => {
        if ((personas.length) === 0) {
            reject("No hay personas");
            return;
        }
        setTimeout(() => {
            const procesados = personas.map(persona => ({
                ...persona,
                estado: persona.nota >= 5 ? "aprobado" : "suspenso"
            }));
            resolve(procesados);
        });

    });
}

obtenerDatos()
    .then(personas => {
        console.log(personas)
        return procesarDatos("Alumnos",personas);
    })
    .then(procesados => {
        console.log("Alumnos notas",procesados);
    })
    .catch(error => {
        console.log(error);
    })