/*18.	Después de realizar una llamada a un archivo local en formato json, utiliza el método then() 
para filtrar los datos y mostrar solo los elementos que cumplan ciertos 
criterios (por ejemplo, mostrar solo los nombres que comiencen con "A").*/

// Función para obtener los datos del archivo JSON
function fetchData() {
    return fetch('dataa.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }
            return response.json();
        });
}

// Función para filtrar y mostrar los nombres que comienzan con "A"
function filterAndDisplayNames(data) {
    const filteredNames = data.filter(item => item.name.startsWith('A'));

    const nameList = document.getElementById('nameList');
    filteredNames.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item.name;
        nameList.appendChild(listItem);
    });
}

// Llamada a la función fetchData y luego filtrado y muestra de los datos
fetchData()
    .then(data => {
        filterAndDisplayNames(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
