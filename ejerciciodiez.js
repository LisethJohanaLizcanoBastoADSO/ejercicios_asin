/*10.	Crear una función takeWhile que acepte un array y un callback y que:
•	por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
•	devuelva un array con los elementos hasta el primer callback que devolvió false
•	(Inverso del dropWhile)*/


function takeWhile(array, callback) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            break;
        }
        result.push(array[i]);
    }

    return result;
}

// Ejemplo de uso
const array = [1, 2, 3, 4, 5, 6];
const callback = (element) => element < 4;

const result = takeWhile(array, callback);
console.log(result); // Debería imprimir: [1, 2, 3]
