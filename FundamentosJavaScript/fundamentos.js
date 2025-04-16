/* Declarar variables en JavaScript */
var nombre = "Carlos"; // (forma antigua) 
let edad = 30; // (forma moderna y recomendable)
const pais = "España"; // constante, no se puede reasignar

/* Tipos de Datos en JavaScript /*

/* Números (number) */
edad = 25;
let precio = 9.99;

/* Cadenas (string) */
let nombre = "Juan";
let saludo = 'Hola';
let frase = `Mi nombre es ${nombre}`; // Template string

/* Booleanos */
let esMayor = true;
let esEstudiante = false;

/* Nulo */
let resultado = null;

/* Indefinido */
let tarea;
console.log(tarea); // undefined

/* objetos */
let persona = {
    nombre: "Ana",
    edad: 28,
    esEstudiante: true
};

console.log(persona.nombre);

/* Arreglos */
let frutas = ["manzana", "pera", "sandia"];

frutas[1];

/* Conversión de tipos */

/* Implícita */
resultado = "5" + 2; // "52" (convierte número a string)
let suma = "5" * 2; // 10 (convierte string a número)

/* Explícita */
Number("10") // 10
String(123) // "123"
Boolean(0) // false

// 🧮 OPERADORES ARITMÉTICOS
console.log("== OPERADORES ARITMÉTICOS ==");

let a = 10;
let b = 3;

console.log("a + b =", a + b);   // Suma → 13
console.log("a - b =", a - b);   // Resta → 7
console.log("a * b =", a * b);   // Multiplicación → 30
console.log("a / b =", a / b);   // División → 3.333...
console.log("a % b =", a % b);   // Módulo (resto) → 1
console.log("a ** b =", a ** b); // Potencia → 1000

console.log("\n");

// 🧷 OPERADORES DE ASIGNACIÓN
console.log("== OPERADORES DE ASIGNACIÓN ==");

let x = 5;
console.log("Inicial x =", x);

x += 3; // x = x + 3
console.log("x += 3 →", x);   // 8

x -= 2;
console.log("x -= 2 →", x);   // 6

x *= 4;
console.log("x *= 4 →", x);   // 24

x /= 2;
console.log("x /= 2 →", x);   // 12

x %= 5;
console.log("x %= 5 →", x);   // 2

x **= 3;
console.log("x **= 3 →", x);  // 8

console.log("\n");

// 🔍 OPERADORES DE COMPARACIÓN
console.log("== OPERADORES DE COMPARACIÓN ==");

let num1 = 5;
let num2 = "5";

console.log("5 == '5' →", num1 == num2);     // true (compara valor)
console.log("5 === '5' →", num1 === num2);   // false (compara valor y tipo)
console.log("5 != '5' →", num1 != num2);     // false
console.log("5 !== '5' →", num1 !== num2);   // true

console.log("5 > 3 →", num1 > 3);            // true
console.log("5 < 10 →", num1 < 10);          // true
console.log("5 >= 5 →", num1 >= 5);          // true
console.log("5 <= 4 →", num1 <= 4);          // false
console.log("'5' >= 5 →", num2 >= 5)         //true

console.log("\n");

// 🔗 OPERADORES LÓGICOS
console.log("== OPERADORES LÓGICOS ==");

esEstudiante = true;
let tieneCarnet = false;

console.log("true && false →", esEstudiante && tieneCarnet); // false
console.log("true || false →", esEstudiante || tieneCarnet); // true
console.log("!true →", !esEstudiante);                       // false
console.log("!false →", !tieneCarnet);                       // true

// Combinación de múltiples condiciones
edad = 20;
console.log("Edad ≥ 18 y es estudiante →", edad >= 18 && esEstudiante); // true


