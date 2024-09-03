let myName = "Alex";
import { greet } from "./modules/greet.js";
greet(myName);

alert("Переведем температуру из Цельсия в Фаренгейты");
import { celsiusToFahrenheit } from "./modules/celsiusToFahrenheit.js";
const tf = Number(prompt("Введите температуру в градусах цельсия"));
celsiusToFahrenheit(tf);

alert("А теперь сколько пролетит объект за указаннное время в секундах");
import { calculateFallDistance } from "./modules/calculateFallDistance.js";
const tc = Number(prompt("Введите время падения в секундах"));
calculateFallDistance(tc);

alert("Определим среднее арифметическое трех чисел");
import { calculateAverage } from "./modules/calculateAverage.js";
const num1 = Number(prompt("Введите первое число"));
const num2 = Number(prompt("Введите второе число"));
const num3 = Number(prompt("Введите третье число"));
calculateAverage(num1, num2, num3);

alert ("Введите два слова");
let str1=prompt("Введите первое слово");
let str2=prompt("Введите второе слово");
console.log(str2);
console.log(str1);
import { concatStrings } from "./modules/concatStrings.js";
concatStrings(str1,str2);

console.log(myName);