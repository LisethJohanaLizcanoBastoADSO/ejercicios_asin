/*13.	Crea una Promise que se resuelva después de 3 segundos y luego imprima "Promise resuelta" cuando se cumpla.*/


new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resuelta");
    }, 3000);
})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});

//Falta

