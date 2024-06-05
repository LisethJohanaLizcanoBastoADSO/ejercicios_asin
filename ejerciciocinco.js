/*5.	Crear una función every que acepte un array y un callback y que:
•	por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
•	devuelva true si todas las llamadas al callback devolvieron true*/


function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            return false;
        }
    }
    return true;
}

const flores = ['girasol', 'amapola', 'rosa'];

const todasSonFlores = every(flores, function(flor) {
    return typeof flor === 'string';
});

console.log(todasSonFlores);