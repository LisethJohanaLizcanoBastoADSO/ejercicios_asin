/*14.	Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que diga 
"Operación completada". Utiliza async/await.*/


async function operacionAsincrona() {
    let result = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Operación completada");
        }, 1000);
    });
    return result;
}

operacionAsincrona().then((result) => {
    console.log(result);
});

//Falta