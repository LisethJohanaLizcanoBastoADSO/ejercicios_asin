/*11.	¿Cuál es el resultado del código a continuación?*/


let i = 0;

setTimeout(() => alert(i),100); //?

//Asumimos que el tiempo para ejecutar esta función es > 100 ms
for(let j = 0; j < 100000000; j++){
    i++;
}

//El resultado del código anterior imprime una alert despues de 100 ms donde se mostrara el numero 100000000.

