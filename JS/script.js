'use strict';
let title = "Первый проект";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 15000;
let rollback = Math.ceil(Math.random()*100);
let fullPrice = 100000;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " рублей" + "(" + Math.round(screenPrice/77.82) + " долларов" + " или " + Math.round(screenPrice/2.7) + " гривен" + " или " + Math.round(screenPrice/12.23) + " юаней" + ")");

console.log("Стоимость разработки сайта " + fullPrice + " рублей" + "(" + Math.round(fullPrice/77.82) + " долларов" + " или " + Math.round(fullPrice/2.7) + " гривен" + " или " + Math.round(fullPrice/12.23) + " юаней" + ")");

console.log(screens.toLowerCase().split(" "));
console.log("Процент отката посреднику за работу " + (fullPrice * (rollback/100)) + " монгольских тубриков");

