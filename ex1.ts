import PromptSync from 'prompt-sync';

const prompt = PromptSync()

/* Ejercicio 1: Programa TypeScript que lea dos números enteros por teclado y los muestre por
pantalla. */

const numA: number = parseInt(prompt('Escribe un numero: '));
const numB: number = parseInt(prompt('Escribe otro numero: '));

console.log(`El primer numero es ${numA},`, `el segundo numero es ${numB}`);

/* Ejercicio 2: Programa TypeScript que lea un nombre y muestre por pantalla: 'Buenos días
nombre_introducido'. */

const nombre: string = prompt('Cual es tu nombre: ');
console.log(`'Buenos días, ${nombre}`);

/* Ejercicio 3: Escribe un programa TypeScript que lea un número entero por teclado y obtenga y
muestre el doble y el triple de ese número.*/

const numero: number = parseInt(prompt('Escriba un numero para ver el doble y el triple del mismo: '))

const numX2: number = numero * 2
const numX3: number = numero * 3

console.log(`el doble de su numero es ${numX2}`,
    `y el triple de su numero es ${numX3}`)


/* Ejercicio 4: Programa que lea una cantidad de grados centígrados y la pase a grados Fahrenheit
(F= 32 + (9 * C / 5)). */

const temp: number = parseInt(prompt('Digite los grados celsius a convertir en Fahrenheit: '))

const cAf: number = temp * 9 / 5 + 32

console.log(`${temp}° Celsius son ${cAf}° Fahrenheit`)


/* Ejercicio 5: Programa que lea el valor del radio de una circunferencia y calcule la longitud y el área
de la circunferencia. */

const rad: number = parseInt(prompt('Para saber la, longitud y el area de una circunferencia, digite el radio: '))

const pi: number = Math.PI

const Lrad: number = 2 * pi * rad
const Arad: number = pi * rad ** 2

console.log(`Si el radio es ${rad} entonces la longtiud es ${Lrad} y el area es ${Arad}`)
