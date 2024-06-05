/*20.	Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego utilice Promise.all() 
para mostrar un mensaje cuando todas se hayan resuelto.*/


const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(6);
    }, 3000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 5000);
});

Promise.all([promise1, promise2, promise3])
    .then(values => {
        const total = values.reduce((acc, curr) => acc + curr, 0);
        console.log("Resultado final:", total);
    })
    .catch(error => {
        console.error("Ocurrió un error:", error);
    });
