/*21.	Realiza tres Promises, algunas de las cuales se resuelvan 
y otras se rechacen.Utiliza Promise.allSettled() para obtener información sobre el estado de todas las Promises.*/



const num = [2, 6, 1];

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(num.length = 2 );
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(num.length = 6);
    }, 3000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(num.length = 2);
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

//Falta en si