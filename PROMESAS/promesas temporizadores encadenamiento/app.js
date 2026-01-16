console.log("conectado el js");
function temporizador(ms) {
    return new Promise((resolve, reject) => {
        if (ms < 0) {
            reject("El tiempo debe ser positivo");
            return;
        }
        setTimeout(() => {
            resolve(`el temporizador ha finalizado en ${ms / 1000} segundos`)
        }, ms);
    }

    );
}



temporizador(2000)
    .then((resultado) => { console.log(resultado) })
    .catch((error) => { console.log(error) });
temporizador(-5)
    .then((resultado) => { console.log(resultado) })
    .catch((error) => { console.log(error) });
temporizador(1000)
    .then((resultado) => { console.log(resultado) })
    .catch((error) => { console.log(error) });
temporizador(500)
    .then((resultado) => { console.log(resultado) })
    .catch((error) => { console.log(error) });

temporizador(t)// aquí da un error de referencia
    .then((resultado) => { console.log(resultado) })
    .catch((error) => { console.log(error) });