/*4.	Crear una función filter que acepte un array y un callback y que:
•	por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
•	sí dicho callback devuelve true, pushea el elemento a un nuevo array
•	devuelva el array final con los elementos que pasaron el "filtro".*/

function filter(array, callback) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (callback(element)) {
            result.push(element);
        }
    }

    return result;
}

// Definimos un array de números
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Creamos una función callback para verificar si un número es par
function esPar(numero) {
    return numero % 2 === 0;
}

// Utilizamos la función filter personalizada para obtener solo los números pares
let evenNumbers = filter(numbers, esPar);

console.log(evenNumbers);

//Falta
