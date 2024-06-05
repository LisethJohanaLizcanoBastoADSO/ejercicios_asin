/*24.	Crear un objeto proxy usando la clase Proxy*/


// Creamos un objeto normal
const targetObj = {
  name: "Alice",
  age: 30
};

// Creamos un objeto para manejar el proxy
const handler = {
  // Método para obtener propiedades
  get: function(target, prop) {
    // Mostramos un mensaje indicando la propiedad a la que se accede
    console.log(`Accediendo a la propiedad "${prop}"`);
    // Devolvemos el valor de la propiedad del objeto base
    return target[prop];
  },
  // Método para establecer propiedades
  set: function(target, prop, value) {
    // Mostramos un mensaje indicando la propiedad que se está estableciendo y su valor
    console.log(`Estableciendo la propiedad "${prop}" a "${value}"`);
    // Establecemos el valor de la propiedad en el objeto base
    target[prop] = value;
  }
};

// Creamos el objeto proxy
const proxyObj = new Proxy(targetObj, handler);

// Accedemos a las propiedades del proxy
console.log(proxyObj.name); // Mostrará un mensaje y luego el valor de la propiedad 'name'
proxyObj.age = 31; // Mostrará un mensaje y luego establecerá el valor de la propiedad 'age' en 31


//Falta