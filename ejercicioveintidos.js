/*22.	Crea un bucle que realice llamadas 
asincrónicas utilizando async / await para procesar 
una lista de elementos uno por uno.*/

// Lista de elementos
const elementos = [1, 2, 3, 4, 5];

// Función asincrónica para simular una llamada asíncrona
async function procesarElemento(elemento) {
  // Simulamos un retardo de tiempo
  await new Promise(resolve => setTimeout(resolve, 1000));
  // Imprimimos el elemento procesado
  console.log("Elemento procesado:", elemento);
}

// Función principal asincrónica
async function procesarLista(lista) {
  // Iteramos sobre cada elemento de la lista
  for (const elemento of lista) {
    // Llamamos a la función para procesar el elemento
    await procesarElemento(elemento);
  }
  // Imprimimos un mensaje al terminar de procesar todos los elementos
  console.log("Procesamiento completo");
}

// Llamamos a la función principal para procesar la lista
procesarLista(elementos);


//Falta