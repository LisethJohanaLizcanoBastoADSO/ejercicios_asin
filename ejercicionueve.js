/*9.	Crear una función dropWhile que acepte un array y un callback y que:
•	por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
•	devuelva un array con los elementos a partir del primer callback que devolvió false
•	(Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el callback de true, no los agrega, cuando el callback da false por primera vez agrega todos 
    los elementos restantes a partir de dicho elemento inclusive)*/

    function dropWhile(array, callback) {
        let result = [];
        let shouldDrop = true;
    
        for (let i = 0; i < array.length; i++) {
            if (shouldDrop && !callback(array[i])) {
                shouldDrop = false;
            }
    
            if (!shouldDrop) {
                result.push(array[i]);
            }
        }
    
        return result;
    }
    
    // Ejemplo de uso
    const array = [1, 2, 3, 4, 5, 6];
    const callback = (element) => element < 4;
    
    const result = dropWhile(array, callback);
    console.log(result); // Debería imprimir: [4, 5, 6]
    