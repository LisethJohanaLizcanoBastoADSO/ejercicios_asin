/*16.	Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y devuelva un número diferente. 
Luego, encadena las tres Promises para sumar los resultados y mostrar el resultado final.*/

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
})
.then(result => {
    console.log(result); // Output: 1
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2);
        }, 1000);
    });
})
.then(result => {
    console.log(result); // Output: 2
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(3);
        }, 1000);
    });
})
.then(result => {
    console.log(result); // Output: 3
    const total = result + 2 + 1;
    console.log("Resultado final:", total); // Output: Resultado final: 6
})
.catch(error => {
    console.log("Error capturado:", error);
});