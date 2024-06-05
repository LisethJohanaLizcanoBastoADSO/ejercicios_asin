/*1.	Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo, comenzando desde desde y terminando con hasta.
Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
•	Usando setInterval.
•	Usando setTimeout anidado.*/

function imprimirNumeros(desde, hasta) {
    let currentNumber = desde;

    function imprimirNumero() {
        console.log(currentNumber);
        currentNumber++;

        if (currentNumber <= hasta) {
            setTimeout(imprimirNumero, 1000);
        } else {
            console.log('Finalizado');
        }
    }

    imprimirNumero();
}

// Llamada a la función
imprimirNumeros(1, 5);






