// Ejericio 01
// Descripción:
// Crea una función llamada calculadora que tome tres parámetros: dos números y un operador (como string). La función debe devolver el resultado de la operación entre los dos números. Los operadores permitidos son: '+', '-', '*', '/'.
function calculadora(a, b, operador) {
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
console.log(calculadora(10, 5, '+')); // 15
console.log(calculadora(10, 5, '/')); // 2
console.log(calculadora(10, 0, '/')); // "Error: División por cero"
//Ejercicio 02
// Escribe una función llamada concatenar que tome dos cadenas de texto como parámetros. El segundo parámetro debe ser opcional y, si no se proporciona, debe usar una cadena vacía por defecto. La función debe devolver la concatenación de ambas cadenas.
function concatenar(cadena1, cadena2) {
    return cadena1 + (cadena2 !== null && cadena2 !== void 0 ? cadena2 : "");
}
console.log(concatenar("Hola", " Mundo")); // "Hola Mundo"
console.log(concatenar("Hola")); // "Hola"
function combinar(a, b) {
    return a + b;
}
console.log(combinar(4, 6)); // 10
console.log(combinar("Hola, ", "TypeScript")); // "Hola, TypeScript"
