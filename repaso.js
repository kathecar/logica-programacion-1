// Debe solicitar al usuario 3 números por
// prompt y guardarlos en sus respectivas 
// variables.

function katheresultado(){
// const prompt = require("prompt-sync")();  Lo comento porque voy a ingresar datos por formulario
console.log()
let lista = [];
let num1 = Number(document.getElementById("numero1").value);
let num2 = Number(document.getElementById('numero2').value);
let num3 = Number(document.getElementById('numero3').value);
console.log(num1, num2, num3)

//Verificacion de tipo de datos
if (isNaN(num1)||isNaN(num2)||isNaN(num3)) {
    console.log ("Revisa si el valor ingresado es un número")
}
else {
    lista.push(num1,num2,num3);
}

// identificar el orden mayor centro y menor
//Debe imprimir los números por consola 
// ordenados de mayor a menor, viceversa

/*if (num1 === num2 && num2 === num3 && num3 === num1) {
    console.log("Los números son iguales.");
} 
else {*/
    // Ordenamos los números de mayor a menor usando un algoritmo de intercambio
    

    for (let i = 0; i < lista.length; i++) {
        for (let j = i + 1; j < lista.length; j++) {

            //Verificacion de numeros iguales

            if (lista[i] === lista[j]){
                console.log ("El número" + " " + lista[i] + " " + "esta repetido")
                document.getElementById("numerosiguales").innerHTML="El número" + " " + lista[i] + " " + "esta repetido";
            }
        }
    }

    for (let i = 0; i < lista.length; i++) {
        for (let j = i + 1; j < lista.length; j++) {
            if (lista[i] < lista[j]) {
                // Intercambio de elementos 
                [lista[i], lista[j]] = [lista[j], lista[i]];
            }
        }
    }

console.log("El orden de los numeros de mayor a menor es: " + lista)
document.getElementById("resultadoTexto").innerHTML="Los números ordenados de mayor a menor es: " + lista;


// Debe ser capaz de identificar si los números 
// son iguales e imprimir un mensaje por consola 
// o por el DOM diciendo que los números son iguales.

for (let i = 0; i < lista.length; i++) {
    for (let j = i + 1; j < lista.length; j++) {
        if (lista[i] > lista[j]) {
            // Intercambio de elementos haciendo una igualacion
            [lista[i], lista[j]] = [lista[j], lista[i]];
        }
    }
}
console.log("Los números ordenados de menor a mayor son: " + lista);

document.getElementById("resultadoTexto2").innerHTML="Los números ordenados de menor a mayor son: " + lista;

}

// Función para reiniciar los campos 
function reiniciar() {
    document.getElementById("resultado").reset(); // Limpia todos los inputs
}