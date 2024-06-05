/*8.	Crear una función findIndex que acepte un array y un callback y que:
•	por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
•	devuelva el índice del elemento pasado como argumento del primer callback que devuelva true
•	sí ningún callback devuelve true, devuelva undefined*/

function findIndex(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return i;
        }
    }
    return undefined;
}

const num = [1, 2, 3, 4, 5];

const indexOfNumber = findIndex(num, function(elemento) {
    return typeof elemento === 'number';
});

console.log(indexOfNumber); // Output: 0

//Falta