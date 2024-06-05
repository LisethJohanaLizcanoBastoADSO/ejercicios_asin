/*15.	Crea una Promise que se rechace después de 2 segundos y captura el error 
para imprimir "Error: Promise rechazada".*/

new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Error: Promise rechazada");
    }, 2000);
})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log("Error capturado:", error);
});