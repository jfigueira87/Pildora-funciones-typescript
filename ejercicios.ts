// Ejericio 01
// Descripción:
// Crea una función llamada calculadora que tome tres parámetros: dos números y un operador (como string). La función debe devolver el resultado de la operación entre los dos números. Los operadores permitidos son: '+', '-', '*', '/'.

function calculadora(a: number, b: number, operador: string): any {
    switch (operador) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : "Error: División por cero";
        default:
            return "Operador no válido";
    }
}

console.log(calculadora(10, 5, '+'));  // 15
console.log(calculadora(10, 5, '/'));  // 2
console.log(calculadora(10, 0, '/'));  // "Error: División por cero"


//Ejercicio 02
// Escribe una función llamada concatenar que tome dos cadenas de texto como parámetros. El segundo parámetro debe ser opcional y, si no se proporciona, debe usar una cadena vacía por defecto. La función debe devolver la concatenación de ambas cadenas.

function concatenar(cadena1: string, cadena2?: string): string {
    return cadena1 + (cadena2 ?? "");
}

console.log(concatenar("Hola", " Mundo"));  // "Hola Mundo"
console.log(concatenar("Hola"));            // "Hola"


//Ejercicio 03
// Implementa una función llamada combinar que pueda aceptar tanto dos números como dos cadenas. Si se pasan números, la función debe devolver su suma. Si se pasan cadenas, debe devolver su concatenación.

function combinar(a: string, b: string): string;
function combinar(a: number, b: number): number;
function combinar(a: any, b: any): any {
    return a + b;
}

console.log(combinar(4, 6));                // 10
console.log(combinar("Hola, ", "TypeScript"));  // "Hola, TypeScript"
