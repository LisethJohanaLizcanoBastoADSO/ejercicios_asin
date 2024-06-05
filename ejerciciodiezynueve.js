/*19.	Crea una función asincrónica que realice una llamada 
a un archivo local en formato json y luego manipule los datos recibidos para mostrar información específica.*/

async function miFuncionAsincronaLlama() {
  try {
    const response = await fetch('data.json'); // Realizar la llamada al archivo JSON
    const data = await response.json(); // Convertir la respuesta a JSON
    // Manipular los datos recibidos para mostrar información específica
    console.log('Información específica:');
    console.log('Nombre:', data.name);
    console.log('Edad:', data.age);
    console.log('Email:', data.email);
  } catch (error) {
    console.error('Error:', error); // Manejar cualquier error que ocurra durante la llamada
  }
}

miFuncionAsincronaLlama();
