/*3.	Crear una función map que acepte un array y un callback y que:
•	por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
•	obtenga el resultado
•	lo pushee a un nuevo array
•	devuelva el array final con el resultado de cada una de las llamadas al callback.*/


// Definición de la función 'map'
function map(array, callback) {
    // Creamos un array vacío llamado 'result' para almacenar los resultados
    let result = [];
  
    // Iteramos sobre cada elemento del 'array' proporcionado
    for (let i = 0; i < array.length; i++) {
      // Almacenamos el elemento actual en la variable 'element'
      let element = array[i];
      
      // Llamamos a la función 'callback' pasándole el 'element' como argumento
      // y almacenamos el resultado en la variable 'callbackResult'
      let callbackResult = callback(element);
      
      // Agregamos el 'callbackResult' al array 'result' utilizando 'push()'
      result.push(callbackResult);
    }
  
    // Devolvemos el array 'result' con los resultados
    return result;
}
  
  // Definimos un array llamado 'numbers' con los valores 1, 2, 3, 4 y 5
  let numbers = [1, 2, 3, 4, 5];
  
  // Llamamos a la función 'map' pasándole el array 'numbers' y una función de callback
  // que multiplica cada número por 2. El resultado se almacena en 'mappedNumbers'
  let mappedNumbers = map(numbers, (number) => {
    return number * 2;
  });
  
  // Imprimimos el array 'mappedNumbers' utilizando 'console.log()'
  console.log(mappedNumbers);

//Falta