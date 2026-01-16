console.log("Objeto promesa compruebo conectado JS");

function obtenerDatos() {
    return new Promise((resolve, reject) => {
        const persona = {
            nombre: "Pepe",
            edad: 45
        }
        setTimeout(() => {
            resolve(persona);
        }, 2000);
    });
}

function procesarDatos(persona) {
    return new Promise((resolve, reject) => {
        if (!persona) {
            reject("No hay persona")
            return;
        }
        setTimeout(() => {

            const procesado = {
                ...persona,
                edad: persona.edad + 1
            }
            resolve(procesado);
        },1000 );
    }
    );
}

obtenerDatos()
                .then((persona)=>{
                    console.log(persona)
                    return procesarDatos(persona);
                })
                .then ((procesado)=>{
                    console.log(procesado);
                })
                .catch(error=>{
                    console.log(error);
                })
