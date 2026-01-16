console.log("conectado el JS");

function obtenerValor() {
    return new Promise((resolve, reject) => {

        let num = 10;
        setTimeout(() => {
            resolve(num);
        }, 2000);
    });
}

function procesarValor(num) {
    return new Promise((resolve, reject) => {
        if (!num) {
            reject("El número no existe");
            return;
        }
        setTimeout(() => {
            const procesado = num * 2;
            resolve(procesado);
        }, 1000);
    });
}

obtenerValor()
    .then(num => {
        console.log(num)
        return procesarValor(num);
    })
    .then(procesado => {
        console.log(procesado);
    })
    .catch(error => {
        console.log(error);
    })



