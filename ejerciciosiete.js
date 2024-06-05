/*7.	Crear una función find que acepte un array y un callback y que:
 
•	por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
•	devuelva el elemento pasado como argumento del primer callback que devuelva true
•	sí ningún callback devuelve true, devuelva undefined*/

// Definimos la función find
function find(array, callback) {
  // Iteramos sobre cada elemento del array
  for (let elemento of array) {
    // Ejecutamos el callback con el elemento como argumento
    const resultado = callback(elemento);
    // Verificamos si el callback devuelve true
    if (resultado === true) {
      // Si devuelve true, devolvemos el elemento actual
      return elemento;
    }
  }
  // Si ninguno de los callbacks devuelve true, devolvemos undefined
  return undefined;
}

// Ejemplo de uso
const array = [1, 2, 3, 4, 5];

// Definimos una función de callback para encontrar números pares
function esPar(numero) {
  return numero % 2 === 0;
}

// Llamamos a la función find para encontrar el primer número par en el array
const primerPar = find(array, esPar);
console.log("Primer número par encontrado:", primerPar); // Debería imprimir 2

//Falta
